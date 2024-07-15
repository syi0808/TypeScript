import { dedent } from "../../_namespaces/Utils.js";
import { jsonToReadableText } from "../helpers.js";
import { forEachPackageJsonScopeScenario } from "./packageJsonScope.js";
import { solutionBuildWithBaseline } from "./solutionBuilder.js";
import { TscWatchCompileChange } from "./tscWatch.js";
import {
    createServerHost,
    createWatchedSystem,
    libFile,
    TestServerHost,
} from "./virtualFileSystemWithWatch.js";

function getRandomFileContent() {
    return "export const x = 10;";
}
function getPkgPackageJsonContent(pkg: number) {
    return jsonToReadableText({
        name: `pkg${pkg}`,
        version: "0.0.1",
        exports: {
            import: "./import.js",
            require: "./require.js",
        },
    });
}
function getPkgImportContent(type: "Import" | "Require", pkg: number) {
    return `export interface ${type}Interface${pkg} {}`;
}
function getPkgTypeRefContent(type: "Import" | "Require", pkg: number) {
    return dedent`
        export {};
        declare global {
            interface ${type}Interface${pkg} {}
        }
    `;
}

function getPkg01ImportImportContent() {
    return dedent`
        import type { ImportInterface0 } from "pkg0";
        import type { ImportInterface1 } from "pkg1";
    `;
}

function forEachResolutionCacheProjectWithImportsScenario(
    forTsserver: boolean,
    action: ResolutionCacheLifeTimeAction,
) {
    action(
        "project with imports",
        () =>
            (!forTsserver ? createWatchedSystem : createServerHost)({
                "/home/src/project/tsconfig.json": jsonToReadableText({
                    compilerOptions: { traceResolution: true },
                    include: ["*.ts"],
                    exclude: ["*.d.ts"],
                }),
                "/home/src/project/main.ts": getRandomFileContent(),
                "/home/src/project/fileWithImports.ts": dedent`
                    import type { ImportInterface0 } from "pkg0" assert { "resolution-mode": "import" };
                    import type { RequireInterface1 } from "pkg1" assert { "resolution-mode": "require" };
                `,
                "/home/src/project/randomFileForImport.ts": getRandomFileContent(),
                "/home/src/project/node_modules/pkg0/package.json": getPkgPackageJsonContent(0),
                "/home/src/project/node_modules/pkg0/import.d.ts": getPkgImportContent("Import", 0),
                "/home/src/project/node_modules/pkg0/require.d.ts": getPkgImportContent("Require", 0),
                "/home/src/project/node_modules/pkg1/package.json": getPkgPackageJsonContent(1),
                "/home/src/project/node_modules/pkg1/import.d.ts": getPkgImportContent("Import", 1),
                "/home/src/project/fileWithTypeRefs.ts": dedent`
                    /// <reference types="pkg2" resolution-mode="import"/>
                    /// <reference types="pkg3" resolution-mode="require"/>
                    interface LocalInterface extends ImportInterface2, RequireInterface3 {}
                    export {}
                `,
                "/home/src/project/randomFileForTypeRef.ts": getRandomFileContent(),
                "/home/src/project/node_modules/pkg2/package.json": getPkgPackageJsonContent(2),
                "/home/src/project/node_modules/pkg2/import.d.ts": getPkgTypeRefContent("Import", 2),
                "/home/src/project/node_modules/pkg2/require.d.ts": getPkgTypeRefContent("Require", 2),
                "/home/src/project/node_modules/pkg3/package.json": getPkgPackageJsonContent(3),
                "/home/src/project/node_modules/pkg3/import.d.ts": getPkgTypeRefContent("Import", 3),
                "/home/src/project/node_modules/@types/pkg4/index.d.ts": getRandomFileContent(),
                [libFile.path]: libFile.content,
            }, { currentDirectory: "/home/src/project" }),
        () => [
            {
                caption: "modify randomFileForImport by adding import",
                edit: sys => sys.prependFile("/home/src/project/randomFileForImport.ts", `import type { ImportInterface0 } from "pkg0" assert { "resolution-mode": "import" };\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "modify randomFileForTypeRef by adding typeRef",
                edit: sys => sys.prependFile("/home/src/project/randomFileForTypeRef.ts", `/// <reference types="pkg2" resolution-mode="import"/>\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "write file not resolved by import",
                edit: sys => sys.writeFile("/home/src/project/node_modules/pkg1/require.d.ts", getPkgImportContent("Require", 1)),
                timeouts: sys => {
                    sys.runQueuedTimeoutCallbacks(); // failed lookup
                    sys.runQueuedTimeoutCallbacks(); // actual update
                },
            },
            {
                caption: "write file not resolved by typeRef",
                edit: sys => sys.writeFile("/home/src/project/node_modules/pkg3/require.d.ts", getPkgTypeRefContent("Require", 3)),
                timeouts: sys => {
                    sys.runQueuedTimeoutCallbacks(); // failed lookup
                    sys.runQueuedTimeoutCallbacks(); // actual update
                },
            },
            {
                caption: "modify package.json and that should re-resolve",
                edit: sys => sys.replaceFileText("/home/src/project/node_modules/pkg1/package.json", "./require.js", "./require1.js"),
                timeouts: sys => {
                    sys.runQueuedTimeoutCallbacks(); // failed lookup
                    sys.runQueuedTimeoutCallbacks(); // actual update
                },
            },
            {
                caption: "write file not resolved by import",
                edit: sys => sys.writeFile("/home/src/project/node_modules/pkg1/require1.d.ts", getPkgImportContent("Require", 1)),
                timeouts: sys => {
                    sys.runQueuedTimeoutCallbacks(); // failed lookup
                    sys.runQueuedTimeoutCallbacks(); // actual update
                },
            },
            {
                caption: "delete file with imports",
                edit: sys => sys.deleteFile("/home/src/project/fileWithImports.ts"),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "delete file with typeRefs",
                edit: sys => sys.deleteFile("/home/src/project/fileWithTypeRefs.ts"),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "delete resolved import file",
                edit: sys => sys.deleteFile("/home/src/project/node_modules/pkg0/import.d.ts"),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "delete resolved typeRef file",
                edit: sys => sys.deleteFile("/home/src/project/node_modules/pkg2/import.d.ts"),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ],
        "/home/src/project/tsconfig.json",
        "/home/src/project/main.ts",
        ResolutionCacheLifeTimeScenarios.SingleProject,
    );
}

function forEachResolutionCacheProjectWithMultiplePlacesImportsScenario(
    forTsserver: boolean,
    action: ResolutionCacheLifeTimeAction,
) {
    action(
        "project with multiple places imports",
        () =>
            (!forTsserver ? createWatchedSystem : createServerHost)({
                "/home/src/project/tsconfig.json": jsonToReadableText({
                    compilerOptions: { traceResolution: true },
                    files: [
                        "fileWithImports.ts",
                        "randomFileForImport.ts",
                        "a/fileWithImports.ts",
                        "b/ba/fileWithImports.ts",
                        "b/randomFileForImport.ts",
                        "c/ca/fileWithImports.ts",
                        "c/ca/caa/randomFileForImport.ts",
                        "c/ca/caa/caaa/fileWithImports.ts",
                        "c/cb/fileWithImports.ts",
                        "d/da/daa/daaa/x/y/z/randomFileForImport.ts",
                        "d/da/daa/daaa/fileWithImports.ts",
                        "d/da/daa/fileWithImports.ts",
                        "d/da/fileWithImports.ts",
                        "e/ea/fileWithImports.ts",
                        "e/ea/eaa/fileWithImports.ts",
                        "e/ea/eaa/eaaa/fileWithImports.ts",
                        "e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts",
                        "f/fa/faa/x/y/z/randomFileForImport.ts",
                        "f/fa/faa/faaa/fileWithImports.ts",
                    ],
                }),
                "/home/src/project/main.ts": getRandomFileContent(),
                "/home/src/project/fileWithImports.ts": getPkg01ImportImportContent(),
                "/home/src/project/randomFileForImport.ts": getRandomFileContent(),
                "/home/src/project/a/fileWithImports.ts": getPkg01ImportImportContent(),
                "/home/src/project/b/ba/fileWithImports.ts": getPkg01ImportImportContent(),
                "/home/src/project/b/randomFileForImport.ts": getRandomFileContent(),
                "/home/src/project/c/ca/fileWithImports.ts": getPkg01ImportImportContent(),
                "/home/src/project/c/ca/caa/randomFileForImport.ts": getRandomFileContent(),
                "/home/src/project/c/ca/caa/caaa/fileWithImports.ts": getPkg01ImportImportContent(),
                "/home/src/project/c/cb/fileWithImports.ts": getPkg01ImportImportContent(),
                "/home/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts": getRandomFileContent(),
                "/home/src/project/d/da/daa/daaa/fileWithImports.ts": getPkg01ImportImportContent(),
                "/home/src/project/d/da/daa/fileWithImports.ts": getPkg01ImportImportContent(),
                "/home/src/project/d/da/fileWithImports.ts": getPkg01ImportImportContent(),
                "/home/src/project/e/ea/fileWithImports.ts": getPkg01ImportImportContent(),
                "/home/src/project/e/ea/eaa/fileWithImports.ts": getPkg01ImportImportContent(),
                "/home/src/project/e/ea/eaa/eaaa/fileWithImports.ts": getPkg01ImportImportContent(),
                "/home/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts": getRandomFileContent(),
                "/home/src/project/f/fa/faa/faaa/fileWithImports.ts": getPkg01ImportImportContent(),
                "/home/src/project/f/fa/faa/x/y/z/randomFileForImport.ts": getRandomFileContent(),
                "/home/src/project/node_modules/pkg0/index.d.ts": getPkgImportContent("Import", 0),
                [libFile.path]: libFile.content,
            }, { currentDirectory: "/home/src/project" }),
        () => [
            {
                caption: "modify randomFileForImport by adding import",
                edit: sys => sys.prependFile("/home/src/project/randomFileForImport.ts", `import type { ImportInterface0 } from "pkg0";\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "modify b/randomFileForImport by adding import",
                edit: sys => sys.prependFile("/home/src/project/b/randomFileForImport.ts", `import type { ImportInterface0 } from "pkg0";\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "modify c/ca/caa/randomFileForImport by adding import",
                edit: sys => sys.prependFile("/home/src/project/c/ca/caa/randomFileForImport.ts", `import type { ImportInterface0 } from "pkg0";\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "modify d/da/daa/daaa/x/y/z/randomFileForImport by adding import",
                edit: sys => sys.prependFile("/home/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts", `import type { ImportInterface0 } from "pkg0";\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "modify e/ea/eaa/eaaa/x/y/z/randomFileForImport by adding import",
                edit: sys => sys.prependFile("/home/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts", `import type { ImportInterface0 } from "pkg0";\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "modify randomFileForImport by adding unresolved import",
                edit: sys => sys.prependFile("/home/src/project/randomFileForImport.ts", `import type { ImportInterface1 } from "pkg1";\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "modify b/randomFileForImport by adding unresolved import",
                edit: sys => sys.prependFile("/home/src/project/b/randomFileForImport.ts", `import type { ImportInterface1 } from "pkg1";\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "modify c/ca/caa/randomFileForImport by adding unresolved import",
                edit: sys => sys.prependFile("/home/src/project/c/ca/caa/randomFileForImport.ts", `import type { ImportInterface1 } from "pkg1";\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "modify d/da/daa/daaa/x/y/z/randomFileForImport by adding unresolved import",
                edit: sys => sys.prependFile("/home/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts", `import type { ImportInterface1 } from "pkg1";\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "modify e/ea/eaa/eaaa/x/y/z/randomFileForImport by adding unresolved import",
                edit: sys => sys.prependFile("/home/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts", `import type { ImportInterface1 } from "pkg1";\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "modify f/fa/faa/x/y/z/randomFileForImport by adding import",
                edit: sys => sys.prependFile("/home/src/project/f/fa/faa/x/y/z/randomFileForImport.ts", `import type { ImportInterface0 } from "pkg0";\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "modify f/fa/faa/x/y/z/randomFileForImport by adding unresolved import",
                edit: sys => sys.prependFile("/home/src/project/f/fa/faa/x/y/z/randomFileForImport.ts", `import type { ImportInterface1 } from "pkg1";\n`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "add file for unresolved import and random edit",
                edit: sys => {
                    sys.ensureFileOrFolder({
                        path: "/home/src/project/node_modules/pkg1/index.d.ts",
                        content: getPkgImportContent("Import", 1),
                    });
                    sys.appendFile("/home/src/project/randomFileForImport.ts", `export const y = 10;`);
                },
                timeouts: sys => {
                    sys.runQueuedTimeoutCallbacks(); // Failed lookups
                    sys.runQueuedTimeoutCallbacks(); // actual update
                },
            },
        ],
        "/home/src/project/tsconfig.json",
        "/home/src/project/main.ts",
        ResolutionCacheLifeTimeScenarios.SingleProjectWithMultiplePlacesResolutions,
    );
}

function getSysForResolutionCacheMultipleProjects(forTsserver: boolean) {
    const sys = (!forTsserver ? createWatchedSystem : createServerHost)({
        "/home/src/project/tsconfig.a.json": jsonToReadableText({
            compilerOptions: {
                composite: true,
                traceResolution: true,
            },
            files: [
                "aMain.ts",
                "aFileWithImports.ts",
                "aRandomFileForImport.ts",
                "aRandomFileForImport2.ts",
            ],
        }),
        "/home/src/project/aMain.ts": getRandomFileContent(),
        "/home/src/project/aFileWithImports.ts": dedent`
            import type { ImportInterface0 } from "pkg0";
            export { x } from "./aRandomFileForImport";
            export { x as x2 } from "./aRandomFileForImport2";
            export const y = 10;
        `,
        "/home/src/project/aRandomFileForImport.ts": getRandomFileContent(),
        "/home/src/project/aRandomFileForImport2.ts": getRandomFileContent(),
        "/home/src/project/node_modules/pkg0/index.d.ts": getPkgImportContent("Import", 0),
        "/home/src/project/tsconfig.b.json": jsonToReadableText({
            compilerOptions: {
                composite: true,
                traceResolution: true,
            },
            files: [
                "bMain.ts",
                "bFileWithImports.ts",
                "bRandomFileForImport.ts",
                "bRandomFileForImport2.ts",
            ],
            references: [
                { path: "./tsconfig.a.json" },
            ],
        }),
        "/home/src/project/bMain.ts": getRandomFileContent(),
        "/home/src/project/bFileWithImports.ts": dedent`
            export { y } from "./aFileWithImports";
            export { x } from "./bRandomFileForImport";
            import type { ImportInterface0 } from "pkg0";
        `,
        "/home/src/project/bRandomFileForImport.ts": getRandomFileContent(),
        "/home/src/project/bRandomFileForImport2.ts": getRandomFileContent(),
        "/home/src/project/tsconfig.json": jsonToReadableText({
            compilerOptions: {
                composite: true,
                traceResolution: true,
                module: "amd",
            },
            files: [
                "cMain.ts",
                "cFileWithImports.ts",
                "cRandomFileForImport.ts",
                "cRandomFileForImport2.ts",
            ],
            references: [
                { path: "./tsconfig.a.json" },
                { path: "./tsconfig.b.json" },
            ],
        }),
        "/home/src/project/cMain.ts": getRandomFileContent(),
        "/home/src/project/cFileWithImports.ts": dedent`
            import { y } from "./bFileWithImports";
            import type { ImportInterface0 } from "pkg0";
        `,
        "/home/src/project/cRandomFileForImport.ts": getRandomFileContent(),
        "/home/src/project/cRandomFileForImport2.ts": getRandomFileContent(),
        "/home/src/project/pkg0.d.ts": getPkgImportContent("Import", 0),
        [libFile.path]: libFile.content,
    });
    solutionBuildWithBaseline(sys, ["/home/src/project"]);
    return sys;
}

function forEachResolutionCacheMultipleProjectsScenario(
    forTsserver: boolean,
    action: ResolutionCacheLifeTimeAction,
) {
    [
        { project: "/home/src/project/tsconfig.b.json", mainFile: "/home/src/project/bMain.ts", file: "bRandomFileForImport" },
        { project: "/home/src/project/tsconfig.json", mainFile: "/home/src/project/cMain.ts", file: "cRandomFileForImport" },
    ].forEach(
        ({ project, mainFile, file }) =>
            action(
                `multiple projects${mainFile.endsWith("cMain.ts") ? " with redirect options" : ""}`,
                () => getSysForResolutionCacheMultipleProjects(forTsserver),
                () => [
                    {
                        caption: `modify ${file} by adding import`,
                        edit: sys => sys.prependFile(`/home/src/project/${file}.ts`, `export type { ImportInterface0 } from "pkg0";\n`),
                        timeouts: sys => sys.runQueuedTimeoutCallbacks(),
                    },
                ],
                project,
                mainFile,
                ResolutionCacheLifeTimeScenarios.MultipleProjects,
            ),
    );
}

export enum ResolutionCacheLifeTimeScenarios {
    SingleProject,
    MultipleProjects,
    SingleProjectWithMultiplePlacesResolutions,
    SingleProjectWithPackageJsonEdits,
}

export type ResolutionCacheLifeTimeAction = (
    scenario: string,
    sys: () => TestServerHost,
    edits: () => readonly TscWatchCompileChange[],
    project: string,
    mainFile: string,
    kind: ResolutionCacheLifeTimeScenarios,
) => void;
export function forEachResolutionCacheLifeTimeScenario(
    forTsserver: boolean,
    action: ResolutionCacheLifeTimeAction,
) {
    describe("resolutionCache:: on project with imports sharing", () => {
        forEachResolutionCacheProjectWithImportsScenario(forTsserver, action);
    });

    describe("resolutionCache:: resolutions are shared from multiple places", () => {
        forEachResolutionCacheProjectWithMultiplePlacesImportsScenario(forTsserver, action);
    });

    describe("resolutionCache:: with multiple projects", () => {
        forEachResolutionCacheMultipleProjectsScenario(forTsserver, action);
    });

    describe("resolutionCache:: with package json edits", () => {
        forEachPackageJsonScopeScenario(
            forTsserver,
            (scenario, sys, edits, project, mainFile) =>
                action(
                    scenario,
                    sys,
                    edits,
                    project,
                    mainFile,
                    ResolutionCacheLifeTimeScenarios.SingleProjectWithPackageJsonEdits,
                ),
        );
    });
}

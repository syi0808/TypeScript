currentDirectory:: /src/projects/project useCaseSensitiveFileNames: false
Input::
//// [/src/projects/project/src/tsconfig.json]
{
  "compilerOptions": {
    "target": "es2016",
    "composite": true,
    "module": "node16",
    "outDir": "../out",
    "traceResolution": true
  },
  "files": [
    "main.ts",
    "fileA.ts",
    "fileB.mts",
    "randomFile.ts",
    "a/randomFile.ts",
    "b/ba/randomFile.ts",
    "b/randomFile.ts",
    "c/ca/randomFile.ts",
    "c/ca/caa/randomFile.ts",
    "c/ca/caa/caaa/randomFile.ts",
    "c/cb/randomFile.ts",
    "d/da/daa/daaa/x/y/z/randomFile.ts",
    "d/da/daa/daaa/randomFile.ts",
    "d/da/daa/randomFile.ts",
    "d/da/randomFile.ts",
    "e/ea/randomFile.ts",
    "e/ea/eaa/randomFile.ts",
    "e/ea/eaa/eaaa/randomFile.ts",
    "e/ea/eaa/eaaa/x/y/z/randomFile.ts",
    "f/fa/faa/x/y/z/randomFile.ts",
    "f/fa/faa/faaa/randomFile.ts"
  ]
}

//// [/src/projects/project/src/main.ts]
export const x = 10;

//// [/src/projects/project/src/fileA.ts]
import { foo } from "./fileB.mjs";
foo();


//// [/src/projects/project/src/fileB.mts]
export function foo() {}

//// [/src/projects/project/src/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/a/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/b/ba/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/b/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/ca/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/ca/caa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/ca/caa/caaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/cb/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/daa/daaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/daa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/eaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/f/fa/faa/faaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts]
export const x = 10;

//// [/src/projects/project/package.json]
{
  "name": "app",
  "version": "1.0.0"
}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/a/lib/lib.es2016.full.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


/a/lib/tsc.js -w -p /src/projects/project/src/tsconfig.json --explainFiles --extendedDiagnostics
Output::
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

Current directory: /src/projects/project CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/tsconfig.json 2000 undefined Config file
Synchronizing program
CreatingProgramWith::
  roots: ["/src/projects/project/src/main.ts","/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
  options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","traceResolution":true,"watch":true,"project":"/src/projects/project/src/tsconfig.json","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
File '/src/projects/project/src/package.json' does not exist.
Found 'package.json' at '/src/projects/project/package.json'.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/main.ts 250 undefined Source file
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/fileA.ts 250 undefined Source file
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in CJS mode with conditions 'require', 'types', 'node'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exists - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/fileB.mts 250 undefined Source file
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/a/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/a/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/b/ba/package.json' does not exist.
File '/src/projects/project/src/b/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/b/ba/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/b/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/c/ca/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/c/ca/caa/package.json' does not exist.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/caa/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/caa/caaa/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/c/cb/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/cb/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/package.json' does not exist.
File '/src/projects/project/src/d/da/package.json' does not exist.
File '/src/projects/project/src/d/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/e/ea/package.json' does not exist.
File '/src/projects/project/src/e/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist.
File '/src/projects/project/src/f/fa/package.json' does not exist.
File '/src/projects/project/src/f/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts 250 undefined Source file
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/faaa/randomFile.ts 250 undefined Source file
File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
File '/package.json' does not exist.
FileWatcher:: Added:: WatchInfo: /a/lib/lib.es2016.full.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/a/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/b/ba/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/b/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/caa/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/caa/caaa/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/cb/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/x/y/z/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/x/y/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/x/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/x/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/x/y/z/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/x/y/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/x/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/faaa/package.json 2000 undefined File location affecting resolution
DirectoryWatcher:: Added:: WatchInfo: /src/projects/project/src/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /src/projects/project/src/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /src/projects/project/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /src/projects/project/node_modules/@types 1 undefined Type roots
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1479: [0mThe current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("./fileB.mjs")' call instead.
  To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `"type": "module"` to '/src/projects/project/package.json'.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/main.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/src/projects/project/out/main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/main.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/fileB.mjs]
export function foo() { }


//// [/src/projects/project/out/fileB.d.mts]
export declare function foo(): void;


//// [/src/projects/project/out/fileA.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileB_mjs_1 = require("./fileB.mjs");
(0, fileB_mjs_1.foo)();


//// [/src/projects/project/out/fileA.d.ts]
export {};


//// [/src/projects/project/out/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/a/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/a/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/b/ba/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/b/ba/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/b/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/b/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/c/ca/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/c/cb/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/cb/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/d/da/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/e/ea/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"fileNames":["../../../../a/lib/lib.es2016.full.d.ts","../src/main.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts"],"fileIdsList":[[3]],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-5677608893-export declare function foo(): void;\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-3531856636-export {};\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1}],"root":[[2,22]],"options":{"composite":true,"module":100,"outDir":"./","target":3},"referencedMap":[[4,1]],"semanticDiagnosticsPerFile":[[4,[{"start":20,"length":13,"code":1479,"category":1,"messageText":{"messageText":"The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.","category":1,"code":1479,"next":[{"info":true}]}}]]],"latestChangedDtsFile":"./f/fa/faa/faaa/randomFile.d.ts","version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../a/lib/lib.es2016.full.d.ts",
    "../src/main.ts",
    "../src/fileb.mts",
    "../src/filea.ts",
    "../src/randomfile.ts",
    "../src/a/randomfile.ts",
    "../src/b/ba/randomfile.ts",
    "../src/b/randomfile.ts",
    "../src/c/ca/randomfile.ts",
    "../src/c/ca/caa/randomfile.ts",
    "../src/c/ca/caa/caaa/randomfile.ts",
    "../src/c/cb/randomfile.ts",
    "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
    "../src/d/da/daa/daaa/randomfile.ts",
    "../src/d/da/daa/randomfile.ts",
    "../src/d/da/randomfile.ts",
    "../src/e/ea/randomfile.ts",
    "../src/e/ea/eaa/randomfile.ts",
    "../src/e/ea/eaa/eaaa/randomfile.ts",
    "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
    "../src/f/fa/faa/x/y/z/randomfile.ts",
    "../src/f/fa/faa/faaa/randomfile.ts"
  ],
  "fileIdsList": [
    [
      "../src/fileb.mts"
    ]
  ],
  "fileInfos": {
    "../../../../a/lib/lib.es2016.full.d.ts": {
      "original": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "../src/main.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/fileb.mts": {
      "original": {
        "version": "3524703962-export function foo() {}",
        "signature": "-5677608893-export declare function foo(): void;\n",
        "impliedFormat": 99
      },
      "version": "3524703962-export function foo() {}",
      "signature": "-5677608893-export declare function foo(): void;\n",
      "impliedFormat": "esnext"
    },
    "../src/filea.ts": {
      "original": {
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": 1
      },
      "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
      "signature": "-3531856636-export {};\n",
      "impliedFormat": "commonjs"
    },
    "../src/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/a/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/b/ba/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/b/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/ca/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/ca/caa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/ca/caa/caaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/cb/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/daa/daaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/daa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/eaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/eaa/eaaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/f/fa/faa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/f/fa/faa/faaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    }
  },
  "root": [
    [
      [
        2,
        22
      ],
      [
        "../src/main.ts",
        "../src/fileb.mts",
        "../src/filea.ts",
        "../src/randomfile.ts",
        "../src/a/randomfile.ts",
        "../src/b/ba/randomfile.ts",
        "../src/b/randomfile.ts",
        "../src/c/ca/randomfile.ts",
        "../src/c/ca/caa/randomfile.ts",
        "../src/c/ca/caa/caaa/randomfile.ts",
        "../src/c/cb/randomfile.ts",
        "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
        "../src/d/da/daa/daaa/randomfile.ts",
        "../src/d/da/daa/randomfile.ts",
        "../src/d/da/randomfile.ts",
        "../src/e/ea/randomfile.ts",
        "../src/e/ea/eaa/randomfile.ts",
        "../src/e/ea/eaa/eaaa/randomfile.ts",
        "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
        "../src/f/fa/faa/x/y/z/randomfile.ts",
        "../src/f/fa/faa/faaa/randomfile.ts"
      ]
    ]
  ],
  "options": {
    "composite": true,
    "module": 100,
    "outDir": "./",
    "target": 3
  },
  "referencedMap": {
    "../src/filea.ts": [
      "../src/fileb.mts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "../src/filea.ts",
      [
        {
          "start": 20,
          "length": 13,
          "code": 1479,
          "category": 1,
          "messageText": {
            "messageText": "The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.",
            "category": 1,
            "code": 1479,
            "next": [
              {
                "info": true
              }
            ]
          }
        }
      ]
    ]
  ],
  "latestChangedDtsFile": "./f/fa/faa/faaa/randomFile.d.ts",
  "version": "FakeTSVersion",
  "size": 4341
}


PolledWatches::
/src/projects/project/node_modules/@types: *new*
  {"pollingInterval":500}
/src/projects/project/src/a/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/b/ba/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/b/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/caaa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/c/cb/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/c/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/da/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/faaa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/z/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/node_modules/@types: *new*
  {"pollingInterval":500}
/src/projects/project/src/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.es2016.full.d.ts: *new*
  {}
/src/projects/project/package.json: *new*
  {}
/src/projects/project/src/a/randomFile.ts: *new*
  {}
/src/projects/project/src/b/ba/randomFile.ts: *new*
  {}
/src/projects/project/src/b/randomFile.ts: *new*
  {}
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts: *new*
  {}
/src/projects/project/src/c/ca/caa/randomFile.ts: *new*
  {}
/src/projects/project/src/c/ca/randomFile.ts: *new*
  {}
/src/projects/project/src/c/cb/randomFile.ts: *new*
  {}
/src/projects/project/src/d/da/daa/daaa/randomFile.ts: *new*
  {}
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts: *new*
  {}
/src/projects/project/src/d/da/daa/randomFile.ts: *new*
  {}
/src/projects/project/src/d/da/randomFile.ts: *new*
  {}
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts: *new*
  {}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts: *new*
  {}
/src/projects/project/src/e/ea/eaa/randomFile.ts: *new*
  {}
/src/projects/project/src/e/ea/randomFile.ts: *new*
  {}
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts: *new*
  {}
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts: *new*
  {}
/src/projects/project/src/fileA.ts: *new*
  {}
/src/projects/project/src/fileB.mts: *new*
  {}
/src/projects/project/src/main.ts: *new*
  {}
/src/projects/project/src/randomFile.ts: *new*
  {}
/src/projects/project/src/tsconfig.json: *new*
  {}

Program root files: [
  "/src/projects/project/src/main.ts",
  "/src/projects/project/src/fileA.ts",
  "/src/projects/project/src/fileB.mts",
  "/src/projects/project/src/randomFile.ts",
  "/src/projects/project/src/a/randomFile.ts",
  "/src/projects/project/src/b/ba/randomFile.ts",
  "/src/projects/project/src/b/randomFile.ts",
  "/src/projects/project/src/c/ca/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/caaa/randomFile.ts",
  "/src/projects/project/src/c/cb/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/randomFile.ts",
  "/src/projects/project/src/d/da/daa/randomFile.ts",
  "/src/projects/project/src/d/da/randomFile.ts",
  "/src/projects/project/src/e/ea/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"
]
Program options: {
  "target": 3,
  "composite": true,
  "module": 100,
  "outDir": "/src/projects/project/out",
  "traceResolution": true,
  "watch": true,
  "project": "/src/projects/project/src/tsconfig.json",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/src/projects/project/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/main.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/main.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Shape signatures in builder refreshed for::
/a/lib/lib.es2016.full.d.ts (used version)
/src/projects/project/src/main.ts (computed .d.ts during emit)
/src/projects/project/src/fileb.mts (computed .d.ts during emit)
/src/projects/project/src/filea.ts (computed .d.ts during emit)
/src/projects/project/src/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/a/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/b/ba/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/b/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/c/ca/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/c/ca/caa/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/c/cb/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/d/da/daa/daaa/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/d/da/daa/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/d/da/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/e/ea/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/e/ea/eaa/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts (computed .d.ts during emit)
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts (computed .d.ts during emit)

exitCode:: ExitStatus.undefined

Change:: random edit

Input::
//// [/src/projects/project/src/randomFile.ts]
export const x = 10;export const y = 10;


Output::
FileWatcher:: Triggered with /src/projects/project/src/randomFile.ts 1:: WatchInfo: /src/projects/project/src/randomFile.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/src/randomFile.ts 1:: WatchInfo: /src/projects/project/src/randomFile.ts 250 undefined Source file


Timeout callback:: count: 1
1: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
1: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/src/projects/project/src/main.ts","/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
  options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","traceResolution":true,"watch":true,"project":"/src/projects/project/src/tsconfig.json","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1479: [0mThe current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("./fileB.mjs")' call instead.
  To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `"type": "module"` to '/src/projects/project/package.json'.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/main.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/src/projects/project/out/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = exports.x = void 0;
exports.x = 10;
exports.y = 10;


//// [/src/projects/project/out/randomFile.d.ts]
export declare const x = 10;
export declare const y = 10;


//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"fileNames":["../../../../a/lib/lib.es2016.full.d.ts","../src/main.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts"],"fileIdsList":[[3]],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-5677608893-export declare function foo(): void;\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-3531856636-export {};\n","impliedFormat":1},{"version":"-9547279430-export const x = 10;export const y = 10;","signature":"-18799098802-export declare const x = 10;\nexport declare const y = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1}],"root":[[2,22]],"options":{"composite":true,"module":100,"outDir":"./","target":3},"referencedMap":[[4,1]],"semanticDiagnosticsPerFile":[[4,[{"start":20,"length":13,"code":1479,"category":1,"messageText":{"messageText":"The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.","category":1,"code":1479,"next":[{"info":true}]}}]]],"latestChangedDtsFile":"./randomFile.d.ts","version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../a/lib/lib.es2016.full.d.ts",
    "../src/main.ts",
    "../src/fileb.mts",
    "../src/filea.ts",
    "../src/randomfile.ts",
    "../src/a/randomfile.ts",
    "../src/b/ba/randomfile.ts",
    "../src/b/randomfile.ts",
    "../src/c/ca/randomfile.ts",
    "../src/c/ca/caa/randomfile.ts",
    "../src/c/ca/caa/caaa/randomfile.ts",
    "../src/c/cb/randomfile.ts",
    "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
    "../src/d/da/daa/daaa/randomfile.ts",
    "../src/d/da/daa/randomfile.ts",
    "../src/d/da/randomfile.ts",
    "../src/e/ea/randomfile.ts",
    "../src/e/ea/eaa/randomfile.ts",
    "../src/e/ea/eaa/eaaa/randomfile.ts",
    "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
    "../src/f/fa/faa/x/y/z/randomfile.ts",
    "../src/f/fa/faa/faaa/randomfile.ts"
  ],
  "fileIdsList": [
    [
      "../src/fileb.mts"
    ]
  ],
  "fileInfos": {
    "../../../../a/lib/lib.es2016.full.d.ts": {
      "original": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "../src/main.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/fileb.mts": {
      "original": {
        "version": "3524703962-export function foo() {}",
        "signature": "-5677608893-export declare function foo(): void;\n",
        "impliedFormat": 99
      },
      "version": "3524703962-export function foo() {}",
      "signature": "-5677608893-export declare function foo(): void;\n",
      "impliedFormat": "esnext"
    },
    "../src/filea.ts": {
      "original": {
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": 1
      },
      "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
      "signature": "-3531856636-export {};\n",
      "impliedFormat": "commonjs"
    },
    "../src/randomfile.ts": {
      "original": {
        "version": "-9547279430-export const x = 10;export const y = 10;",
        "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
        "impliedFormat": 1
      },
      "version": "-9547279430-export const x = 10;export const y = 10;",
      "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/a/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/b/ba/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/b/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/ca/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/ca/caa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/ca/caa/caaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/cb/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/daa/daaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/daa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/eaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/eaa/eaaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/f/fa/faa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/f/fa/faa/faaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    }
  },
  "root": [
    [
      [
        2,
        22
      ],
      [
        "../src/main.ts",
        "../src/fileb.mts",
        "../src/filea.ts",
        "../src/randomfile.ts",
        "../src/a/randomfile.ts",
        "../src/b/ba/randomfile.ts",
        "../src/b/randomfile.ts",
        "../src/c/ca/randomfile.ts",
        "../src/c/ca/caa/randomfile.ts",
        "../src/c/ca/caa/caaa/randomfile.ts",
        "../src/c/cb/randomfile.ts",
        "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
        "../src/d/da/daa/daaa/randomfile.ts",
        "../src/d/da/daa/randomfile.ts",
        "../src/d/da/randomfile.ts",
        "../src/e/ea/randomfile.ts",
        "../src/e/ea/eaa/randomfile.ts",
        "../src/e/ea/eaa/eaaa/randomfile.ts",
        "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
        "../src/f/fa/faa/x/y/z/randomfile.ts",
        "../src/f/fa/faa/faaa/randomfile.ts"
      ]
    ]
  ],
  "options": {
    "composite": true,
    "module": 100,
    "outDir": "./",
    "target": 3
  },
  "referencedMap": {
    "../src/filea.ts": [
      "../src/fileb.mts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "../src/filea.ts",
      [
        {
          "start": 20,
          "length": 13,
          "code": 1479,
          "category": 1,
          "messageText": {
            "messageText": "The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.",
            "category": 1,
            "code": 1479,
            "next": [
              {
                "info": true
              }
            ]
          }
        }
      ]
    ]
  ],
  "latestChangedDtsFile": "./randomFile.d.ts",
  "version": "FakeTSVersion",
  "size": 4377
}


Before running Timeout callback:: count: 0

After running Timeout callback:: count: 0


Program root files: [
  "/src/projects/project/src/main.ts",
  "/src/projects/project/src/fileA.ts",
  "/src/projects/project/src/fileB.mts",
  "/src/projects/project/src/randomFile.ts",
  "/src/projects/project/src/a/randomFile.ts",
  "/src/projects/project/src/b/ba/randomFile.ts",
  "/src/projects/project/src/b/randomFile.ts",
  "/src/projects/project/src/c/ca/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/caaa/randomFile.ts",
  "/src/projects/project/src/c/cb/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/randomFile.ts",
  "/src/projects/project/src/d/da/daa/randomFile.ts",
  "/src/projects/project/src/d/da/randomFile.ts",
  "/src/projects/project/src/e/ea/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"
]
Program options: {
  "target": 3,
  "composite": true,
  "module": 100,
  "outDir": "/src/projects/project/out",
  "traceResolution": true,
  "watch": true,
  "project": "/src/projects/project/src/tsconfig.json",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/src/projects/project/src/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/main.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::
/src/projects/project/src/randomFile.ts

Shape signatures in builder refreshed for::
/src/projects/project/src/randomfile.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: Modify package json file to add type module

Input::
//// [/src/projects/project/package.json]
{
  "name": "app",
  "version": "1.0.0",
  "type": "module"
}


Output::
FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 2000 undefined File location affecting resolution
Scheduling invalidateFailedLookup
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 2000 undefined File location affecting resolution


Timeout callback:: count: 1
2: timerToInvalidateFailedLookupResolutions *new*

Before running Timeout callback:: count: 1
2: timerToInvalidateFailedLookupResolutions

Host is moving to new time
After running Timeout callback:: count: 1
Output::
Scheduling update



Timeout callback:: count: 1
3: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
3: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/src/projects/project/src/main.ts","/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
  options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","traceResolution":true,"watch":true,"project":"/src/projects/project/src/tsconfig.json","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Found 'package.json' at '/src/projects/project/package.json'.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in ESM mode with conditions 'import', 'types', 'node'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exists - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/main.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/src/projects/project/out/main.js]
export const x = 10;


//// [/src/projects/project/out/fileA.js]
import { foo } from "./fileB.mjs";
foo();


//// [/src/projects/project/out/randomFile.js]
export const x = 10;
export const y = 10;


//// [/src/projects/project/out/a/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/b/ba/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/b/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/cb/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"fileNames":["../../../../a/lib/lib.es2016.full.d.ts","../src/main.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts"],"fileIdsList":[[3]],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"3524703962-export function foo() {}","signature":"-5677608893-export declare function foo(): void;\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-3531856636-export {};\n","impliedFormat":99},{"version":"-9547279430-export const x = 10;export const y = 10;","signature":"-18799098802-export declare const x = 10;\nexport declare const y = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99}],"root":[[2,22]],"options":{"composite":true,"module":100,"outDir":"./","target":3},"referencedMap":[[4,1]],"latestChangedDtsFile":"./randomFile.d.ts","version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../a/lib/lib.es2016.full.d.ts",
    "../src/main.ts",
    "../src/fileb.mts",
    "../src/filea.ts",
    "../src/randomfile.ts",
    "../src/a/randomfile.ts",
    "../src/b/ba/randomfile.ts",
    "../src/b/randomfile.ts",
    "../src/c/ca/randomfile.ts",
    "../src/c/ca/caa/randomfile.ts",
    "../src/c/ca/caa/caaa/randomfile.ts",
    "../src/c/cb/randomfile.ts",
    "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
    "../src/d/da/daa/daaa/randomfile.ts",
    "../src/d/da/daa/randomfile.ts",
    "../src/d/da/randomfile.ts",
    "../src/e/ea/randomfile.ts",
    "../src/e/ea/eaa/randomfile.ts",
    "../src/e/ea/eaa/eaaa/randomfile.ts",
    "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
    "../src/f/fa/faa/x/y/z/randomfile.ts",
    "../src/f/fa/faa/faaa/randomfile.ts"
  ],
  "fileIdsList": [
    [
      "../src/fileb.mts"
    ]
  ],
  "fileInfos": {
    "../../../../a/lib/lib.es2016.full.d.ts": {
      "original": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "../src/main.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/fileb.mts": {
      "original": {
        "version": "3524703962-export function foo() {}",
        "signature": "-5677608893-export declare function foo(): void;\n",
        "impliedFormat": 99
      },
      "version": "3524703962-export function foo() {}",
      "signature": "-5677608893-export declare function foo(): void;\n",
      "impliedFormat": "esnext"
    },
    "../src/filea.ts": {
      "original": {
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": 99
      },
      "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
      "signature": "-3531856636-export {};\n",
      "impliedFormat": "esnext"
    },
    "../src/randomfile.ts": {
      "original": {
        "version": "-9547279430-export const x = 10;export const y = 10;",
        "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
        "impliedFormat": 99
      },
      "version": "-9547279430-export const x = 10;export const y = 10;",
      "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/a/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/b/ba/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/b/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/c/ca/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/c/ca/caa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/c/ca/caa/caaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/c/cb/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/d/da/daa/daaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/d/da/daa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/d/da/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/e/ea/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/e/ea/eaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/e/ea/eaa/eaaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/f/fa/faa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/f/fa/faa/faaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    }
  },
  "root": [
    [
      [
        2,
        22
      ],
      [
        "../src/main.ts",
        "../src/fileb.mts",
        "../src/filea.ts",
        "../src/randomfile.ts",
        "../src/a/randomfile.ts",
        "../src/b/ba/randomfile.ts",
        "../src/b/randomfile.ts",
        "../src/c/ca/randomfile.ts",
        "../src/c/ca/caa/randomfile.ts",
        "../src/c/ca/caa/caaa/randomfile.ts",
        "../src/c/cb/randomfile.ts",
        "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
        "../src/d/da/daa/daaa/randomfile.ts",
        "../src/d/da/daa/randomfile.ts",
        "../src/d/da/randomfile.ts",
        "../src/e/ea/randomfile.ts",
        "../src/e/ea/eaa/randomfile.ts",
        "../src/e/ea/eaa/eaaa/randomfile.ts",
        "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
        "../src/f/fa/faa/x/y/z/randomfile.ts",
        "../src/f/fa/faa/faaa/randomfile.ts"
      ]
    ]
  ],
  "options": {
    "composite": true,
    "module": 100,
    "outDir": "./",
    "target": 3
  },
  "referencedMap": {
    "../src/filea.ts": [
      "../src/fileb.mts"
    ]
  },
  "latestChangedDtsFile": "./randomFile.d.ts",
  "version": "FakeTSVersion",
  "size": 3989
}



Program root files: [
  "/src/projects/project/src/main.ts",
  "/src/projects/project/src/fileA.ts",
  "/src/projects/project/src/fileB.mts",
  "/src/projects/project/src/randomFile.ts",
  "/src/projects/project/src/a/randomFile.ts",
  "/src/projects/project/src/b/ba/randomFile.ts",
  "/src/projects/project/src/b/randomFile.ts",
  "/src/projects/project/src/c/ca/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/caaa/randomFile.ts",
  "/src/projects/project/src/c/cb/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/randomFile.ts",
  "/src/projects/project/src/d/da/daa/randomFile.ts",
  "/src/projects/project/src/d/da/randomFile.ts",
  "/src/projects/project/src/e/ea/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"
]
Program options: {
  "target": 3,
  "composite": true,
  "module": 100,
  "outDir": "/src/projects/project/out",
  "traceResolution": true,
  "watch": true,
  "project": "/src/projects/project/src/tsconfig.json",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/src/projects/project/src/tsconfig.json"
}
Program structureReused: SafeModules
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/main.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::
/src/projects/project/src/main.ts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Shape signatures in builder refreshed for::
/src/projects/project/src/main.ts (computed .d.ts)
/src/projects/project/src/filea.ts (computed .d.ts)
/src/projects/project/src/randomfile.ts (computed .d.ts)
/src/projects/project/src/a/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/ba/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/cb/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: Modify package.json file to remove type module

Input::
//// [/src/projects/project/package.json]
{
  "name": "app",
  "version": "1.0.0"
}


Output::
FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 2000 undefined File location affecting resolution
Scheduling invalidateFailedLookup
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 2000 undefined File location affecting resolution


Timeout callback:: count: 1
4: timerToInvalidateFailedLookupResolutions *new*

Before running Timeout callback:: count: 1
4: timerToInvalidateFailedLookupResolutions

Host is moving to new time
After running Timeout callback:: count: 1
Output::
Scheduling update



Timeout callback:: count: 1
5: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
5: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/src/projects/project/src/main.ts","/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
  options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","traceResolution":true,"watch":true,"project":"/src/projects/project/src/tsconfig.json","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Found 'package.json' at '/src/projects/project/package.json'.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in CJS mode with conditions 'require', 'types', 'node'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exists - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1479: [0mThe current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("./fileB.mjs")' call instead.
  To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `"type": "module"` to '/src/projects/project/package.json'.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/main.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/src/projects/project/out/main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/fileA.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileB_mjs_1 = require("./fileB.mjs");
(0, fileB_mjs_1.foo)();


//// [/src/projects/project/out/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = exports.x = void 0;
exports.x = 10;
exports.y = 10;


//// [/src/projects/project/out/a/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/b/ba/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/b/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/cb/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"fileNames":["../../../../a/lib/lib.es2016.full.d.ts","../src/main.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts"],"fileIdsList":[[3]],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-5677608893-export declare function foo(): void;\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-3531856636-export {};\n","impliedFormat":1},{"version":"-9547279430-export const x = 10;export const y = 10;","signature":"-18799098802-export declare const x = 10;\nexport declare const y = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1}],"root":[[2,22]],"options":{"composite":true,"module":100,"outDir":"./","target":3},"referencedMap":[[4,1]],"semanticDiagnosticsPerFile":[[4,[{"start":20,"length":13,"code":1479,"category":1,"messageText":{"messageText":"The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.","category":1,"code":1479,"next":[{"info":true}]}}]]],"latestChangedDtsFile":"./randomFile.d.ts","version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../a/lib/lib.es2016.full.d.ts",
    "../src/main.ts",
    "../src/fileb.mts",
    "../src/filea.ts",
    "../src/randomfile.ts",
    "../src/a/randomfile.ts",
    "../src/b/ba/randomfile.ts",
    "../src/b/randomfile.ts",
    "../src/c/ca/randomfile.ts",
    "../src/c/ca/caa/randomfile.ts",
    "../src/c/ca/caa/caaa/randomfile.ts",
    "../src/c/cb/randomfile.ts",
    "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
    "../src/d/da/daa/daaa/randomfile.ts",
    "../src/d/da/daa/randomfile.ts",
    "../src/d/da/randomfile.ts",
    "../src/e/ea/randomfile.ts",
    "../src/e/ea/eaa/randomfile.ts",
    "../src/e/ea/eaa/eaaa/randomfile.ts",
    "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
    "../src/f/fa/faa/x/y/z/randomfile.ts",
    "../src/f/fa/faa/faaa/randomfile.ts"
  ],
  "fileIdsList": [
    [
      "../src/fileb.mts"
    ]
  ],
  "fileInfos": {
    "../../../../a/lib/lib.es2016.full.d.ts": {
      "original": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "../src/main.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/fileb.mts": {
      "original": {
        "version": "3524703962-export function foo() {}",
        "signature": "-5677608893-export declare function foo(): void;\n",
        "impliedFormat": 99
      },
      "version": "3524703962-export function foo() {}",
      "signature": "-5677608893-export declare function foo(): void;\n",
      "impliedFormat": "esnext"
    },
    "../src/filea.ts": {
      "original": {
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": 1
      },
      "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
      "signature": "-3531856636-export {};\n",
      "impliedFormat": "commonjs"
    },
    "../src/randomfile.ts": {
      "original": {
        "version": "-9547279430-export const x = 10;export const y = 10;",
        "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
        "impliedFormat": 1
      },
      "version": "-9547279430-export const x = 10;export const y = 10;",
      "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/a/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/b/ba/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/b/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/ca/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/ca/caa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/ca/caa/caaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/cb/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/daa/daaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/daa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/eaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/eaa/eaaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/f/fa/faa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/f/fa/faa/faaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    }
  },
  "root": [
    [
      [
        2,
        22
      ],
      [
        "../src/main.ts",
        "../src/fileb.mts",
        "../src/filea.ts",
        "../src/randomfile.ts",
        "../src/a/randomfile.ts",
        "../src/b/ba/randomfile.ts",
        "../src/b/randomfile.ts",
        "../src/c/ca/randomfile.ts",
        "../src/c/ca/caa/randomfile.ts",
        "../src/c/ca/caa/caaa/randomfile.ts",
        "../src/c/cb/randomfile.ts",
        "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
        "../src/d/da/daa/daaa/randomfile.ts",
        "../src/d/da/daa/randomfile.ts",
        "../src/d/da/randomfile.ts",
        "../src/e/ea/randomfile.ts",
        "../src/e/ea/eaa/randomfile.ts",
        "../src/e/ea/eaa/eaaa/randomfile.ts",
        "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
        "../src/f/fa/faa/x/y/z/randomfile.ts",
        "../src/f/fa/faa/faaa/randomfile.ts"
      ]
    ]
  ],
  "options": {
    "composite": true,
    "module": 100,
    "outDir": "./",
    "target": 3
  },
  "referencedMap": {
    "../src/filea.ts": [
      "../src/fileb.mts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "../src/filea.ts",
      [
        {
          "start": 20,
          "length": 13,
          "code": 1479,
          "category": 1,
          "messageText": {
            "messageText": "The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.",
            "category": 1,
            "code": 1479,
            "next": [
              {
                "info": true
              }
            ]
          }
        }
      ]
    ]
  ],
  "latestChangedDtsFile": "./randomFile.d.ts",
  "version": "FakeTSVersion",
  "size": 4377
}



Program root files: [
  "/src/projects/project/src/main.ts",
  "/src/projects/project/src/fileA.ts",
  "/src/projects/project/src/fileB.mts",
  "/src/projects/project/src/randomFile.ts",
  "/src/projects/project/src/a/randomFile.ts",
  "/src/projects/project/src/b/ba/randomFile.ts",
  "/src/projects/project/src/b/randomFile.ts",
  "/src/projects/project/src/c/ca/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/caaa/randomFile.ts",
  "/src/projects/project/src/c/cb/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/randomFile.ts",
  "/src/projects/project/src/d/da/daa/randomFile.ts",
  "/src/projects/project/src/d/da/randomFile.ts",
  "/src/projects/project/src/e/ea/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"
]
Program options: {
  "target": 3,
  "composite": true,
  "module": 100,
  "outDir": "/src/projects/project/out",
  "traceResolution": true,
  "watch": true,
  "project": "/src/projects/project/src/tsconfig.json",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/src/projects/project/src/tsconfig.json"
}
Program structureReused: SafeModules
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/main.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::
/src/projects/project/src/main.ts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Shape signatures in builder refreshed for::
/src/projects/project/src/main.ts (computed .d.ts)
/src/projects/project/src/filea.ts (computed .d.ts)
/src/projects/project/src/randomfile.ts (computed .d.ts)
/src/projects/project/src/a/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/ba/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/cb/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: Delete package.json

Input::
//// [/src/projects/project/package.json] deleted

Output::
FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 2000 undefined File location affecting resolution
Scheduling invalidateFailedLookup
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 2000 undefined File location affecting resolution


Timeout callback:: count: 1
6: timerToInvalidateFailedLookupResolutions *new*

Before running Timeout callback:: count: 1
6: timerToInvalidateFailedLookupResolutions

Host is moving to new time
After running Timeout callback:: count: 1
Output::
Scheduling update



Timeout callback:: count: 1
7: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
7: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/src/projects/project/src/main.ts","/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
  options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","traceResolution":true,"watch":true,"project":"/src/projects/project/src/tsconfig.json","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist.
File '/src/projects/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module './fileB.mjs' from '/src/projects/project/src/fileA.ts' of old program, it was successfully resolved to '/src/projects/project/src/fileB.mts'.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1479: [0mThe current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("./fileB.mjs")' call instead.
  To convert this file to an ECMAScript module, change its file extension to '.mts' or create a local package.json file with `{ "type": "module" }`.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/main.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.





Program root files: [
  "/src/projects/project/src/main.ts",
  "/src/projects/project/src/fileA.ts",
  "/src/projects/project/src/fileB.mts",
  "/src/projects/project/src/randomFile.ts",
  "/src/projects/project/src/a/randomFile.ts",
  "/src/projects/project/src/b/ba/randomFile.ts",
  "/src/projects/project/src/b/randomFile.ts",
  "/src/projects/project/src/c/ca/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/caaa/randomFile.ts",
  "/src/projects/project/src/c/cb/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/randomFile.ts",
  "/src/projects/project/src/d/da/daa/randomFile.ts",
  "/src/projects/project/src/d/da/randomFile.ts",
  "/src/projects/project/src/e/ea/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"
]
Program options: {
  "target": 3,
  "composite": true,
  "module": 100,
  "outDir": "/src/projects/project/out",
  "traceResolution": true,
  "watch": true,
  "project": "/src/projects/project/src/tsconfig.json",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/src/projects/project/src/tsconfig.json"
}
Program structureReused: SafeModules
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/main.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: Add package json file with type module

Input::
//// [/src/projects/project/package.json]
{
  "name": "app",
  "version": "1.0.0",
  "type": "module"
}


Output::
FileWatcher:: Triggered with /src/projects/project/package.json 0:: WatchInfo: /src/projects/project/package.json 2000 undefined File location affecting resolution
Scheduling invalidateFailedLookup
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 0:: WatchInfo: /src/projects/project/package.json 2000 undefined File location affecting resolution


Timeout callback:: count: 1
8: timerToInvalidateFailedLookupResolutions *new*

Before running Timeout callback:: count: 1
8: timerToInvalidateFailedLookupResolutions

Host is moving to new time
After running Timeout callback:: count: 1
Output::
Scheduling update



Timeout callback:: count: 1
9: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
9: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/src/projects/project/src/main.ts","/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
  options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","traceResolution":true,"watch":true,"project":"/src/projects/project/src/tsconfig.json","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Found 'package.json' at '/src/projects/project/package.json'.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in ESM mode with conditions 'import', 'types', 'node'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exists - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/main.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/src/projects/project/out/main.js]
export const x = 10;


//// [/src/projects/project/out/fileA.js]
import { foo } from "./fileB.mjs";
foo();


//// [/src/projects/project/out/randomFile.js]
export const x = 10;
export const y = 10;


//// [/src/projects/project/out/a/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/b/ba/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/b/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/cb/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"fileNames":["../../../../a/lib/lib.es2016.full.d.ts","../src/main.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts"],"fileIdsList":[[3]],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"3524703962-export function foo() {}","signature":"-5677608893-export declare function foo(): void;\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-3531856636-export {};\n","impliedFormat":99},{"version":"-9547279430-export const x = 10;export const y = 10;","signature":"-18799098802-export declare const x = 10;\nexport declare const y = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99}],"root":[[2,22]],"options":{"composite":true,"module":100,"outDir":"./","target":3},"referencedMap":[[4,1]],"latestChangedDtsFile":"./randomFile.d.ts","version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../a/lib/lib.es2016.full.d.ts",
    "../src/main.ts",
    "../src/fileb.mts",
    "../src/filea.ts",
    "../src/randomfile.ts",
    "../src/a/randomfile.ts",
    "../src/b/ba/randomfile.ts",
    "../src/b/randomfile.ts",
    "../src/c/ca/randomfile.ts",
    "../src/c/ca/caa/randomfile.ts",
    "../src/c/ca/caa/caaa/randomfile.ts",
    "../src/c/cb/randomfile.ts",
    "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
    "../src/d/da/daa/daaa/randomfile.ts",
    "../src/d/da/daa/randomfile.ts",
    "../src/d/da/randomfile.ts",
    "../src/e/ea/randomfile.ts",
    "../src/e/ea/eaa/randomfile.ts",
    "../src/e/ea/eaa/eaaa/randomfile.ts",
    "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
    "../src/f/fa/faa/x/y/z/randomfile.ts",
    "../src/f/fa/faa/faaa/randomfile.ts"
  ],
  "fileIdsList": [
    [
      "../src/fileb.mts"
    ]
  ],
  "fileInfos": {
    "../../../../a/lib/lib.es2016.full.d.ts": {
      "original": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "../src/main.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/fileb.mts": {
      "original": {
        "version": "3524703962-export function foo() {}",
        "signature": "-5677608893-export declare function foo(): void;\n",
        "impliedFormat": 99
      },
      "version": "3524703962-export function foo() {}",
      "signature": "-5677608893-export declare function foo(): void;\n",
      "impliedFormat": "esnext"
    },
    "../src/filea.ts": {
      "original": {
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": 99
      },
      "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
      "signature": "-3531856636-export {};\n",
      "impliedFormat": "esnext"
    },
    "../src/randomfile.ts": {
      "original": {
        "version": "-9547279430-export const x = 10;export const y = 10;",
        "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
        "impliedFormat": 99
      },
      "version": "-9547279430-export const x = 10;export const y = 10;",
      "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/a/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/b/ba/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/b/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/c/ca/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/c/ca/caa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/c/ca/caa/caaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/c/cb/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/d/da/daa/daaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/d/da/daa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/d/da/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/e/ea/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/e/ea/eaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/e/ea/eaa/eaaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/f/fa/faa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    },
    "../src/f/fa/faa/faaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 99
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "esnext"
    }
  },
  "root": [
    [
      [
        2,
        22
      ],
      [
        "../src/main.ts",
        "../src/fileb.mts",
        "../src/filea.ts",
        "../src/randomfile.ts",
        "../src/a/randomfile.ts",
        "../src/b/ba/randomfile.ts",
        "../src/b/randomfile.ts",
        "../src/c/ca/randomfile.ts",
        "../src/c/ca/caa/randomfile.ts",
        "../src/c/ca/caa/caaa/randomfile.ts",
        "../src/c/cb/randomfile.ts",
        "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
        "../src/d/da/daa/daaa/randomfile.ts",
        "../src/d/da/daa/randomfile.ts",
        "../src/d/da/randomfile.ts",
        "../src/e/ea/randomfile.ts",
        "../src/e/ea/eaa/randomfile.ts",
        "../src/e/ea/eaa/eaaa/randomfile.ts",
        "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
        "../src/f/fa/faa/x/y/z/randomfile.ts",
        "../src/f/fa/faa/faaa/randomfile.ts"
      ]
    ]
  ],
  "options": {
    "composite": true,
    "module": 100,
    "outDir": "./",
    "target": 3
  },
  "referencedMap": {
    "../src/filea.ts": [
      "../src/fileb.mts"
    ]
  },
  "latestChangedDtsFile": "./randomFile.d.ts",
  "version": "FakeTSVersion",
  "size": 3989
}



Program root files: [
  "/src/projects/project/src/main.ts",
  "/src/projects/project/src/fileA.ts",
  "/src/projects/project/src/fileB.mts",
  "/src/projects/project/src/randomFile.ts",
  "/src/projects/project/src/a/randomFile.ts",
  "/src/projects/project/src/b/ba/randomFile.ts",
  "/src/projects/project/src/b/randomFile.ts",
  "/src/projects/project/src/c/ca/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/caaa/randomFile.ts",
  "/src/projects/project/src/c/cb/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/randomFile.ts",
  "/src/projects/project/src/d/da/daa/randomFile.ts",
  "/src/projects/project/src/d/da/randomFile.ts",
  "/src/projects/project/src/e/ea/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"
]
Program options: {
  "target": 3,
  "composite": true,
  "module": 100,
  "outDir": "/src/projects/project/out",
  "traceResolution": true,
  "watch": true,
  "project": "/src/projects/project/src/tsconfig.json",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/src/projects/project/src/tsconfig.json"
}
Program structureReused: SafeModules
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/main.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::
/src/projects/project/src/main.ts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Shape signatures in builder refreshed for::
/src/projects/project/src/main.ts (computed .d.ts)
/src/projects/project/src/filea.ts (computed .d.ts)
/src/projects/project/src/randomfile.ts (computed .d.ts)
/src/projects/project/src/a/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/ba/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/cb/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: Delete package.json

Input::
//// [/src/projects/project/package.json] deleted

Output::
FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 2000 undefined File location affecting resolution
Scheduling invalidateFailedLookup
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 2000 undefined File location affecting resolution


Timeout callback:: count: 1
10: timerToInvalidateFailedLookupResolutions *new*

Before running Timeout callback:: count: 1
10: timerToInvalidateFailedLookupResolutions

Host is moving to new time
After running Timeout callback:: count: 1
Output::
Scheduling update



Timeout callback:: count: 1
11: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
11: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/src/projects/project/src/main.ts","/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
  options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","traceResolution":true,"watch":true,"project":"/src/projects/project/src/tsconfig.json","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in CJS mode with conditions 'require', 'types', 'node'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exists - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1479: [0mThe current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("./fileB.mjs")' call instead.
  To convert this file to an ECMAScript module, change its file extension to '.mts' or create a local package.json file with `{ "type": "module" }`.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/main.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/src/projects/project/out/main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/fileA.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileB_mjs_1 = require("./fileB.mjs");
(0, fileB_mjs_1.foo)();


//// [/src/projects/project/out/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = exports.x = void 0;
exports.x = 10;
exports.y = 10;


//// [/src/projects/project/out/a/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/b/ba/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/b/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/cb/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"fileNames":["../../../../a/lib/lib.es2016.full.d.ts","../src/main.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts"],"fileIdsList":[[3]],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-5677608893-export declare function foo(): void;\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-3531856636-export {};\n","impliedFormat":1},{"version":"-9547279430-export const x = 10;export const y = 10;","signature":"-18799098802-export declare const x = 10;\nexport declare const y = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1}],"root":[[2,22]],"options":{"composite":true,"module":100,"outDir":"./","target":3},"referencedMap":[[4,1]],"semanticDiagnosticsPerFile":[[4,[{"start":20,"length":13,"code":1479,"category":1,"messageText":{"messageText":"The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.","category":1,"code":1479,"next":[{"info":true}]}}]]],"latestChangedDtsFile":"./randomFile.d.ts","version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../a/lib/lib.es2016.full.d.ts",
    "../src/main.ts",
    "../src/fileb.mts",
    "../src/filea.ts",
    "../src/randomfile.ts",
    "../src/a/randomfile.ts",
    "../src/b/ba/randomfile.ts",
    "../src/b/randomfile.ts",
    "../src/c/ca/randomfile.ts",
    "../src/c/ca/caa/randomfile.ts",
    "../src/c/ca/caa/caaa/randomfile.ts",
    "../src/c/cb/randomfile.ts",
    "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
    "../src/d/da/daa/daaa/randomfile.ts",
    "../src/d/da/daa/randomfile.ts",
    "../src/d/da/randomfile.ts",
    "../src/e/ea/randomfile.ts",
    "../src/e/ea/eaa/randomfile.ts",
    "../src/e/ea/eaa/eaaa/randomfile.ts",
    "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
    "../src/f/fa/faa/x/y/z/randomfile.ts",
    "../src/f/fa/faa/faaa/randomfile.ts"
  ],
  "fileIdsList": [
    [
      "../src/fileb.mts"
    ]
  ],
  "fileInfos": {
    "../../../../a/lib/lib.es2016.full.d.ts": {
      "original": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "../src/main.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/fileb.mts": {
      "original": {
        "version": "3524703962-export function foo() {}",
        "signature": "-5677608893-export declare function foo(): void;\n",
        "impliedFormat": 99
      },
      "version": "3524703962-export function foo() {}",
      "signature": "-5677608893-export declare function foo(): void;\n",
      "impliedFormat": "esnext"
    },
    "../src/filea.ts": {
      "original": {
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": 1
      },
      "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
      "signature": "-3531856636-export {};\n",
      "impliedFormat": "commonjs"
    },
    "../src/randomfile.ts": {
      "original": {
        "version": "-9547279430-export const x = 10;export const y = 10;",
        "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
        "impliedFormat": 1
      },
      "version": "-9547279430-export const x = 10;export const y = 10;",
      "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/a/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/b/ba/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/b/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/ca/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/ca/caa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/ca/caa/caaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/c/cb/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/daa/daaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/daa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/d/da/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/eaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/eaa/eaaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/f/fa/faa/x/y/z/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    },
    "../src/f/fa/faa/faaa/randomfile.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": 1
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n",
      "impliedFormat": "commonjs"
    }
  },
  "root": [
    [
      [
        2,
        22
      ],
      [
        "../src/main.ts",
        "../src/fileb.mts",
        "../src/filea.ts",
        "../src/randomfile.ts",
        "../src/a/randomfile.ts",
        "../src/b/ba/randomfile.ts",
        "../src/b/randomfile.ts",
        "../src/c/ca/randomfile.ts",
        "../src/c/ca/caa/randomfile.ts",
        "../src/c/ca/caa/caaa/randomfile.ts",
        "../src/c/cb/randomfile.ts",
        "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
        "../src/d/da/daa/daaa/randomfile.ts",
        "../src/d/da/daa/randomfile.ts",
        "../src/d/da/randomfile.ts",
        "../src/e/ea/randomfile.ts",
        "../src/e/ea/eaa/randomfile.ts",
        "../src/e/ea/eaa/eaaa/randomfile.ts",
        "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
        "../src/f/fa/faa/x/y/z/randomfile.ts",
        "../src/f/fa/faa/faaa/randomfile.ts"
      ]
    ]
  ],
  "options": {
    "composite": true,
    "module": 100,
    "outDir": "./",
    "target": 3
  },
  "referencedMap": {
    "../src/filea.ts": [
      "../src/fileb.mts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "../src/filea.ts",
      [
        {
          "start": 20,
          "length": 13,
          "code": 1479,
          "category": 1,
          "messageText": {
            "messageText": "The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.",
            "category": 1,
            "code": 1479,
            "next": [
              {
                "info": true
              }
            ]
          }
        }
      ]
    ]
  ],
  "latestChangedDtsFile": "./randomFile.d.ts",
  "version": "FakeTSVersion",
  "size": 4377
}



Program root files: [
  "/src/projects/project/src/main.ts",
  "/src/projects/project/src/fileA.ts",
  "/src/projects/project/src/fileB.mts",
  "/src/projects/project/src/randomFile.ts",
  "/src/projects/project/src/a/randomFile.ts",
  "/src/projects/project/src/b/ba/randomFile.ts",
  "/src/projects/project/src/b/randomFile.ts",
  "/src/projects/project/src/c/ca/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/caaa/randomFile.ts",
  "/src/projects/project/src/c/cb/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/randomFile.ts",
  "/src/projects/project/src/d/da/daa/randomFile.ts",
  "/src/projects/project/src/d/da/randomFile.ts",
  "/src/projects/project/src/e/ea/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"
]
Program options: {
  "target": 3,
  "composite": true,
  "module": 100,
  "outDir": "/src/projects/project/out",
  "traceResolution": true,
  "watch": true,
  "project": "/src/projects/project/src/tsconfig.json",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/src/projects/project/src/tsconfig.json"
}
Program structureReused: SafeModules
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/main.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::
/src/projects/project/src/main.ts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Shape signatures in builder refreshed for::
/src/projects/project/src/main.ts (computed .d.ts)
/src/projects/project/src/filea.ts (computed .d.ts)
/src/projects/project/src/randomfile.ts (computed .d.ts)
/src/projects/project/src/a/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/ba/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/cb/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

3:: Delete package.json
*** Needs explanation
Incremental build contains ../src/filea.ts file has semantic errors, it does not match with clean build: /src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt::
Incremental buildInfoText:: {
  "fileNames": [
    "../../../../lib/lib.es2016.full.d.ts",
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
    "../../../../lib/lib.es2016.full.d.ts": {
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
                "messageText": "To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `\"type\": \"module\"` to '/src/projects/project/package.json'.",
                "category": 3,
                "code": 1481
              }
            ]
          }
        }
      ]
    ]
  ],
  "latestChangedDtsFile": "./randomFile.d.ts",
  "version": "FakeTSVersion",
  "size": 4568
}
Clean buildInfoText:: {
  "fileNames": [
    "../../../../lib/lib.es2016.full.d.ts",
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
    "../../../../lib/lib.es2016.full.d.ts": {
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
                "messageText": "To convert this file to an ECMAScript module, change its file extension to '.mts' or create a local package.json file with `{ \"type\": \"module\" }`.",
                "category": 3,
                "code": 1480
              }
            ]
          }
        }
      ]
    ]
  ],
  "latestChangedDtsFile": "./f/fa/faa/faaa/randomFile.d.ts",
  "version": "FakeTSVersion",
  "size": 4569
}
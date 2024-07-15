currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/home/src/project/tsconfig.a.json]
{
  "compilerOptions": {
    "composite": true,
    "traceResolution": true
  },
  "files": [
    "aMain.ts",
    "aFileWithImports.ts",
    "aRandomFileForImport.ts",
    "aRandomFileForImport2.ts"
  ]
}

//// [/home/src/project/aMain.ts]
export const x = 10;

//// [/home/src/project/aFileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
export { x } from "./aRandomFileForImport";
export { x as x2 } from "./aRandomFileForImport2";
export const y = 10;


//// [/home/src/project/aRandomFileForImport.ts]
export const x = 10;

//// [/home/src/project/aRandomFileForImport2.ts]
export const x = 10;

//// [/home/src/project/node_modules/pkg0/index.d.ts]
export interface ImportInterface0 {}

//// [/home/src/project/tsconfig.b.json]
{
  "compilerOptions": {
    "composite": true,
    "traceResolution": true
  },
  "files": [
    "bMain.ts",
    "bFileWithImports.ts",
    "bRandomFileForImport.ts",
    "bRandomFileForImport2.ts"
  ],
  "references": [
    {
      "path": "./tsconfig.a.json"
    }
  ]
}

//// [/home/src/project/bMain.ts]
export const x = 10;

//// [/home/src/project/bFileWithImports.ts]
export { y } from "./aFileWithImports";
export { x } from "./bRandomFileForImport";
import type { ImportInterface0 } from "pkg0";


//// [/home/src/project/bRandomFileForImport.ts]
export const x = 10;

//// [/home/src/project/bRandomFileForImport2.ts]
export const x = 10;

//// [/home/src/project/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "traceResolution": true,
    "module": "amd"
  },
  "files": [
    "cMain.ts",
    "cFileWithImports.ts",
    "cRandomFileForImport.ts",
    "cRandomFileForImport2.ts"
  ],
  "references": [
    {
      "path": "./tsconfig.a.json"
    },
    {
      "path": "./tsconfig.b.json"
    }
  ]
}

//// [/home/src/project/cMain.ts]
export const x = 10;

//// [/home/src/project/cFileWithImports.ts]
import { y } from "./bFileWithImports";
import type { ImportInterface0 } from "pkg0";


//// [/home/src/project/cRandomFileForImport.ts]
export const x = 10;

//// [/home/src/project/cRandomFileForImport2.ts]
export const x = 10;

//// [/home/src/project/pkg0.d.ts]
export interface ImportInterface0 {}

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

//// [/home/src/project/aMain.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/home/src/project/aMain.d.ts]
export declare const x = 10;


//// [/home/src/project/aRandomFileForImport.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/home/src/project/aRandomFileForImport.d.ts]
export declare const x = 10;


//// [/home/src/project/aRandomFileForImport2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/home/src/project/aRandomFileForImport2.d.ts]
export declare const x = 10;


//// [/home/src/project/aFileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = exports.x2 = exports.x = void 0;
var aRandomFileForImport_1 = require("./aRandomFileForImport");
Object.defineProperty(exports, "x", { enumerable: true, get: function () { return aRandomFileForImport_1.x; } });
var aRandomFileForImport2_1 = require("./aRandomFileForImport2");
Object.defineProperty(exports, "x2", { enumerable: true, get: function () { return aRandomFileForImport2_1.x; } });
exports.y = 10;


//// [/home/src/project/aFileWithImports.d.ts]
export { x } from "./aRandomFileForImport";
export { x as x2 } from "./aRandomFileForImport2";
export declare const y = 10;


//// [/home/src/project/tsconfig.a.tsbuildinfo]
{"fileNames":["../../../a/lib/lib.d.ts","./amain.ts","./node_modules/pkg0/index.d.ts","./arandomfileforimport.ts","./arandomfileforimport2.ts","./afilewithimports.ts"],"fileIdsList":[[3,4,5]],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},"769951468-export interface ImportInterface0 {}",{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"25172849050-import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n","signature":"-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n"}],"root":[2,[4,6]],"options":{"composite":true},"referencedMap":[[6,1]],"latestChangedDtsFile":"./aFileWithImports.d.ts","version":"FakeTSVersion"}

//// [/home/src/project/tsconfig.a.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../a/lib/lib.d.ts",
    "./amain.ts",
    "./node_modules/pkg0/index.d.ts",
    "./arandomfileforimport.ts",
    "./arandomfileforimport2.ts",
    "./afilewithimports.ts"
  ],
  "fileIdsList": [
    [
      "./node_modules/pkg0/index.d.ts",
      "./arandomfileforimport.ts",
      "./arandomfileforimport2.ts"
    ]
  ],
  "fileInfos": {
    "../../../a/lib/lib.d.ts": {
      "original": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "affectsGlobalScope": true
    },
    "./amain.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./node_modules/pkg0/index.d.ts": {
      "version": "769951468-export interface ImportInterface0 {}",
      "signature": "769951468-export interface ImportInterface0 {}"
    },
    "./arandomfileforimport.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./arandomfileforimport2.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./afilewithimports.ts": {
      "original": {
        "version": "25172849050-import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n",
        "signature": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n"
      },
      "version": "25172849050-import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n",
      "signature": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./amain.ts"
    ],
    [
      [
        4,
        6
      ],
      [
        "./arandomfileforimport.ts",
        "./arandomfileforimport2.ts",
        "./afilewithimports.ts"
      ]
    ]
  ],
  "options": {
    "composite": true
  },
  "referencedMap": {
    "./afilewithimports.ts": [
      "./node_modules/pkg0/index.d.ts",
      "./arandomfileforimport.ts",
      "./arandomfileforimport2.ts"
    ]
  },
  "latestChangedDtsFile": "./aFileWithImports.d.ts",
  "version": "FakeTSVersion",
  "size": 1472
}

//// [/home/src/project/bMain.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/home/src/project/bMain.d.ts]
export declare const x = 10;


//// [/home/src/project/bRandomFileForImport.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/home/src/project/bRandomFileForImport.d.ts]
export declare const x = 10;


//// [/home/src/project/bFileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = exports.y = void 0;
var aFileWithImports_1 = require("./aFileWithImports");
Object.defineProperty(exports, "y", { enumerable: true, get: function () { return aFileWithImports_1.y; } });
var bRandomFileForImport_1 = require("./bRandomFileForImport");
Object.defineProperty(exports, "x", { enumerable: true, get: function () { return bRandomFileForImport_1.x; } });


//// [/home/src/project/bFileWithImports.d.ts]
export { y } from "./aFileWithImports";
export { x } from "./bRandomFileForImport";


//// [/home/src/project/bRandomFileForImport2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/home/src/project/bRandomFileForImport2.d.ts]
export declare const x = 10;


//// [/home/src/project/tsconfig.b.tsbuildinfo]
{"fileNames":["../../../a/lib/lib.d.ts","./bmain.ts","./arandomfileforimport.d.ts","./arandomfileforimport2.d.ts","./afilewithimports.d.ts","./brandomfileforimport.ts","./node_modules/pkg0/index.d.ts","./bfilewithimports.ts","./brandomfileforimport2.ts"],"fileIdsList":[[3,4],[5,6,7]],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},"-6821242887-export declare const x = 10;\n","-6821242887-export declare const x = 10;\n","-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n",{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},"769951468-export interface ImportInterface0 {}",{"version":"-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n","signature":"-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"}],"root":[2,6,8,9],"options":{"composite":true},"referencedMap":[[5,1],[8,2]],"latestChangedDtsFile":"./bRandomFileForImport2.d.ts","version":"FakeTSVersion"}

//// [/home/src/project/tsconfig.b.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../a/lib/lib.d.ts",
    "./bmain.ts",
    "./arandomfileforimport.d.ts",
    "./arandomfileforimport2.d.ts",
    "./afilewithimports.d.ts",
    "./brandomfileforimport.ts",
    "./node_modules/pkg0/index.d.ts",
    "./bfilewithimports.ts",
    "./brandomfileforimport2.ts"
  ],
  "fileIdsList": [
    [
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts"
    ],
    [
      "./afilewithimports.d.ts",
      "./brandomfileforimport.ts",
      "./node_modules/pkg0/index.d.ts"
    ]
  ],
  "fileInfos": {
    "../../../a/lib/lib.d.ts": {
      "original": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "affectsGlobalScope": true
    },
    "./bmain.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./arandomfileforimport.d.ts": {
      "version": "-6821242887-export declare const x = 10;\n",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./arandomfileforimport2.d.ts": {
      "version": "-6821242887-export declare const x = 10;\n",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./afilewithimports.d.ts": {
      "version": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n",
      "signature": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n"
    },
    "./brandomfileforimport.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./node_modules/pkg0/index.d.ts": {
      "version": "769951468-export interface ImportInterface0 {}",
      "signature": "769951468-export interface ImportInterface0 {}"
    },
    "./bfilewithimports.ts": {
      "original": {
        "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n"
      },
      "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
      "signature": "-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n"
    },
    "./brandomfileforimport2.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./bmain.ts"
    ],
    [
      6,
      "./brandomfileforimport.ts"
    ],
    [
      8,
      "./bfilewithimports.ts"
    ],
    [
      9,
      "./brandomfileforimport2.ts"
    ]
  ],
  "options": {
    "composite": true
  },
  "referencedMap": {
    "./afilewithimports.d.ts": [
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts"
    ],
    "./bfilewithimports.ts": [
      "./afilewithimports.d.ts",
      "./brandomfileforimport.ts",
      "./node_modules/pkg0/index.d.ts"
    ]
  },
  "latestChangedDtsFile": "./bRandomFileForImport2.d.ts",
  "version": "FakeTSVersion",
  "size": 1739
}

//// [/home/src/project/cMain.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});


//// [/home/src/project/cMain.d.ts]
export declare const x = 10;


//// [/home/src/project/cFileWithImports.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});


//// [/home/src/project/cFileWithImports.d.ts]
export {};


//// [/home/src/project/cRandomFileForImport.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});


//// [/home/src/project/cRandomFileForImport.d.ts]
export declare const x = 10;


//// [/home/src/project/cRandomFileForImport2.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});


//// [/home/src/project/cRandomFileForImport2.d.ts]
export declare const x = 10;


//// [/home/src/project/tsconfig.tsbuildinfo]
{"fileNames":["../../../a/lib/lib.d.ts","./cmain.ts","./arandomfileforimport.d.ts","./arandomfileforimport2.d.ts","./afilewithimports.d.ts","./brandomfileforimport.d.ts","./bfilewithimports.d.ts","./pkg0.d.ts","./cfilewithimports.ts","./crandomfileforimport.ts","./crandomfileforimport2.ts"],"fileIdsList":[[3,4],[5,6],[7,8]],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},"-6821242887-export declare const x = 10;\n","-6821242887-export declare const x = 10;\n","-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n","-6821242887-export declare const x = 10;\n","-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n","769951468-export interface ImportInterface0 {}",{"version":"-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"}],"root":[2,[9,11]],"options":{"composite":true,"module":2},"referencedMap":[[5,1],[7,2],[9,3]],"latestChangedDtsFile":"./cRandomFileForImport2.d.ts","version":"FakeTSVersion"}

//// [/home/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../a/lib/lib.d.ts",
    "./cmain.ts",
    "./arandomfileforimport.d.ts",
    "./arandomfileforimport2.d.ts",
    "./afilewithimports.d.ts",
    "./brandomfileforimport.d.ts",
    "./bfilewithimports.d.ts",
    "./pkg0.d.ts",
    "./cfilewithimports.ts",
    "./crandomfileforimport.ts",
    "./crandomfileforimport2.ts"
  ],
  "fileIdsList": [
    [
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts"
    ],
    [
      "./afilewithimports.d.ts",
      "./brandomfileforimport.d.ts"
    ],
    [
      "./bfilewithimports.d.ts",
      "./pkg0.d.ts"
    ]
  ],
  "fileInfos": {
    "../../../a/lib/lib.d.ts": {
      "original": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "affectsGlobalScope": true
    },
    "./cmain.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./arandomfileforimport.d.ts": {
      "version": "-6821242887-export declare const x = 10;\n",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./arandomfileforimport2.d.ts": {
      "version": "-6821242887-export declare const x = 10;\n",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./afilewithimports.d.ts": {
      "version": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n",
      "signature": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n"
    },
    "./brandomfileforimport.d.ts": {
      "version": "-6821242887-export declare const x = 10;\n",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./bfilewithimports.d.ts": {
      "version": "-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n",
      "signature": "-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n"
    },
    "./pkg0.d.ts": {
      "version": "769951468-export interface ImportInterface0 {}",
      "signature": "769951468-export interface ImportInterface0 {}"
    },
    "./cfilewithimports.ts": {
      "original": {
        "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
      "signature": "-3531856636-export {};\n"
    },
    "./crandomfileforimport.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./crandomfileforimport2.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./cmain.ts"
    ],
    [
      [
        9,
        11
      ],
      [
        "./cfilewithimports.ts",
        "./crandomfileforimport.ts",
        "./crandomfileforimport2.ts"
      ]
    ]
  ],
  "options": {
    "composite": true,
    "module": 2
  },
  "referencedMap": {
    "./afilewithimports.d.ts": [
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts"
    ],
    "./bfilewithimports.d.ts": [
      "./afilewithimports.d.ts",
      "./brandomfileforimport.d.ts"
    ],
    "./cfilewithimports.ts": [
      "./bfilewithimports.d.ts",
      "./pkg0.d.ts"
    ]
  },
  "latestChangedDtsFile": "./cRandomFileForImport2.d.ts",
  "version": "FakeTSVersion",
  "size": 1822
}


/a/lib/tsc.js -w -p /home/src/project/tsconfig.b.json --explainFiles --extendedDiagnostics
Output::
======== Resolving module 'pkg0' from '/home/src/project/aFileWithImports.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
File '/home/src/project/node_modules/pkg0/package.json' does not exist.
File '/home/src/project/node_modules/pkg0.ts' does not exist.
File '/home/src/project/node_modules/pkg0.tsx' does not exist.
File '/home/src/project/node_modules/pkg0.d.ts' does not exist.
File '/home/src/project/node_modules/pkg0/index.ts' does not exist.
File '/home/src/project/node_modules/pkg0/index.tsx' does not exist.
File '/home/src/project/node_modules/pkg0/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/project/node_modules/pkg0/index.d.ts', result '/home/src/project/node_modules/pkg0/index.d.ts'.
======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module as file / folder, candidate module location '/home/src/project/aRandomFileForImport', target file types: TypeScript, Declaration.
File '/home/src/project/aRandomFileForImport.ts' exists - use it as a name resolution result.
======== Module name './aRandomFileForImport' was successfully resolved to '/home/src/project/aRandomFileForImport.ts'. ========
======== Resolving module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module as file / folder, candidate module location '/home/src/project/aRandomFileForImport2', target file types: TypeScript, Declaration.
File '/home/src/project/aRandomFileForImport2.ts' exists - use it as a name resolution result.
======== Module name './aRandomFileForImport2' was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'. ========
======== Resolving module './aFileWithImports' from '/home/src/project/bFileWithImports.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module as file / folder, candidate module location '/home/src/project/aFileWithImports', target file types: TypeScript, Declaration.
File '/home/src/project/aFileWithImports.ts' exists - use it as a name resolution result.
======== Module name './aFileWithImports' was successfully resolved to '/home/src/project/aFileWithImports.ts'. ========
======== Resolving module './bRandomFileForImport' from '/home/src/project/bFileWithImports.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module as file / folder, candidate module location '/home/src/project/bRandomFileForImport', target file types: TypeScript, Declaration.
File '/home/src/project/bRandomFileForImport.ts' exists - use it as a name resolution result.
======== Module name './bRandomFileForImport' was successfully resolved to '/home/src/project/bRandomFileForImport.ts'. ========
======== Resolving module 'pkg0' from '/home/src/project/bFileWithImports.ts'. ========
Resolution for module 'pkg0' was found in cache from location '/home/src/project'.
======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts'. ========
Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Resolution for module './aRandomFileForImport' was found in cache from location '/home/src/project'.
======== Module name './aRandomFileForImport' was successfully resolved to '/home/src/project/aRandomFileForImport.ts'. ========
======== Resolving module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts'. ========
Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Resolution for module './aRandomFileForImport2' was found in cache from location '/home/src/project'.
======== Module name './aRandomFileForImport2' was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'. ========
======== Resolving module './bFileWithImports' from '/home/src/project/cFileWithImports.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/home/src/project/bFileWithImports.ts' exists - use it as a name resolution result.
======== Module name './bFileWithImports' was successfully resolved to '/home/src/project/bFileWithImports.ts'. ========
======== Resolving module 'pkg0' from '/home/src/project/cFileWithImports.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/home/src/project/pkg0.ts' does not exist.
File '/home/src/project/pkg0.tsx' does not exist.
File '/home/src/project/pkg0.d.ts' exists - use it as a name resolution result.
======== Module name 'pkg0' was successfully resolved to '/home/src/project/pkg0.d.ts'. ========
======== Resolving module './aFileWithImports' from '/home/src/project/bFileWithImports.ts'. ========
Using compiler options of project reference redirect '/home/src/project/tsconfig.b.json'.
Resolution for module './aFileWithImports' was found in cache from location '/home/src/project'.
======== Module name './aFileWithImports' was successfully resolved to '/home/src/project/aFileWithImports.ts'. ========
======== Resolving module './bRandomFileForImport' from '/home/src/project/bFileWithImports.ts'. ========
Using compiler options of project reference redirect '/home/src/project/tsconfig.b.json'.
Resolution for module './bRandomFileForImport' was found in cache from location '/home/src/project'.
======== Module name './bRandomFileForImport' was successfully resolved to '/home/src/project/bRandomFileForImport.ts'. ========
======== Resolving module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts'. ========
Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Resolution for module './aRandomFileForImport' was found in cache from location '/home/src/project'.
======== Module name './aRandomFileForImport' was successfully resolved to '/home/src/project/aRandomFileForImport.ts'. ========
======== Resolving module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts'. ========
Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Resolution for module './aRandomFileForImport2' was found in cache from location '/home/src/project'.
======== Module name './aRandomFileForImport2' was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'. ========
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

Current directory: / CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /home/src/project/tsconfig.b.json 2000 undefined Config file
Synchronizing program
CreatingProgramWith::
  roots: ["/home/src/project/bMain.ts","/home/src/project/bFileWithImports.ts","/home/src/project/bRandomFileForImport.ts","/home/src/project/bRandomFileForImport2.ts"]
  options: {"composite":true,"traceResolution":true,"watch":true,"project":"/home/src/project/tsconfig.b.json","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/home/src/project/tsconfig.b.json"}
  projectReferences: [{"path":"/home/src/project/tsconfig.a.json","originalPath":"./tsconfig.a.json"}]
Loading config file: /home/src/project/tsconfig.a.json
FileWatcher:: Added:: WatchInfo: /home/src/project/tsconfig.a.json 2000 undefined Config file of referened project
FileWatcher:: Added:: WatchInfo: /home/src/project/bMain.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /home/src/project/bFileWithImports.ts 250 undefined Source file
======== Resolving module './aFileWithImports' from '/home/src/project/bFileWithImports.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module as file / folder, candidate module location '/home/src/project/aFileWithImports', target file types: TypeScript, Declaration.
File '/home/src/project/aFileWithImports.ts' exists - use it as a name resolution result.
======== Module name './aFileWithImports' was successfully resolved to '/home/src/project/aFileWithImports.ts'. ========
======== Resolving module './bRandomFileForImport' from '/home/src/project/bFileWithImports.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module as file / folder, candidate module location '/home/src/project/bRandomFileForImport', target file types: TypeScript, Declaration.
File '/home/src/project/bRandomFileForImport.ts' exists - use it as a name resolution result.
======== Module name './bRandomFileForImport' was successfully resolved to '/home/src/project/bRandomFileForImport.ts'. ========
======== Resolving module 'pkg0' from '/home/src/project/bFileWithImports.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
File '/home/src/project/node_modules/pkg0/package.json' does not exist.
File '/home/src/project/node_modules/pkg0.ts' does not exist.
File '/home/src/project/node_modules/pkg0.tsx' does not exist.
File '/home/src/project/node_modules/pkg0.d.ts' does not exist.
File '/home/src/project/node_modules/pkg0/index.ts' does not exist.
File '/home/src/project/node_modules/pkg0/index.tsx' does not exist.
File '/home/src/project/node_modules/pkg0/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/project/node_modules/pkg0/index.d.ts', result '/home/src/project/node_modules/pkg0/index.d.ts'.
======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
FileWatcher:: Added:: WatchInfo: /home/src/project/aFileWithImports.d.ts 250 undefined Source file
======== Resolving module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts'. ========
Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Module resolution kind is not specified, using 'Node10'.
Loading module as file / folder, candidate module location '/home/src/project/aRandomFileForImport', target file types: TypeScript, Declaration.
File '/home/src/project/aRandomFileForImport.ts' exists - use it as a name resolution result.
======== Module name './aRandomFileForImport' was successfully resolved to '/home/src/project/aRandomFileForImport.ts'. ========
======== Resolving module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts'. ========
Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Module resolution kind is not specified, using 'Node10'.
Loading module as file / folder, candidate module location '/home/src/project/aRandomFileForImport2', target file types: TypeScript, Declaration.
File '/home/src/project/aRandomFileForImport2.ts' exists - use it as a name resolution result.
======== Module name './aRandomFileForImport2' was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'. ========
FileWatcher:: Added:: WatchInfo: /home/src/project/aRandomFileForImport.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /home/src/project/aRandomFileForImport2.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /home/src/project/bRandomFileForImport.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /home/src/project/node_modules/pkg0/index.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /home/src/project/bRandomFileForImport2.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 250 undefined Source file
DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules/@types 1 undefined Type roots
a/lib/lib.d.ts
  Default library for target 'es5'
home/src/project/bMain.ts
  Part of 'files' list in tsconfig.json
home/src/project/aRandomFileForImport.d.ts
  Imported via "./aRandomFileForImport" from file 'home/src/project/aFileWithImports.d.ts'
  File is output of project reference source 'home/src/project/aRandomFileForImport.ts'
home/src/project/aRandomFileForImport2.d.ts
  Imported via "./aRandomFileForImport2" from file 'home/src/project/aFileWithImports.d.ts'
  File is output of project reference source 'home/src/project/aRandomFileForImport2.ts'
home/src/project/aFileWithImports.d.ts
  Imported via "./aFileWithImports" from file 'home/src/project/bFileWithImports.ts'
  File is output of project reference source 'home/src/project/aFileWithImports.ts'
home/src/project/bRandomFileForImport.ts
  Imported via "./bRandomFileForImport" from file 'home/src/project/bFileWithImports.ts'
  Part of 'files' list in tsconfig.json
home/src/project/node_modules/pkg0/index.d.ts
  Imported via "pkg0" from file 'home/src/project/bFileWithImports.ts'
home/src/project/bFileWithImports.ts
  Part of 'files' list in tsconfig.json
home/src/project/bRandomFileForImport2.ts
  Part of 'files' list in tsconfig.json
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.




PolledWatches::
/home/src/project/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/home/src/project/aFileWithImports.d.ts: *new*
  {}
/home/src/project/aRandomFileForImport.d.ts: *new*
  {}
/home/src/project/aRandomFileForImport2.d.ts: *new*
  {}
/home/src/project/bFileWithImports.ts: *new*
  {}
/home/src/project/bMain.ts: *new*
  {}
/home/src/project/bRandomFileForImport.ts: *new*
  {}
/home/src/project/bRandomFileForImport2.ts: *new*
  {}
/home/src/project/node_modules/pkg0/index.d.ts: *new*
  {}
/home/src/project/tsconfig.a.json: *new*
  {}
/home/src/project/tsconfig.b.json: *new*
  {}

FsWatchesRecursive::
/home/src/project/node_modules: *new*
  {}

Program root files: [
  "/home/src/project/bMain.ts",
  "/home/src/project/bFileWithImports.ts",
  "/home/src/project/bRandomFileForImport.ts",
  "/home/src/project/bRandomFileForImport2.ts"
]
Program options: {
  "composite": true,
  "traceResolution": true,
  "watch": true,
  "project": "/home/src/project/tsconfig.b.json",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/home/src/project/tsconfig.b.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/home/src/project/bMain.ts
/home/src/project/aRandomFileForImport.d.ts
/home/src/project/aRandomFileForImport2.d.ts
/home/src/project/aFileWithImports.d.ts
/home/src/project/bRandomFileForImport.ts
/home/src/project/node_modules/pkg0/index.d.ts
/home/src/project/bFileWithImports.ts
/home/src/project/bRandomFileForImport2.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: modify bRandomFileForImport by adding import

Input::
//// [/home/src/project/bRandomFileForImport.ts]
export type { ImportInterface0 } from "pkg0";
export const x = 10;


Output::
FileWatcher:: Triggered with /home/src/project/bRandomFileForImport.ts 1:: WatchInfo: /home/src/project/bRandomFileForImport.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /home/src/project/bRandomFileForImport.ts 1:: WatchInfo: /home/src/project/bRandomFileForImport.ts 250 undefined Source file


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
  roots: ["/home/src/project/bMain.ts","/home/src/project/bFileWithImports.ts","/home/src/project/bRandomFileForImport.ts","/home/src/project/bRandomFileForImport2.ts"]
  options: {"composite":true,"traceResolution":true,"watch":true,"project":"/home/src/project/tsconfig.b.json","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/home/src/project/tsconfig.b.json"}
  projectReferences: [{"path":"/home/src/project/tsconfig.a.json","originalPath":"./tsconfig.a.json"}]
Reusing resolution of module './aFileWithImports' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aFileWithImports.ts'.
Reusing resolution of module './bRandomFileForImport' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/bRandomFileForImport.ts'.
Reusing resolution of module 'pkg0' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport.ts'.
Reusing resolution of module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'.
======== Resolving module 'pkg0' from '/home/src/project/bRandomFileForImport.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
File '/home/src/project/node_modules/pkg0/package.json' does not exist according to earlier cached lookups.
File '/home/src/project/node_modules/pkg0.ts' does not exist.
File '/home/src/project/node_modules/pkg0.tsx' does not exist.
File '/home/src/project/node_modules/pkg0.d.ts' does not exist.
File '/home/src/project/node_modules/pkg0/index.ts' does not exist.
File '/home/src/project/node_modules/pkg0/index.tsx' does not exist.
File '/home/src/project/node_modules/pkg0/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/project/node_modules/pkg0/index.d.ts', result '/home/src/project/node_modules/pkg0/index.d.ts'.
======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
a/lib/lib.d.ts
  Default library for target 'es5'
home/src/project/bMain.ts
  Part of 'files' list in tsconfig.json
home/src/project/aRandomFileForImport.d.ts
  Imported via "./aRandomFileForImport" from file 'home/src/project/aFileWithImports.d.ts'
  File is output of project reference source 'home/src/project/aRandomFileForImport.ts'
home/src/project/aRandomFileForImport2.d.ts
  Imported via "./aRandomFileForImport2" from file 'home/src/project/aFileWithImports.d.ts'
  File is output of project reference source 'home/src/project/aRandomFileForImport2.ts'
home/src/project/aFileWithImports.d.ts
  Imported via "./aFileWithImports" from file 'home/src/project/bFileWithImports.ts'
  File is output of project reference source 'home/src/project/aFileWithImports.ts'
home/src/project/node_modules/pkg0/index.d.ts
  Imported via "pkg0" from file 'home/src/project/bRandomFileForImport.ts'
  Imported via "pkg0" from file 'home/src/project/bFileWithImports.ts'
home/src/project/bRandomFileForImport.ts
  Imported via "./bRandomFileForImport" from file 'home/src/project/bFileWithImports.ts'
  Part of 'files' list in tsconfig.json
home/src/project/bFileWithImports.ts
  Part of 'files' list in tsconfig.json
home/src/project/bRandomFileForImport2.ts
  Part of 'files' list in tsconfig.json
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/home/src/project/bRandomFileForImport.js] file written with same contents
//// [/home/src/project/bRandomFileForImport.d.ts]
export type { ImportInterface0 } from "pkg0";
export declare const x = 10;


//// [/home/src/project/bFileWithImports.js] file written with same contents
//// [/home/src/project/tsconfig.b.tsbuildinfo]
{"fileNames":["../../../a/lib/lib.d.ts","./bmain.ts","./arandomfileforimport.d.ts","./arandomfileforimport2.d.ts","./afilewithimports.d.ts","./node_modules/pkg0/index.d.ts","./brandomfileforimport.ts","./bfilewithimports.ts","./brandomfileforimport2.ts"],"fileIdsList":[[3,4],[5,6,7],[6]],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},"-6821242887-export declare const x = 10;\n","-6821242887-export declare const x = 10;\n","-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n","769951468-export interface ImportInterface0 {}",{"version":"-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-21151159744-export type { ImportInterface0 } from \"pkg0\";\nexport declare const x = 10;\n"},{"version":"-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n","signature":"-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"}],"root":[2,[7,9]],"options":{"composite":true},"referencedMap":[[5,1],[8,2],[7,3]],"latestChangedDtsFile":"./bRandomFileForImport.d.ts","version":"FakeTSVersion"}

//// [/home/src/project/tsconfig.b.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../a/lib/lib.d.ts",
    "./bmain.ts",
    "./arandomfileforimport.d.ts",
    "./arandomfileforimport2.d.ts",
    "./afilewithimports.d.ts",
    "./node_modules/pkg0/index.d.ts",
    "./brandomfileforimport.ts",
    "./bfilewithimports.ts",
    "./brandomfileforimport2.ts"
  ],
  "fileIdsList": [
    [
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts"
    ],
    [
      "./afilewithimports.d.ts",
      "./node_modules/pkg0/index.d.ts",
      "./brandomfileforimport.ts"
    ],
    [
      "./node_modules/pkg0/index.d.ts"
    ]
  ],
  "fileInfos": {
    "../../../a/lib/lib.d.ts": {
      "original": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "affectsGlobalScope": true
    },
    "./bmain.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./arandomfileforimport.d.ts": {
      "version": "-6821242887-export declare const x = 10;\n",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./arandomfileforimport2.d.ts": {
      "version": "-6821242887-export declare const x = 10;\n",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./afilewithimports.d.ts": {
      "version": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n",
      "signature": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n"
    },
    "./node_modules/pkg0/index.d.ts": {
      "version": "769951468-export interface ImportInterface0 {}",
      "signature": "769951468-export interface ImportInterface0 {}"
    },
    "./brandomfileforimport.ts": {
      "original": {
        "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-21151159744-export type { ImportInterface0 } from \"pkg0\";\nexport declare const x = 10;\n"
      },
      "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
      "signature": "-21151159744-export type { ImportInterface0 } from \"pkg0\";\nexport declare const x = 10;\n"
    },
    "./bfilewithimports.ts": {
      "original": {
        "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n"
      },
      "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
      "signature": "-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n"
    },
    "./brandomfileforimport2.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./bmain.ts"
    ],
    [
      [
        7,
        9
      ],
      [
        "./brandomfileforimport.ts",
        "./bfilewithimports.ts",
        "./brandomfileforimport2.ts"
      ]
    ]
  ],
  "options": {
    "composite": true
  },
  "referencedMap": {
    "./afilewithimports.d.ts": [
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts"
    ],
    "./bfilewithimports.ts": [
      "./afilewithimports.d.ts",
      "./node_modules/pkg0/index.d.ts",
      "./brandomfileforimport.ts"
    ],
    "./brandomfileforimport.ts": [
      "./node_modules/pkg0/index.d.ts"
    ]
  },
  "latestChangedDtsFile": "./bRandomFileForImport.d.ts",
  "version": "FakeTSVersion",
  "size": 1847
}



Program root files: [
  "/home/src/project/bMain.ts",
  "/home/src/project/bFileWithImports.ts",
  "/home/src/project/bRandomFileForImport.ts",
  "/home/src/project/bRandomFileForImport2.ts"
]
Program options: {
  "composite": true,
  "traceResolution": true,
  "watch": true,
  "project": "/home/src/project/tsconfig.b.json",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/home/src/project/tsconfig.b.json"
}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/home/src/project/bMain.ts
/home/src/project/aRandomFileForImport.d.ts
/home/src/project/aRandomFileForImport2.d.ts
/home/src/project/aFileWithImports.d.ts
/home/src/project/node_modules/pkg0/index.d.ts
/home/src/project/bRandomFileForImport.ts
/home/src/project/bFileWithImports.ts
/home/src/project/bRandomFileForImport2.ts

Semantic diagnostics in builder refreshed for::
/home/src/project/bRandomFileForImport.ts
/home/src/project/bFileWithImports.ts

Shape signatures in builder refreshed for::
/home/src/project/brandomfileforimport.ts (computed .d.ts)
/home/src/project/bfilewithimports.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

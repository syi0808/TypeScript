currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/a.ts]



Info seq  [hh:mm:ss:mss] request:
    {
      "command": "openExternalProject",
      "arguments": {
        "rootFiles": [
          {
            "fileName": "/a.ts"
          }
        ],
        "options": {
          "strict": true
        },
        "projectFileName": "/hunter2/foo.csproj"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /hunter2/foo.csproj
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /hunter2/foo.csproj WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /hunter2/foo.csproj projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/hunter2/foo.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/a.ts Text-1 ""


	../a.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "ef055f5036459f2705212d5657970dd7bc0280bdb6fa2cddd17d0cd73eb2a989",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 1,
            "tsSize": 0,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 0,
            "dtsSize": 0,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "strict": true
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "compileOnSave": true,
          "configFileName": "other",
          "projectType": "external",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] Project '/hunter2/foo.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] response:
    {
      "response": true,
      "responseRequired": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After request

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/a.ts: *new*
  {}

Projects::
/hunter2/foo.csproj (External) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a.ts *new*
    version: Text-1
    containingProjects: 1
        /hunter2/foo.csproj

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a.ts"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /a.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/hunter2/foo.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /hunter2/foo.csproj
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 2,
      "success": true
    }
After request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}

FsWatches *deleted*::
/a.ts:
  {}

ScriptInfos::
/a.ts (Open) *changed*
    open: true *changed*
    version: Text-1
    containingProjects: 1
        /hunter2/foo.csproj *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/a.ts"
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/hunter2/foo.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "close",
      "request_seq": 3,
      "success": true
    }
After request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}

FsWatches::
/a.ts: *new*
  {}

ScriptInfos::
/a.ts *changed*
    open: false *changed*
    version: Text-1
    containingProjects: 1
        /hunter2/foo.csproj

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "closeExternalProject",
      "arguments": {
        "projectFileName": "/hunter2/foo.csproj"
      },
      "seq": 4,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/hunter2/foo.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/a.ts


	../a.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /hunter2/foo.csproj WatchType: Missing file
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] response:
    {
      "response": true,
      "responseRequired": true
    }
After request

PolledWatches *deleted*::
/a/lib/lib.d.ts:
  {"pollingInterval":500}

FsWatches::
/a.ts:
  {}

Projects::
/hunter2/foo.csproj (External) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 1
    isClosed: true *changed*

ScriptInfos::
/a.ts *changed*
    version: Text-1
    containingProjects: 0 *changed*
        /hunter2/foo.csproj *deleted*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "openExternalProject",
      "arguments": {
        "rootFiles": [
          {
            "fileName": "/a.ts"
          }
        ],
        "options": {
          "strict": true,
          "allowNonTsExtensions": true,
          "noEmitForJsFiles": true
        },
        "projectFileName": "/hunter2/foo.csproj"
      },
      "seq": 5,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /hunter2/foo.csproj
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /hunter2/foo.csproj WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /hunter2/foo.csproj projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/hunter2/foo.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/a.ts Text-1 ""


	../a.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/hunter2/foo.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] response:
    {
      "response": true,
      "responseRequired": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After request

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/a.ts:
  {}

Projects::
/hunter2/foo.csproj (External) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /hunter2/foo.csproj *new*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a.ts"
      },
      "seq": 6,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /a.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/hunter2/foo.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /hunter2/foo.csproj
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 6,
      "success": true
    }
After request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}

FsWatches *deleted*::
/a.ts:
  {}

ScriptInfos::
/a.ts (Open) *changed*
    open: true *changed*
    version: Text-1
    containingProjects: 1
        /hunter2/foo.csproj *default*

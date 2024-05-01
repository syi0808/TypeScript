// @target: esnext
// @noEmit: true
// @noTypesAndSymbols: true

// NOTE: Cannot use type tests here as there would be a diff every time the version changes
type CheckVersion<T extends `${bigint}.${bigint}.${bigint}` | `${bigint}.${bigint}.${bigint}-${string}`> = T;
type version = CheckVersion<TypeScriptSettings["version"]>;

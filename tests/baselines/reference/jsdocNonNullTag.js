//// [tests/cases/conformance/jsdoc/jsdocNonNullTag.ts] ////

//// [file1.js]
/** @type {(x: string | null | undefined) => string} */
export function fn1(x) {
    const nonNulledX = /** @nonnull */ (x);
    return nonNulledX.toUpperCase();
}


//// [file2.js]
/** @type {(x: string | null | undefined) => string} */
export function fn2(x) {
    return (/** @nonnull */ (x)).toUpperCase();
}


//// [file3.js]
/** @type {(x: string | null) => string} */
export function fn3(x) {
    return (/** @nonnull */ (x)).toUpperCase();
}


//// [file4.js]
/** @type {(x: string | undefined) => string} */
export function fn4(x) {
    return (/** @nonnull */ (x)).toUpperCase();
}


//// [file5.js]
/**
 * @nonnull
 * @type {string}
 */
export const var5;

const p5 = Promise.resolve(true);

p5.then(() => {
    var5 = "hello!";
});
p5.then(() => {
    return var5.toUpperCase();
});


//// [file6.js]
/**
 * @nonnull
 * @type {string | undefined}
 */
export const var6;

const p6 = Promise.resolve(true);

p6.then(() => {
    var6 = "hello!";
});
p6.then(() => {
    return var5.toUpperCase();
});


//// [file7.js]
/**
 * @nonnull
 * @type {string | undefined}
 */
export class Class7 {
    /**
     * @nonnull
     * @type {string}
     */
    abc;

    /**
     * @param {string} abc
     */
    constructor(abc) {
        this.abc = abc;
    }
}


//// [file8.js]
/**
 * @nonnull
 * @type {string | undefined}
 */
export class Class8 {
    /**
     * @param {string} abc
     */
    constructor(abc) {
        /** @private */
        this.abc = abc;
    }
}


//// [file9.js]
/** @type {() => string | null} */
export const tryGetString9 = () => {
    throw "Not implemented!";
}

/** @nonull */
export const someString9 = tryGetString9();



//// [file1.js]
/** @type {(x: string | null | undefined) => string} */
export function fn1(x) {
    const nonNulledX = /** @nonnull */ (x);
    return nonNulledX.toUpperCase();
}
//// [file2.js]
/** @type {(x: string | null | undefined) => string} */
export function fn2(x) {
    return ( /** @nonnull */(x)).toUpperCase();
}
//// [file3.js]
/** @type {(x: string | null) => string} */
export function fn3(x) {
    return ( /** @nonnull */(x)).toUpperCase();
}
//// [file4.js]
/** @type {(x: string | undefined) => string} */
export function fn4(x) {
    return ( /** @nonnull */(x)).toUpperCase();
}
//// [file5.js]
/**
 * @nonnull
 * @type {string}
 */
export const var5;
const p5 = Promise.resolve(true);
p5.then(() => {
    var5 = "hello!";
});
p5.then(() => {
    return var5.toUpperCase();
});
//// [file6.js]
/**
 * @nonnull
 * @type {string | undefined}
 */
export const var6;
const p6 = Promise.resolve(true);
p6.then(() => {
    var6 = "hello!";
});
p6.then(() => {
    return var5.toUpperCase();
});
//// [file7.js]
/**
 * @nonnull
 * @type {string | undefined}
 */
export class Class7 {
    /**
     * @nonnull
     * @type {string}
     */
    abc;
    /**
     * @param {string} abc
     */
    constructor(abc) {
        this.abc = abc;
    }
}
//// [file8.js]
/**
 * @nonnull
 * @type {string | undefined}
 */
export class Class8 {
    /**
     * @param {string} abc
     */
    constructor(abc) {
        /** @private */
        this.abc = abc;
    }
}
//// [file9.js]
/** @type {() => string | null} */
export const tryGetString9 = () => {
    throw "Not implemented!";
};
/** @nonull */
export const someString9 = tryGetString9();

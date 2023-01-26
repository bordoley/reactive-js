/// <reference types="./ReadonlyArray.some.d.ts" />
const ReadonlyArray_some = (predicate) => arr => arr.some(predicate);

export { ReadonlyArray_some as default };

/// <reference types="./ReadonlyArray.keep.d.ts" />
const ReadonlyArray_keep = (predicate) => (arr) => arr.filter(predicate);

export { ReadonlyArray_keep as default };

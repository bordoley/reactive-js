/// <reference types="./ReadonlyArray.keep.d.ts" />

const ReadonlyArray_keep = (predicate) => (arr) => arr.filter(predicate);
export default ReadonlyArray_keep;

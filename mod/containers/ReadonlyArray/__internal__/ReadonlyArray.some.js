/// <reference types="./ReadonlyArray.some.d.ts" />

const ReadonlyArray_some = (predicate) => arr => arr.some(predicate);
export default ReadonlyArray_some;

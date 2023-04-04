/// <reference types="./ReadonlyArray.keepWithKey.d.ts" />

const ReadonlyArray_keepWithKey = (predicate) => (arr) => arr.filter(predicate);
export default ReadonlyArray_keepWithKey;

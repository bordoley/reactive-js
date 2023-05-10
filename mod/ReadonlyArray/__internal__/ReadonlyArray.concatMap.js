/// <reference types="./ReadonlyArray.concatMap.d.ts" />

const ReadonlyArray_concatMap = (selector) => (arr) => arr.flatMap(selector);
export default ReadonlyArray_concatMap;

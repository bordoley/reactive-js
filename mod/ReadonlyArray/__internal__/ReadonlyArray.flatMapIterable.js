/// <reference types="./ReadonlyArray.flatMapIterable.d.ts" />

const ReadonlyArray_flatMapIterable = (selector) => (arr) => arr.flatMap(x => Array.from(selector(x)));
export default ReadonlyArray_flatMapIterable;

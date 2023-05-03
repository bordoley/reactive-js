/// <reference types="./ReadonlyArray.everySatisfy.d.ts" />

const ReadonlyArray_everySatisfy = (predicate) => arr => arr.every(predicate);
export default ReadonlyArray_everySatisfy;

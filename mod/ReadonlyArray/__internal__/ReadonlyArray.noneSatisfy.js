/// <reference types="./ReadonlyArray.noneSatisfy.d.ts" />

const ReadonlyArray_noneSatisfy = (predicate) => arr => !arr.every(predicate);
export default ReadonlyArray_noneSatisfy;

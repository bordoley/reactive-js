/// <reference types="./ReadonlyArray.someSatisfy.d.ts" />

const ReadonlyArray_someSatisfy = (predicate) => arr => arr.some(predicate);
export default ReadonlyArray_someSatisfy;

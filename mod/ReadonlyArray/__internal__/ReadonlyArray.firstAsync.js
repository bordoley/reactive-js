/// <reference types="./ReadonlyArray.firstAsync.d.ts" />

const ReadonlyArray_firstAsync = () => (arr) => Promise.resolve(arr[0]);
export default ReadonlyArray_firstAsync;

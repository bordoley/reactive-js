import ReadonlyArray_getLength from "./ReadonlyArray.getLength.js";

const ReadonlyArray_isEmpty = (arr: readonly unknown[]): boolean =>
  ReadonlyArray_getLength(arr) === 0;

export default ReadonlyArray_isEmpty;

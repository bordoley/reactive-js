/// <reference types="./ReadonlyArray.keep.d.ts" />
const ReadonlyArray_keep = (predicate) => (arr) => {
    const result = arr.filter(predicate);
    return result;
};

export { ReadonlyArray_keep as default };

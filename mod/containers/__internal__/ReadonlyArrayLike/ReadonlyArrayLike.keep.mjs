/// <reference types="./ReadonlyArrayLike.keep.d.ts" />
const ReadonlyArrayLike__keep = (predicate) => (arr) => {
    const result = arr.filter(predicate);
    return result;
};

export { ReadonlyArrayLike__keep as default };

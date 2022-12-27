/// <reference types="./ReadonlyArrayLike.keep.d.ts" />
const keep = (predicate) => (arr) => {
    const result = arr.filter(predicate);
    return result;
};

export { keep as default };

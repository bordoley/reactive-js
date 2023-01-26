/// <reference types="./ReadonlyArray.keep.d.ts" />
const ReadonlyArray$keep = (predicate) => (arr) => {
    const result = arr.filter(predicate);
    return result;
};

export { ReadonlyArray$keep as default };

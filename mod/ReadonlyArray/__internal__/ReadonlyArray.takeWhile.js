/// <reference types="./ReadonlyArray.takeWhile.d.ts" />

const ReadonlyArray_takeWhile = (predicate, options) => (arr) => {
    const inclusive = options?.inclusive ?? false;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i];
        if (predicate(v)) {
            result.push(v);
            continue;
        }
        if (inclusive) {
            result.push(v);
        }
        break;
    }
    return result;
};
export default ReadonlyArray_takeWhile;

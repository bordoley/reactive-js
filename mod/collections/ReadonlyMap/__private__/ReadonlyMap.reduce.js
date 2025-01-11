/// <reference types="./ReadonlyMap.reduce.d.ts" />

const ReadonlyMap_reduce = (reducer, initialValue) => (map) => {
    let result = initialValue();
    for (const [key, value] of map) {
        result = reducer(result, value, key);
    }
    return result;
};
export default ReadonlyMap_reduce;

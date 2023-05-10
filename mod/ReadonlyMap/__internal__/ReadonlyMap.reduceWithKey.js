/// <reference types="./ReadonlyMap.reduceWithKey.d.ts" />

const ReadonlyMap_reduceWithKey = (reducer, initialValue) => (map) => {
    let result = initialValue();
    for (let [key, value] of map) {
        result = reducer(result, value, key);
    }
    return result;
};
export default ReadonlyMap_reduceWithKey;

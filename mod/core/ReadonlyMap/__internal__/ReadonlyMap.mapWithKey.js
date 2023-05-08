/// <reference types="./ReadonlyMap.mapWithKey.d.ts" />

const ReadonlyMap_mapWithKey = (selector) => (map) => {
    const result = new Map();
    for (let [key, value] of map) {
        result.set(key, selector(value, key));
    }
    return result;
};
export default ReadonlyMap_mapWithKey;

/// <reference types="./ReadonlyMap.mapWithKey.d.ts" />

const ReadonlyMap_mapWithKey = (mapper) => (map) => {
    const result = new Map();
    for (let [key, value] of map) {
        result.set(key, mapper(value, key));
    }
    return result;
};
export default ReadonlyMap_mapWithKey;

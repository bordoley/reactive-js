/// <reference types="./ReadonlyMap.map.d.ts" />

const ReadonlyMap_map = (mapper) => (map) => {
    const result = new Map();
    for (let [key, value] of map) {
        result.set(key, mapper(value));
    }
    return result;
};
export default ReadonlyMap_map;

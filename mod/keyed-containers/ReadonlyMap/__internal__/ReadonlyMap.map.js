/// <reference types="./ReadonlyMap.map.d.ts" />

const ReadonlyMap_map = (selector) => (map) => {
    const result = new Map();
    for (let [key, value] of map) {
        result.set(key, selector(value));
    }
    return result;
};
export default ReadonlyMap_map;

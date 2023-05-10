/// <reference types="./ReadonlyMap.forEachWithKey.d.ts" />

const ReadonlyMap_forEachWithKey = (effect) => map => {
    map.forEach(effect);
    return map;
};
export default ReadonlyMap_forEachWithKey;

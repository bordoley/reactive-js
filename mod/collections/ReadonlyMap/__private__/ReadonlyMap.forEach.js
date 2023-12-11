/// <reference types="./ReadonlyMap.forEach.d.ts" />

const ReadonlyMap_forEach = (effect) => map => {
    for (let [key, value] of map) {
        effect(value, key);
    }
};
export default ReadonlyMap_forEach;

/// <reference types="./ReadonlyArray.forEachWithKey.d.ts" />

const ReadonlyArray_forEachWithKey = (effect) => arr => {
    arr.forEach(effect);
    return arr;
};
export default ReadonlyArray_forEachWithKey;

/// <reference types="./ReadonlyArray.forEach.d.ts" />

const ReadonlyArray_forEach = (effect) => arr => {
    arr.forEach(effect);
    return arr;
};
export default ReadonlyArray_forEach;

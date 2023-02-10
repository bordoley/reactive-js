/// <reference types="./ReadonlyArray.forEach.d.ts" />
const ReadonlyArray_forEach = (effect) => arr => {
    arr.forEach(effect);
    return arr;
};

export { ReadonlyArray_forEach as default };

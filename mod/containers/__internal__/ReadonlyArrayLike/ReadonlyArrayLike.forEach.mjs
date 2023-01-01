/// <reference types="./ReadonlyArrayLike.forEach.d.ts" />
const ReadonlyArrayLike__forEach = (effect) => arr => {
    arr.forEach(effect);
    return arr;
};

export { ReadonlyArrayLike__forEach as default };

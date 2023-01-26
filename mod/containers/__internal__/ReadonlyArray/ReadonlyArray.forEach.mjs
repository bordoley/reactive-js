/// <reference types="./ReadonlyArray.forEach.d.ts" />
const ReadonlyArray$forEach = (effect) => arr => {
    arr.forEach(effect);
    return arr;
};

export { ReadonlyArray$forEach as default };

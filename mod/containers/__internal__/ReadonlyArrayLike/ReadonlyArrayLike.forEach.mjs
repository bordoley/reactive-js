/// <reference types="./ReadonlyArrayLike.forEach.d.ts" />
const forEach = (effect) => arr => {
    arr.forEach(effect);
    return arr;
};

export { forEach as default };

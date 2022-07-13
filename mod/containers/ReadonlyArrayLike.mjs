/// <reference types="./ReadonlyArrayLike.d.ts" />
const _empty = [];
const empty = () => _empty;
const every = (predicate) => arr => arr.every(predicate);
const keep = (predicate) => (arr) => {
    const result = arr.filter(predicate);
    return result;
};
const keepT = { keep };
const map = (mapper) => (arr) => arr.map(mapper);
const mapT = { map };
const forEach = (f) => arr => {
    arr.forEach(f);
    return arr;
};

export { empty, every, forEach, keep, keepT, map, mapT };

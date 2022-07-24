/// <reference types="./ReadonlyArrayLike.d.ts" />
import { identity } from '../util/functions.mjs';

const empty = /*@__PURE__*/ (() => {
    const _empty = [];
    return () => _empty;
})();
const emptyT = { empty };
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
const toReadonlyArray = () => identity;
const toReadonlyArrayT = {
    toReadonlyArray,
};

export { empty, emptyT, every, forEach, keep, keepT, map, mapT, toReadonlyArray, toReadonlyArrayT };

/// <reference types="./__internal__.readonlyArray.d.ts" />
const empty = [];
const everySatisfy = (predicate) => arr => arr.every(predicate);
const keep = (predicate) => arr => arr.filter(predicate);
const keepType = (predicate) => arr => arr.filter(predicate);
const map = (mapper) => arr => arr.map(mapper);
const forEach = (f) => arr => {
    arr.forEach(f);
    return arr;
};

export { empty, everySatisfy, forEach, keep, keepType, map };

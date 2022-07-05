/// <reference types="./__internal__.readonlyArray.d.ts" />
const empty = [];
const everySatisfy = (predicate) => arr => arr.every(predicate);
const _fromObject = (object) => Object.entries(object);
const fromObject = () => _fromObject;
const join = (separator) => arr => arr.join(separator);
const keep = (predicate) => arr => arr.filter(predicate);
const keepType = (predicate) => arr => arr.filter(predicate);
const map = (mapper) => arr => arr.map(mapper);
const reduce = (reducer, initialValue) => arr => arr.reduce(reducer, initialValue());
const forEach = (f) => arr => {
    arr.forEach(f);
    return arr;
};

export { empty, everySatisfy, forEach, fromObject, join, keep, keepType, map, reduce };

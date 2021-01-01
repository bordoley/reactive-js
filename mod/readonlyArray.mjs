/// <reference types="./readonlyArray.d.ts" />
const everySatisfy = (predicate) => arr => arr.every(predicate);
const _fromObject = (object) => Object.entries(object);
const fromObject = () => _fromObject;
const join = (separator) => arr => arr.join(separator);
const keep = (predicate) => arr => arr.filter(predicate);
const length = (arr) => arr.length;
const map = (mapper) => arr => arr.map(mapper);
const reduce = (reducer, initialValue) => arr => arr.reduce(reducer, initialValue());
const reduceRight = (reducer, initialValue) => arr => arr.reduceRight(reducer, initialValue());

export { everySatisfy, fromObject, join, keep, length, map, reduce, reduceRight };

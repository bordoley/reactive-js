/// <reference types="./readonlyArray.d.ts" />
const empty = [];
const everySatisfy = (predicate) => arr => arr.every(predicate);
const _fromObject = (object) => Object.entries(object);
const fromObject = () => _fromObject;
const join = (separator) => arr => arr.join(separator);
const keep = (predicate) => arr => arr.filter(predicate);
const keepType = (predicate) => arr => arr.filter(predicate);
const length = (arr) => arr.length;
const map = (mapper) => arr => arr.map(mapper);
const reduce = (reducer, initialValue) => arr => arr.reduce(reducer, initialValue());
const reduceRight = (reducer, initialValue) => arr => arr.reduceRight(reducer, initialValue());

export { empty, everySatisfy, fromObject, join, keep, keepType, length, map, reduce, reduceRight };

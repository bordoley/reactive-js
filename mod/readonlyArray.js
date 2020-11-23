'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const everySatisfy = (predicate) => arr => arr.every(predicate);
const _fromObject = (object) => Object.entries(object);
const fromObject = () => _fromObject;
const join = (separator) => arr => arr.join(separator);
const keep = (predicate) => arr => arr.filter(predicate);
const length = (arr) => arr.length;
const map = (mapper) => arr => arr.map(mapper);
const reduce = (reducer, initialValue) => arr => arr.reduce(reducer, initialValue());
const reduceRight = (reducer, initialValue) => arr => arr.reduceRight(reducer, initialValue());

exports.everySatisfy = everySatisfy;
exports.fromObject = fromObject;
exports.join = join;
exports.keep = keep;
exports.length = length;
exports.map = map;
exports.reduce = reduce;
exports.reduceRight = reduceRight;

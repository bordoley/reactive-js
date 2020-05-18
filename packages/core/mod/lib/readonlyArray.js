export const everySatisfy = (predicate) => arr => arr.every(predicate);
const _fromObject = (object) => Object.entries(object);
export const fromObject = () => _fromObject;
export const join = (separator) => arr => arr.join(separator);
export const keep = (predicate) => arr => arr.filter(predicate);
export const length = (arr) => arr.length;
export const map = (mapper) => arr => arr.map(mapper);
export const reduce = (reducer, initialValue) => arr => arr.reduce(reducer, initialValue());
export const reduceRight = (reducer, initialValue) => arr => arr.reduceRight(reducer, initialValue());

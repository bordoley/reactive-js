/// <reference types="./container.d.ts" />
import { compose, callWith, pipe, defer, alwaysFalse, returns } from './functions.mjs';

const compute = (m, options) => compose(fromValue(m, options), m.map(callWith()));
const concatMap = ({ map, concatAll }, mapper, options) => compose(map(mapper), concatAll(options));
const concatWith = ({ concat }, snd) => first => concat(first, snd);
const empty = ({ fromArray }, options) => fromArray({ ...options })([]);
function endWith(m, ...values) {
    return concatWith(m, m.fromArray()(values));
}
const fromValue = ({ fromArray }, options) => (value) => pipe([value], fromArray({
    ...options,
}));
const genMap = (m, mapper, options) => compose(m.map(x => pipe(defer(x, mapper), m.fromIterator(options))), m.concatAll(options));
const keepType = ({ keep }, predicate) => keep(predicate);
const ignoreElements = ({ keep, }) => keep(alwaysFalse);
const mapTo = ({ map }, value) => pipe(value, returns, map);
function startWith(m, ...values) {
    return container => pipe(values, m.fromArray(), concatWith(m, container));
}
const throws = (m, options) => errorFactory => pipe(() => {
    const cause = errorFactory();
    throw cause;
}, compute(m, options));
const zipWith = ({ zip }, snd) => fst => zip(fst, snd);

export { compute, concatMap, concatWith, empty, endWith, fromValue, genMap, ignoreElements, keepType, mapTo, startWith, throws, zipWith };

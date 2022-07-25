/// <reference types="./ContainerLike.d.ts" />
import { compose, callWith, isEqualTo, isSome, pipe, alwaysFalse, returns, negate } from '../functions.mjs';

const compute = (m, options) => compose(m.fromValue(options), m.map(callWith()));
const concatMap = ({ map, concatAll }, mapper, options) => compose(map(mapper), concatAll(options));
const concatWith = ({ concat }, snd) => first => concat(first, snd);
const contains = ({ someSatisfy }, value, options = {}) => someSatisfy(isEqualTo(value, options));
function endWith(m, ...values) {
    return concatWith(m, m.fromArray()(values));
}
const fromOption = ({ empty, fromValue }, options) => option => isSome(option) ? pipe(option, fromValue(options)) : empty(options);
const keepType = ({ keep }, predicate) => keep(predicate);
const ignoreElements = ({ keep, }) => keep(alwaysFalse);
const mapTo = ({ map }, value) => pipe(value, returns, map);
const noneSatisfy = ({ everySatisfy }, predicate) => everySatisfy(compose(predicate, negate));
function startWith(m, ...values) {
    return container => pipe(values, m.fromArray(), concatWith(m, container));
}
const throws = (m, options) => (errorFactory) => pipe(() => {
    const cause = errorFactory();
    throw cause;
}, compute(m, options));
const zipWith = ({ zip }, snd) => fst => zip(fst, snd);

export { compute, concatMap, concatWith, contains, endWith, fromOption, ignoreElements, keepType, mapTo, noneSatisfy, startWith, throws, zipWith };

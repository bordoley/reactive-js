/// <reference types="./container.d.ts" />
import { compose, callWith, isEqualTo, pipe, alwaysFalse, returns, negate } from './functions.mjs';
import { isSome } from './option.mjs';
import { empty as empty$1 } from './readonlyArray.mjs';

const compute = (m, options) => compose(fromValue(m, options), m.map(callWith()));
const concatMap = ({ map, concatAll }, mapper, options) => compose(map(mapper), concatAll(options));
const concatWith = ({ concat }, snd) => first => concat(first, snd);
const empty = ({ fromArray }, options) => fromArray({ ...options })(empty$1);
const contains = ({ someSatisfy }, value, options = {}) => someSatisfy(isEqualTo(value, options));
function endWith(m, ...values) {
    return concatWith(m, m.fromArray()(values));
}
const fromOption = (m, options) => option => isSome(option)
    ? fromValue(m, options)(option)
    : empty(m, options);
const fromValue = ({ fromArray }, options) => (value) => pipe([value], fromArray({
    ...options,
}));
const keepType = ({ keep }, predicate) => keep(predicate);
const ignoreElements = ({ keep, }) => keep(alwaysFalse);
const mapTo = ({ map }, value) => pipe(value, returns, map);
const noneSatisfy = ({ everySatisfy }, predicate) => everySatisfy(compose(predicate, negate));
function startWith(m, ...values) {
    return container => pipe(values, m.fromArray(), concatWith(m, container));
}
const throws = (m, options) => errorFactory => pipe(() => {
    const cause = errorFactory();
    throw cause;
}, compute(m, options));
const zipWith = ({ zip }, snd) => fst => zip(fst, snd);

export { compute, concatMap, concatWith, contains, empty, endWith, fromOption, fromValue, ignoreElements, keepType, mapTo, noneSatisfy, startWith, throws, zipWith };

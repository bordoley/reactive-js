/// <reference types="./container.d.ts" />
import { empty as empty$1 } from './__internal__.readonlyArray.mjs';
import { compose, callWith, isEqualTo, newInstance, pipe, alwaysFalse, returns, negate } from './functions.mjs';
import { isSome } from './option.mjs';

const compute = (m, options) => compose(fromValue(m, options), m.map(callWith()));
const concatMap = ({ map, concatAll }, mapper, options) => compose(map(mapper), concatAll(options));
const concatWith = ({ concat }, snd) => first => concat(first, snd);
const empty = ({ fromArray }, options) => fromArray({ ...options })(empty$1);
const contains = ({ someSatisfy }, value, options = {}) => someSatisfy(isEqualTo(value, options));
const encodeUtf8 = (m) => obs => m.defer(() => {
    const textEncoder = newInstance(TextEncoder);
    return pipe(obs, m.map(s => textEncoder.encode(s)));
});
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

export { compute, concatMap, concatWith, contains, empty, encodeUtf8, endWith, fromOption, fromValue, ignoreElements, keepType, mapTo, noneSatisfy, startWith, throws, zipWith };

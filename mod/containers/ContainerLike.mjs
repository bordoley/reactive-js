/// <reference types="./ContainerLike.d.ts" />
import { compose, callWith, isEqualTo, newInstance, pipe, isSome, pipeLazy, alwaysFalse, returns, negate } from '../functions.mjs';

const compute = (m, options) => compose(x => [x], m.fromArray({
    ...options,
}), m.map(callWith()));
const concatMap = ({ map, concatAll }, mapper, options) => compose(map(mapper), concatAll(options));
const concatWith = ({ concat }, snd, ...tail) => first => concat(first, snd, ...tail);
const contains = ({ someSatisfy }, value, options = {}) => someSatisfy(isEqualTo(value, options));
const encodeUtf8 = (m) => obs => m.defer(() => {
    const textEncoder = newInstance(TextEncoder);
    return pipe(obs, m.map(s => textEncoder.encode(s)));
});
function endWith(m, ...values) {
    return concatWith(m, m.fromArray()(values));
}
const fromOption = ({ fromArray }, options) => option => pipe(isSome(option) ? [option] : [], fromArray({ ...options }));
const genMap = (m, mapper, options) => compose(m.map(x => pipe(pipeLazy(x, mapper), m.fromIterator(options))), m.concatAll(options));
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
const zipWith = ({ zip }, snd, ...tail) => fst => zip(fst, snd, ...tail);

export { compute, concatMap, concatWith, contains, encodeUtf8, endWith, fromOption, genMap, ignoreElements, keepType, mapTo, noneSatisfy, startWith, throws, zipWith };

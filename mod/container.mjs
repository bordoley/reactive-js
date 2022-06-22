/// <reference types="./container.d.ts" />
import { AbstractDisposable, createDisposableValue } from './disposable.mjs';
import { raise, compose, callWith, strictEquality, isEqualTo, ignore, pipe, defer, alwaysFalse, returns, negate } from './functions.mjs';
import { isSome } from './option.mjs';

class AbstractContainer {
    get type() {
        return raise();
    }
    get T() {
        return raise();
    }
}
class AbstractDisposableContainer extends AbstractDisposable {
    get type() {
        return raise();
    }
    get T() {
        return raise();
    }
}
const compute = (m, options) => compose(fromValue(m, options), m.map(callWith()));
const concatMap = ({ map, concatAll }, mapper, options) => compose(map(mapper), concatAll(options));
const concatWith = ({ concat }, snd) => first => concat(first, snd);
const empty = ({ fromArray }, options) => fromArray({ ...options })([]);
const contains = ({ someSatisfy }, value, options = {}) => {
    const { equality = strictEquality } = options;
    return someSatisfy(isEqualTo(value, equality));
};
const encodeUtf8 = (m) => obs => m.using(() => createDisposableValue(new TextEncoder(), ignore), v => pipe(obs, m.map(s => v.value.encode(s))));
function endWith(m, ...values) {
    return concatWith(m, m.fromArray()(values));
}
const fromOption = (m, options) => option => isSome(option)
    ? fromValue(m, options)(option)
    : empty(m, options);
const fromValue = ({ fromArray }, options) => (value) => pipe([value], fromArray({
    ...options,
}));
const genMap = (m, mapper, options) => compose(m.map(x => pipe(defer(x, mapper), m.fromIterator(options))), m.concatAll(options));
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

export { AbstractContainer, AbstractDisposableContainer, compute, concatMap, concatWith, contains, empty, encodeUtf8, endWith, fromOption, fromValue, genMap, ignoreElements, keepType, mapTo, noneSatisfy, startWith, throws, zipWith };

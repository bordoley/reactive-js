/// <reference types="./container.d.ts" />
import { AbstractDisposable, createDisposableValue } from './disposable.mjs';
import { raise, compose, callWith, length, min, max, isEqualTo, newInstance, ignore, pipe, pipeLazy, alwaysFalse, returns, negate } from './functions.mjs';
import { isSome } from './option.mjs';
import { empty as empty$1 } from './readonlyArray.mjs';

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
const createFromArray = (factory) => (options = {}) => values => {
    var _a, _b;
    const valuesLength = length(values);
    const startIndex = min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = max(min((_b = options.endIndex) !== null && _b !== void 0 ? _b : valuesLength, valuesLength), 0);
    return factory(values, startIndex, endIndex, options);
};
const empty = ({ fromArray }, options) => fromArray({ ...options })(empty$1);
const contains = ({ someSatisfy }, value, options = {}) => someSatisfy(isEqualTo(value, options));
const encodeUtf8 = (m) => obs => m.using(() => createDisposableValue(newInstance(TextEncoder), ignore), v => pipe(obs, m.map(s => v.value.encode(s))));
function endWith(m, ...values) {
    return concatWith(m, m.fromArray()(values));
}
const fromOption = (m, options) => option => isSome(option)
    ? fromValue(m, options)(option)
    : empty(m, options);
const fromValue = ({ fromArray }, options) => (value) => pipe([value], fromArray({
    ...options,
}));
const genMap = (m, mapper, options) => compose(m.map(x => pipe(pipeLazy(x, mapper), m.fromIterator(options))), m.concatAll(options));
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

export { AbstractContainer, AbstractDisposableContainer, compute, concatMap, concatWith, contains, createFromArray, empty, encodeUtf8, endWith, fromOption, fromValue, genMap, ignoreElements, keepType, mapTo, noneSatisfy, startWith, throws, zipWith };

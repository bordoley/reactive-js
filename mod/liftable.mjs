/// <reference types="./liftable.d.ts" />
import { AbstractContainer, AbstractDisposableContainer, empty } from './container.mjs';
import { bindTo, add, addTo, onComplete, dispose } from './disposable.mjs';
import { raise, strictEquality, pipe } from './functions.mjs';
import { none } from './option.mjs';

class AbstractLiftable extends AbstractContainer {
    get liftedStateType() {
        return raise();
    }
}
class AbstractDisposableLiftable extends AbstractDisposableContainer {
    get liftedStateType() {
        return raise();
    }
}
const covariant = 0;
const contraVariant = 1;
const lift = (m) => op => m.lift(op);
const createDistinctUntilChangedLiftedOperator = (m, DistinctUntilChangedLiftableState) => (options = {}) => {
    const { equality = strictEquality } = options;
    const operator = delegate => pipe(new DistinctUntilChangedLiftableState(delegate, equality), bindTo(delegate));
    return pipe(operator, lift(m));
};
const createKeepLiftedOperator = (m, KeepLiftableState) => (predicate) => {
    const operator = (delegate) => pipe(new KeepLiftableState(delegate, predicate), bindTo(delegate));
    return pipe(operator, lift(m));
};
const createMapLiftedOperator = (m, MapLiftableState) => (mapper) => pipe((delegate) => pipe(new MapLiftableState(delegate, mapper), bindTo(delegate)), lift(m));
const createOnNotifyLiftedOperator = (m, OnNotifyLiftableState) => (onNotify) => pipe((delegate) => pipe(new OnNotifyLiftableState(delegate, onNotify), bindTo(delegate)), lift(m));
const createPairwiseLiftedOperator = (m, PairwiseLiftableState) => () => pipe((delegate) => pipe(new PairwiseLiftableState(delegate), bindTo(delegate)), lift(m));
const createScanLiftedOperator = (m, ScanLiftableState) => (reducer, initialValue) => pipe((delegate) => pipe(new ScanLiftableState(delegate, reducer, initialValue()), bindTo(delegate)), lift(m));
const createSkipFirstLiftedOperator = (m, SkipLiftableState) => (options = {}) => {
    const { count = 1 } = options;
    const operator = delegate => pipe(new SkipLiftableState(delegate, count), bindTo(delegate));
    const lifted = pipe(operator, lift(m));
    return runnable => (count > 0 ? pipe(runnable, lifted) : runnable);
};
const createTakeFirstLiftedOperator = (m, TakeFirstLiftableState) => (options = {}) => {
    var _a;
    const { count = Math.max((_a = options.count) !== null && _a !== void 0 ? _a : 1, 0) } = options;
    const operator = delegate => pipe(new TakeFirstLiftableState(delegate, count), bindTo(delegate));
    const lifted = pipe(operator, lift(m));
    return source => (count > 0 ? pipe(source, lifted) : empty(m));
};
const createTakeWhileLiftedOperator = (m, TakeWhileLiftableState) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe((delegate) => {
        const lifted = pipe(new TakeWhileLiftableState(delegate, predicate, inclusive), m.variance === covariant ? add(delegate) : addTo(delegate));
        return lifted;
    }, lift(m));
};
const createThrowIfEmptyLiftedOperator = (m, ThrowIfEmptyLiftableState) => (factory) => pipe((delegate) => {
    const lifted = pipe(new ThrowIfEmptyLiftableState(delegate), m.variance === covariant ? add(delegate, true) : addTo(delegate));
    const { parent, child } = m.variance === covariant
        ? { parent: lifted, child: delegate }
        : { parent: delegate, child: lifted };
    pipe(child, onComplete(() => {
        let error = none;
        if (lifted.isEmpty) {
            let cause = none;
            try {
                cause = factory();
            }
            catch (e) {
                cause = e;
            }
            error = { cause };
        }
        pipe(parent, dispose(error));
    }));
    return lifted;
}, lift(m));

export { AbstractDisposableLiftable, AbstractLiftable, contraVariant, covariant, createDistinctUntilChangedLiftedOperator, createKeepLiftedOperator, createMapLiftedOperator, createOnNotifyLiftedOperator, createPairwiseLiftedOperator, createScanLiftedOperator, createSkipFirstLiftedOperator, createTakeFirstLiftedOperator, createTakeWhileLiftedOperator, createThrowIfEmptyLiftedOperator, lift };

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
const createDistinctUntilChangedLiftedOperator = (m, DistinctUntilChangedLiftableState) => (options = {}) => {
    const { equality = strictEquality } = options;
    const operator = delegate => pipe(new DistinctUntilChangedLiftableState(delegate, equality), bindTo(delegate));
    return m.lift(operator);
};
const createKeepLiftedOperator = (m, KeepLiftableState) => (predicate) => {
    const operator = (delegate) => pipe(new KeepLiftableState(delegate, predicate), bindTo(delegate));
    return m.lift(operator);
};
const createMapLiftedOperator = (m, MapLiftableState) => (mapper) => {
    const operator = delegate => pipe(new MapLiftableState(delegate, mapper), bindTo(delegate));
    return m.lift(operator);
};
const createOnNotifyLiftedOperator = (m, OnNotifyLiftableState) => (onNotify) => {
    const operator = delegate => pipe(new OnNotifyLiftableState(delegate, onNotify), bindTo(delegate));
    return m.lift(operator);
};
const createPairwiseLiftedOperator = (m, PairwiseLiftableState) => () => {
    const operator = delegate => pipe(new PairwiseLiftableState(delegate), bindTo(delegate));
    return m.lift(operator);
};
const createScanLiftedOperator = (m, ScanLiftableState) => (reducer, initialValue) => {
    const operator = delegate => pipe(new ScanLiftableState(delegate, reducer, initialValue()), bindTo(delegate));
    return m.lift(operator);
};
const createSkipFirstLiftedOperator = (m, SkipLiftableState) => (options = {}) => {
    const { count = 1 } = options;
    const operator = delegate => pipe(new SkipLiftableState(delegate, count), bindTo(delegate));
    return runnable => count > 0 ? pipe(runnable, m.lift(operator)) : runnable;
};
const createTakeFirstLiftedOperator = (m, TakeFirstLiftableState) => (options = {}) => {
    var _a;
    const { count = Math.max((_a = options.count) !== null && _a !== void 0 ? _a : 1, 0) } = options;
    const operator = delegate => pipe(new TakeFirstLiftableState(delegate, count), bindTo(delegate));
    return source => (count > 0 ? pipe(source, m.lift(operator)) : empty(m));
};
const createTakeWhileLiftedOperator = (m, TakeWhileLiftableState) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    const operator = delegate => {
        const lifted = pipe(new TakeWhileLiftableState(delegate, predicate, inclusive), m.variance === "covariant" ? add(delegate) : addTo(delegate));
        return lifted;
    };
    return m.lift(operator);
};
const createThrowIfEmptyLiftedOperator = (m, ThrowIfEmptyLiftableState) => (factory) => {
    const operator = delegate => {
        const lifted = pipe(new ThrowIfEmptyLiftableState(delegate), m.variance === "covariant" ? add(delegate, true) : addTo(delegate));
        const { parent, child } = m.variance === "covariant"
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
    };
    return m.lift(operator);
};

export { AbstractDisposableLiftable, AbstractLiftable, createDistinctUntilChangedLiftedOperator, createKeepLiftedOperator, createMapLiftedOperator, createOnNotifyLiftedOperator, createPairwiseLiftedOperator, createScanLiftedOperator, createSkipFirstLiftedOperator, createTakeFirstLiftedOperator, createTakeWhileLiftedOperator, createThrowIfEmptyLiftedOperator };

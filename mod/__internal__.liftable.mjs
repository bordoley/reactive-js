/// <reference types="./__internal__.liftable.d.ts" />
import { empty } from './container.mjs';
import { bindTo, add, addTo, onComplete, dispose } from './disposable.mjs';
import { strictEquality, pipe, newInstanceWith, max } from './functions.mjs';
import { none } from './option.mjs';

const interactive = 0;
const reactive = 1;
const createDistinctUntilChangedOperator = (m, DistinctUntilChangedLiftableState) => (options = {}) => {
    const { equality = strictEquality } = options;
    const operator = delegate => pipe(DistinctUntilChangedLiftableState, newInstanceWith(delegate, equality), bindTo(delegate));
    return pipe(operator, lift(m));
};
const createKeepOperator = (m, KeepLiftableState) => (predicate) => {
    const operator = (delegate) => pipe(KeepLiftableState, newInstanceWith(delegate, predicate), bindTo(delegate));
    return pipe(operator, lift(m));
};
const createMapOperator = (m, MapLiftableState) => (mapper) => pipe((delegate) => pipe(MapLiftableState, newInstanceWith(delegate, mapper), bindTo(delegate)), lift(m));
const createOnNotifyOperator = (m, OnNotifyLiftableState) => (onNotify) => pipe((delegate) => pipe(OnNotifyLiftableState, newInstanceWith(delegate, onNotify), bindTo(delegate)), lift(m));
const createPairwiseOperator = (m, PairwiseLiftableState) => () => pipe((delegate) => pipe(PairwiseLiftableState, newInstanceWith(delegate), bindTo(delegate)), lift(m));
const createScanOperator = (m, ScanLiftableState) => (reducer, initialValue) => pipe((delegate) => pipe(ScanLiftableState, newInstanceWith(delegate, reducer, initialValue()), bindTo(delegate)), lift(m));
const createSkipFirstOperator = (m, SkipLiftableState) => (options = {}) => {
    const { count = 1 } = options;
    const operator = delegate => pipe(SkipLiftableState, newInstanceWith(delegate, count), bindTo(delegate));
    const lifted = pipe(operator, lift(m));
    return runnable => (count > 0 ? pipe(runnable, lifted) : runnable);
};
const createTakeFirstOperator = (m, TakeFirstLiftableState) => (options = {}) => {
    var _a;
    const { count = max((_a = options.count) !== null && _a !== void 0 ? _a : 1, 0) } = options;
    const operator = delegate => pipe(TakeFirstLiftableState, newInstanceWith(delegate, count), bindTo(delegate));
    const lifted = pipe(operator, lift(m));
    return source => (count > 0 ? pipe(source, lifted) : empty(m));
};
const createTakeWhileOperator = (m, TakeWhileLiftableState) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe((delegate) => {
        const lifted = pipe(TakeWhileLiftableState, newInstanceWith(delegate, predicate, inclusive), bindTo(delegate));
        return lifted;
    }, lift(m));
};
const createThrowIfEmptyOperator = (m, ThrowIfEmptyLiftableState) => (factory) => pipe((delegate) => {
    const lifted = pipe(ThrowIfEmptyLiftableState, newInstanceWith(delegate), m.variance === interactive ? add(delegate, true) : addTo(delegate));
    const { parent, child } = m.variance === interactive
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
const lift = (m) => op => m.lift(op);

export { createDistinctUntilChangedOperator, createKeepOperator, createMapOperator, createOnNotifyOperator, createPairwiseOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeWhileOperator, createThrowIfEmptyOperator, interactive, lift, reactive };

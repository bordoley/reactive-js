/// <reference types="./liftable.d.ts" />
import { AbstractContainer, AbstractDisposableContainer, empty } from './container.mjs';
import { bindDisposables, addDisposableDisposeParentOnChildError, addDisposable, addTeardown } from './disposable.mjs';
import { raise, strictEquality, pipe } from './functions.mjs';
import { isNone, none } from './option.mjs';

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
    const operator = (delegate) => {
        const sink = new DistinctUntilChangedLiftableState(delegate, equality);
        bindDisposables(sink, delegate);
        return sink;
    };
    return m.lift(operator);
};
const createKeepLiftedOperator = (m, KeepLiftableState) => (predicate) => {
    const operator = (delegate) => {
        const sink = new KeepLiftableState(delegate, predicate);
        bindDisposables(sink, delegate);
        return sink;
    };
    return m.lift(operator);
};
const createMapLiftedOperator = (m, MapLiftableState) => (mapper) => {
    const operator = (delegate) => {
        const sink = new MapLiftableState(delegate, mapper);
        bindDisposables(sink, delegate);
        return sink;
    };
    return m.lift(operator);
};
const createOnNotifyLiftedOperator = (m, OnNotifyLiftableState) => (onNotify) => {
    const operator = (delegate) => {
        const sink = new OnNotifyLiftableState(delegate, onNotify);
        bindDisposables(sink, delegate);
        return sink;
    };
    return m.lift(operator);
};
const createPairwiseLiftdOperator = (m, PairwiseLiftableState) => () => {
    const operator = (delegate) => {
        const sink = new PairwiseLiftableState(delegate);
        bindDisposables(sink, delegate);
        return sink;
    };
    return m.lift(operator);
};
const createScanLiftedOperator = (m, ScanLiftableState) => (reducer, initialValue) => {
    const operator = (delegate) => {
        const sink = new ScanLiftableState(delegate, reducer, initialValue());
        bindDisposables(sink, delegate);
        return sink;
    };
    return m.lift(operator);
};
const createSkipFirstLiftedOperator = (m, SkipLiftableState) => (options = {}) => {
    const { count = 1 } = options;
    const operator = (delegate) => {
        const sink = new SkipLiftableState(delegate, count);
        bindDisposables(sink, delegate);
        return sink;
    };
    return runnable => count > 0 ? pipe(runnable, m.lift(operator)) : runnable;
};
const createTakeFirstLiftdOperator = (m, TakeFirstLiftableState) => (options = {}) => {
    const { count = 1 } = options;
    const operator = (delegate) => {
        const sink = new TakeFirstLiftableState(delegate, count);
        bindDisposables(sink, delegate);
        return sink;
    };
    return source => (count > 0 ? pipe(source, m.lift(operator)) : empty(m));
};
const createTakeWhileLiftedOperator = (m, TakeWhileLiftableState) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    const operator = (delegate) => {
        const sink = new TakeWhileLiftableState(delegate, predicate, inclusive);
        addDisposableDisposeParentOnChildError(sink, delegate);
        return sink;
    };
    return m.lift(operator);
};
const createThrowIfEmptyLiftedOperator = (m, ThrowIfEmptyLiftableState) => (factory) => {
    const operator = (delegate) => {
        const observer = new ThrowIfEmptyLiftableState(delegate);
        addDisposable(delegate, observer);
        addTeardown(observer, error => {
            if (isNone(error) && observer.isEmpty) {
                let cause = none;
                try {
                    cause = factory();
                }
                catch (e) {
                    cause = e;
                }
                error = { cause };
            }
            delegate.dispose(error);
        });
        return observer;
    };
    return m.lift(operator);
};

export { AbstractDisposableLiftable, AbstractLiftable, createDistinctUntilChangedLiftedOperator, createKeepLiftedOperator, createMapLiftedOperator, createOnNotifyLiftedOperator, createPairwiseLiftdOperator, createScanLiftedOperator, createSkipFirstLiftedOperator, createTakeFirstLiftdOperator, createTakeWhileLiftedOperator, createThrowIfEmptyLiftedOperator };

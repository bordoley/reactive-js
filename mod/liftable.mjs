/// <reference types="./liftable.d.ts" />
import { AbstractContainer, AbstractDisposableContainer, empty } from './container.mjs';
import { bindDisposables, addDisposableDisposeParentOnChildError, addDisposable, addTeardown, dispose } from './disposable.mjs';
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
        const lifted = new DistinctUntilChangedLiftableState(delegate, equality);
        bindDisposables(lifted, delegate);
        return lifted;
    };
    return m.lift(operator);
};
const createKeepLiftedOperator = (m, KeepLiftableState) => (predicate) => {
    const operator = (delegate) => {
        const lifted = new KeepLiftableState(delegate, predicate);
        bindDisposables(lifted, delegate);
        return lifted;
    };
    return m.lift(operator);
};
const createMapLiftedOperator = (m, MapLiftableState) => (mapper) => {
    const operator = delegate => {
        const lifted = new MapLiftableState(delegate, mapper);
        bindDisposables(lifted, delegate);
        return lifted;
    };
    return m.lift(operator);
};
const createOnNotifyLiftedOperator = (m, OnNotifyLiftableState) => (onNotify) => {
    const operator = (delegate) => {
        const lifted = new OnNotifyLiftableState(delegate, onNotify);
        bindDisposables(lifted, delegate);
        return lifted;
    };
    return m.lift(operator);
};
const createPairwiseLiftedOperator = (m, PairwiseLiftableState) => () => {
    const operator = delegate => {
        const lifted = new PairwiseLiftableState(delegate);
        bindDisposables(lifted, delegate);
        return lifted;
    };
    return m.lift(operator);
};
const createScanLiftedOperator = (m, ScanLiftableState) => (reducer, initialValue) => {
    const operator = delegate => {
        const lifted = new ScanLiftableState(delegate, reducer, initialValue());
        bindDisposables(lifted, delegate);
        return lifted;
    };
    return m.lift(operator);
};
const createSkipFirstLiftedOperator = (m, SkipLiftableState) => (options = {}) => {
    const { count = 1 } = options;
    const operator = (delegate) => {
        const lifted = new SkipLiftableState(delegate, count);
        bindDisposables(lifted, delegate);
        return lifted;
    };
    return runnable => count > 0 ? pipe(runnable, m.lift(operator)) : runnable;
};
const createTakeFirstLiftdOperator = (m, TakeFirstLiftableState) => (options = {}) => {
    const { count = 1 } = options;
    const operator = (delegate) => {
        const lifted = new TakeFirstLiftableState(delegate, count);
        bindDisposables(lifted, delegate);
        return lifted;
    };
    return source => (count > 0 ? pipe(source, m.lift(operator)) : empty(m));
};
const createTakeWhileLiftedOperator = (m, TakeWhileLiftableState) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    const operator = (delegate) => {
        const lifted = new TakeWhileLiftableState(delegate, predicate, inclusive);
        const { parent, child } = m.variance === "covariant"
            ? { parent: lifted, child: delegate }
            : { parent: delegate, child: lifted };
        addDisposableDisposeParentOnChildError(parent, child);
        return lifted;
    };
    return m.lift(operator);
};
const createThrowIfEmptyLiftedOperator = (m, ThrowIfEmptyLiftableState) => (factory) => {
    const operator = (delegate) => {
        const lifted = new ThrowIfEmptyLiftableState(delegate);
        const { parent, child } = m.variance === "covariant"
            ? { parent: lifted, child: delegate }
            : { parent: delegate, child: lifted };
        addDisposable(parent, child);
        addTeardown(child, error => {
            if (isNone(error) && lifted.isEmpty) {
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
        });
        return lifted;
    };
    return m.lift(operator);
};

export { AbstractDisposableLiftable, AbstractLiftable, createDistinctUntilChangedLiftedOperator, createKeepLiftedOperator, createMapLiftedOperator, createOnNotifyLiftedOperator, createPairwiseLiftedOperator, createScanLiftedOperator, createSkipFirstLiftedOperator, createTakeFirstLiftdOperator, createTakeWhileLiftedOperator, createThrowIfEmptyLiftedOperator };

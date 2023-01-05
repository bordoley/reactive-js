/// <reference types="./AsyncEnumerableLike.d.ts" />
import { mix, props, createInstanceFactory, include, init } from '../__internal__/mixins.mjs';
import { getDelay } from '../__internal__/scheduling/SchedulerLike.options.mjs';
import { toObservable as toObservable$1 } from '../containers/ReadonlyArrayLike.mjs';
import ReadonlyArrayLike__toAsyncEnumerable from '../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toAsyncEnumerable.mjs';
import StatefulContainerLike__keep from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep.mjs';
import StatefulContainerLike__map from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map.mjs';
import StatefulContainerLike__scan from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan.mjs';
import StatefulContainerLike__takeWhile from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile.mjs';
import { interactive } from '../containers/__internal__/containers.internal.mjs';
import { returns, pipe, pipeUnsafe, newInstance, none, unsafeCast, partial } from '../functions.mjs';
import { InteractiveContainerLike_interact, SourceLike_move } from '../ix.mjs';
import { hasCurrent, getCurrent } from './EnumeratorLike.mjs';
import { move } from './SourceLike.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../rx.mjs';
import { getObserverCount, getReplay } from '../rx/MulticastObservableLike.mjs';
import { create, map as map$1, takeWhile as takeWhile$1, scanAsync as scanAsync$1, scan as scan$1, forEach, keep as keep$1, multicast } from '../rx/ObservableLike.mjs';
import { sinkInto } from '../rx/ReactiveContainerLike.mjs';
import { DispatcherLike_dispatch, DispatcherLike_scheduler } from '../scheduling.mjs';
import { dispatch, getScheduler } from '../scheduling/DispatcherLike.mjs';
import { StreamableLike_stream } from '../streaming.mjs';
import { stream } from '../streaming/StreamableLike.mjs';
import { addTo, add } from '../util/DisposableLike.mjs';
import DisposableLike__delegatingMixin from '../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import { enumerate } from './EnumerableLike.mjs';
import AsyncEnumerable__toObservable from './__internal__/AsyncEnumerableLike/AsyncEnumerable.toObservable.mjs';
import AsyncEnumerableLike__create from './__internal__/AsyncEnumerableLike/AsyncEnumerableLike.create.mjs';
import AsyncEnumerableLike__toReadonlyArray from './__internal__/AsyncEnumerableLike/AsyncEnumerableLike.toReadonlyArray.mjs';

const fromArray = ReadonlyArrayLike__toAsyncEnumerable;
const fromArrayT = { fromArray };
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const fromEnumerable = 
/*@__PURE__*/ (() => returns((enumerable) => AsyncEnumerableLike__create(observable => create(observer => {
    const enumerator = pipe(enumerable, enumerate(), addTo(observer));
    pipe(observable, map$1(_ => move(enumerator)), takeWhile$1(hasCurrent), map$1(getCurrent), sinkInto(observer));
}))))();
class LiftedAsyncEnumerable {
    constructor(src, operators) {
        this.src = src;
        this.operators = operators;
    }
    [InteractiveContainerLike_interact](scheduler) {
        return pipe(this, stream(scheduler));
    }
    [StreamableLike_stream](scheduler, options) {
        const src = pipe(this.src, stream(scheduler, options));
        return pipeUnsafe(src, ...this.operators);
    }
}
/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
const generate = /*@__PURE__*/ (() => {
    const generateScanner = (generator) => (acc, _) => generator(acc);
    const asyncGeneratorScanner = (generator, options) => {
        const delay = getDelay(options);
        const fromArrayWithDelay = delay > 0 ? toObservable$1({ delay }) : toObservable$1();
        return (acc, _) => pipe(acc, generator, x => [x], fromArrayWithDelay);
    };
    return (generator, initialValue, options) => {
        const delay = getDelay(options);
        return AsyncEnumerableLike__create(delay > 0
            ? scanAsync$1(asyncGeneratorScanner(generator, options), initialValue)
            : scan$1(generateScanner(generator), initialValue));
    };
})();
const generateT = {
    generate,
};
const lift = (operator) => enumerable => {
    const src = enumerable instanceof LiftedAsyncEnumerable ? enumerable.src : enumerable;
    const allFunctions = enumerable instanceof LiftedAsyncEnumerable
        ? [...enumerable.operators, operator]
        : [operator];
    return newInstance(LiftedAsyncEnumerable, src, allFunctions);
};
const liftT = {
    lift,
    variance: interactive,
};
const delegatingAsyncEnumerator = /*@__PURE__*/ (() => {
    return pipe(mix(function DelegatingAsyncEnumerator(instance, delegate) {
        instance.delegate = delegate;
        return instance;
    }, props({
        delegate: none,
    }), {
        [DispatcherLike_dispatch](_) {
            pipe(this.delegate, dispatch(none));
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return getScheduler(this.delegate);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [SourceLike_move]() {
            pipe(this, dispatch(none));
        },
    }), returns);
})();
const keep = /*@__PURE__*/ (() => {
    const createKeepAsyncEnumerator = createInstanceFactory(mix(include(DisposableLike__delegatingMixin, delegatingAsyncEnumerator()), function KeepAsyncEnumerator(instance, delegate, predicate) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);
        instance.obs = pipe(delegate, forEach(x => {
            if (!predicate(x)) {
                pipe(delegate, dispatch(none));
            }
        }), keep$1(predicate), multicast(getScheduler(delegate)));
        return instance;
    }, props({
        obs: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return getObserverCount(this.obs);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return getReplay(this.obs);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.obs, sinkInto(observer));
        },
    }));
    return pipe(createKeepAsyncEnumerator, StatefulContainerLike__keep(liftT));
})();
const keepT = {
    keep,
};
const map = /*@__PURE__*/ (() => {
    const createMapAsyncEnumerator = createInstanceFactory(mix(include(DisposableLike__delegatingMixin, delegatingAsyncEnumerator()), function MapAsyncEnumerator(instance, delegate, mapper) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);
        instance.delegate = delegate;
        instance.op = map$1(mapper);
        return instance;
    }, props({
        op: none,
        delegate: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return getObserverCount(this.delegate);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return getReplay(this.delegate);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.delegate, this.op, sinkInto(observer));
        },
    }));
    return pipe(createMapAsyncEnumerator, StatefulContainerLike__map(liftT));
})();
const mapT = {
    map,
};
const scan = /*@__PURE__*/ (() => {
    const createScanAsyncEnumerator = createInstanceFactory(mix(include(DisposableLike__delegatingMixin, delegatingAsyncEnumerator()), function ScanAsyncEnumerator(instance, delegate, reducer, acc) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);
        instance.delegate = delegate;
        instance.op = scan$1(reducer, acc);
        return instance;
    }, props({
        op: none,
        delegate: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return getObserverCount(this.delegate);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return getReplay(this.delegate);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.delegate, this.op, sinkInto(observer));
        },
    }));
    return pipe(createScanAsyncEnumerator, StatefulContainerLike__scan(liftT));
})();
const scanT = {
    scan,
};
const scanAsync = /*@__PURE__*/ (() => {
    const creatScanAsyncAsyncEnumerator = createInstanceFactory(mix(include(DisposableLike__delegatingMixin, delegatingAsyncEnumerator()), function ScanAsyncAsyncEnumerator(instance, delegate, reducer, initialValue) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);
        instance.obs = pipe(delegate, scanAsync$1(reducer, initialValue), multicast(getScheduler(delegate)));
        return instance;
    }, props({
        obs: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return getObserverCount(this.obs);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return getReplay(this.obs);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.obs, sinkInto(observer));
        },
    }));
    return (reducer, initialValue) => pipe(creatScanAsyncAsyncEnumerator, partial(reducer, initialValue), lift);
})();
const scanAsyncT = {
    scanAsync,
};
const takeWhile = 
/*@__PURE__*/ (() => {
    const createTakeWhileAsyncEnumerator = createInstanceFactory(mix(include(DisposableLike__delegatingMixin, delegatingAsyncEnumerator()), function TakeWhileAsyncEnumerator(instance, delegate, predicate, inclusive) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);
        instance.obs = pipe(delegate, takeWhile$1(predicate, { inclusive }), multicast(getScheduler(delegate)), add(instance));
        return instance;
    }, props({
        obs: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return getObserverCount(this.obs);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return getReplay(this.obs);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.obs, sinkInto(observer));
        },
    }));
    return pipe(createTakeWhileAsyncEnumerator, StatefulContainerLike__takeWhile(liftT));
})();
const takeWhileT = {
    takeWhile,
};
const toObservable = AsyncEnumerable__toObservable;
const toObservableT = {
    toObservable,
};
const toReadonlyArray = AsyncEnumerableLike__toReadonlyArray;
const toReadonlyArrayT = {
    toReadonlyArray,
};

export { fromArray, fromArrayT, fromEnumerable, generate, generateT, keep, keepT, map, mapT, scan, scanAsync, scanAsyncT, scanT, takeWhile, takeWhileT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT };

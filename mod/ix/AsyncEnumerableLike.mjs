/// <reference types="./AsyncEnumerableLike.d.ts" />
import { getDelay } from '../__internal__/__internal__optionParsing.mjs';
import { interactive, createKeepOperator, createMapOperator, createScanOperator, createTakeWhileOperator } from '../__internal__/containers/__internal__StatefulContainerLike.mjs';
import { disposableMixin, delegatingDisposableMixin } from '../__internal__/util/__internal__Disposables.mjs';
import { createInstanceFactory, clazz, __extends, init } from '../__internal__/util/__internal__Objects.mjs';
import { concatMap } from '../containers/ContainerLike.mjs';
import { toObservable as toObservable$1 } from '../containers/ReadonlyArrayLike.mjs';
import { unsafeCast, pipe, none, getLength, compose, increment, returns, pipeUnsafe, newInstance, partial } from '../functions.mjs';
import { InteractiveContainerLike_interact } from '../ix.mjs';
import { createSubject, ObservableLike_isEnumerable, ObservableLike_isRunnable, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto, createRunnableObservable } from '../rx.mjs';
import { getObserverCount, getReplay } from '../rx/MulticastObservableLike.mjs';
import { multicast, scan as scan$1, mapT as mapT$1, concatAllT, takeFirst, forEach, keep as keep$1, map as map$1, scanAsync as scanAsync$1, takeWhile as takeWhile$1, onSubscribe, toReadonlyArray as toReadonlyArray$1 } from '../rx/ObservableLike.mjs';
import { sinkInto } from '../rx/ReactiveContainerLike.mjs';
import { publish } from '../rx/SubjectLike.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../scheduling.mjs';
import { dispatch, getScheduler } from '../scheduling/DispatcherLike.mjs';
import { getScheduler as getScheduler$1 } from '../scheduling/ObserverLike.mjs';
import { StreamableLike_stream } from '../streaming.mjs';
import { stream } from '../streaming/StreamableLike.mjs';
import { SourceLike_move } from '../util.mjs';
import { add, addTo } from '../util/DisposableLike.mjs';

const createAsyncEnumerable = /*@__PURE__*/ (() => {
    return createInstanceFactory(clazz(function AsyncEnumerable(instance, stream) {
        unsafeCast(instance);
        instance[StreamableLike_stream] = stream;
        return instance;
    }, {}, {
        [StreamableLike_stream](scheduler, options) {
            return this[StreamableLike_stream](scheduler, options);
        },
        [InteractiveContainerLike_interact](ctx) {
            return pipe(this, stream(ctx));
        },
    }));
})();
const createLiftedAsyncEnumerator = (() => {
    return createInstanceFactory(clazz(__extends(disposableMixin), function LiftedAsyncEnumerator(instance, op, scheduler, replay) {
        init(disposableMixin, instance);
        unsafeCast(instance);
        instance.op = op;
        instance[DispatcherLike_scheduler] = scheduler;
        const subject = createSubject();
        const observable = pipe(subject, op, multicast(scheduler, { replay }));
        instance.subject = subject;
        instance.observable = observable;
        return pipe(instance, add(subject), addTo(observable));
    }, {
        observable: none,
        op: none,
        scheduler: none,
        subject: none,
    }, {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return getObserverCount(this.observable);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return getReplay(this.observable);
        },
        [DispatcherLike_dispatch](req) {
            unsafeCast(this);
            pipe(this.subject, publish(req));
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.observable, sinkInto(observer));
        },
        [SourceLike_move]() {
            pipe(this, dispatch(none));
        },
    }));
})();
const createLiftedAsyncEnumerable = (...ops) => {
    const op = getLength(ops) > 1 ? compose(...ops) : ops[0];
    return createAsyncEnumerable((scheduler, options) => {
        var _a;
        const replay = (_a = options === null || options === void 0 ? void 0 : options.replay) !== null && _a !== void 0 ? _a : 0;
        return createLiftedAsyncEnumerator(op, scheduler, replay);
    });
};
const fromArrayInternal = (values, start, count, options) => {
    const delay = getDelay(options);
    const fromArrayWithDelay = delay > 0 ? toObservable$1({ delay }) : toObservable$1();
    return createLiftedAsyncEnumerable(scan$1(increment, returns(start - 1)), concatMap({ ...mapT$1, ...concatAllT }, (i) => pipe([values[i]], fromArrayWithDelay)), takeFirst({ count }));
};
const fromArray = (_) => values => fromArrayInternal(values, 0, values.length);
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
    return pipe(clazz(function DelegatingAsyncEnumerator(instance, delegate) {
        unsafeCast(instance);
        instance.delegate = delegate;
        return instance;
    }, {
        delegate: none,
    }, {
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
    const createKeepAsyncEnumerator = createInstanceFactory(clazz(__extends(delegatingDisposableMixin, delegatingAsyncEnumerator()), function KeepAsyncEnumerator(instance, delegate, predicate) {
        init(delegatingDisposableMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);
        unsafeCast(instance);
        instance.obs = pipe(delegate, forEach(x => {
            if (!predicate(x)) {
                pipe(delegate, dispatch(none));
            }
        }), keep$1(predicate), multicast(getScheduler(delegate)));
        return instance;
    }, {
        obs: none,
    }, {
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
    return pipe(createKeepAsyncEnumerator, createKeepOperator(liftT));
})();
const keepT = {
    keep,
};
const map = /*@__PURE__*/ (() => {
    const createMapAsyncEnumerator = createInstanceFactory(clazz(__extends(delegatingDisposableMixin, delegatingAsyncEnumerator()), function MapAsyncEnumerator(instance, delegate, mapper) {
        init(delegatingDisposableMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);
        unsafeCast(instance);
        instance.delegate = delegate;
        instance.op = map$1(mapper);
        return instance;
    }, {
        op: none,
        delegate: none,
    }, {
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
    return pipe(createMapAsyncEnumerator, createMapOperator(liftT));
})();
const mapT = {
    map,
};
const scan = /*@__PURE__*/ (() => {
    const createScanAsyncEnumerator = createInstanceFactory(clazz(__extends(delegatingDisposableMixin, delegatingAsyncEnumerator()), function ScanAsyncEnumerator(instance, delegate, reducer, acc) {
        init(delegatingDisposableMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);
        unsafeCast(instance);
        instance.delegate = delegate;
        instance.op = scan$1(reducer, acc);
        return instance;
    }, {
        op: none,
        delegate: none,
    }, {
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
    return pipe(createScanAsyncEnumerator, createScanOperator(liftT));
})();
const scanT = {
    scan,
};
const scanAsync = /*@__PURE__*/ (() => {
    const creatScanAsyncAsyncEnumerator = createInstanceFactory(clazz(__extends(delegatingDisposableMixin, delegatingAsyncEnumerator()), function ScanAsyncAsyncEnumerator(instance, delegate, reducer, initialValue) {
        init(delegatingDisposableMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);
        unsafeCast(instance);
        instance.obs = pipe(delegate, scanAsync$1(reducer, initialValue), multicast(getScheduler(delegate)));
        return instance;
    }, {
        obs: none,
    }, {
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
    const createTakeWhileAsyncEnumerator = createInstanceFactory(clazz(__extends(delegatingDisposableMixin, delegatingAsyncEnumerator()), function TakeWhileAsyncEnumerator(instance, delegate, predicate, inclusive) {
        init(delegatingDisposableMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);
        unsafeCast(instance);
        instance.obs = pipe(delegate, takeWhile$1(predicate, { inclusive }), multicast(getScheduler(delegate)), add(instance));
        return instance;
    }, {
        obs: none,
    }, {
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
    return pipe(createTakeWhileAsyncEnumerator, createTakeWhileOperator(liftT));
})();
const takeWhileT = {
    takeWhile,
};
const toObservable = () => enumerable => createRunnableObservable(observer => {
    const enumerator = pipe(enumerable, stream(getScheduler$1(observer)), addTo(observer));
    pipe(enumerator, forEach(_ => {
        pipe(enumerator, dispatch(none));
    }), onSubscribe(() => {
        pipe(enumerator, dispatch(none));
    }), sinkInto(observer));
});
const toObservableT = {
    toObservable,
};
const toReadonlyArray = () => (asyncEnumerable) => pipe(asyncEnumerable, toObservable(), toReadonlyArray$1());
const toReadonlyArrayT = {
    toReadonlyArray,
};

export { fromArray, keep, keepT, map, mapT, scan, scanAsync, scanAsyncT, scanT, takeWhile, takeWhileT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT };

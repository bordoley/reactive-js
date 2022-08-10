/// <reference types="./AsyncEnumerableLike.d.ts" />
import { getDelay } from '../__internal__/__internal__optionParsing.mjs';
import { interactive, createKeepOperator } from '../__internal__/containers/__internal__StatefulContainerLike.mjs';
import { disposableMixin, delegatingDisposableMixin } from '../__internal__/util/__internal__Disposables.mjs';
import { createInstanceFactory, clazz, __extends, init } from '../__internal__/util/__internal__Objects.mjs';
import { concatMap } from '../containers/ContainerLike.mjs';
import { toObservable as toObservable$1 } from '../containers/ReadonlyArrayLike.mjs';
import { unsafeCast, pipe, none, getLength, compose, increment, returns, pipeUnsafe, newInstance } from '../functions.mjs';
import { InteractiveContainerLike_interact } from '../ix.mjs';
import { createSubject, ObservableLike_isEnumerable, ObservableLike_isRunnable, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto, createRunnableObservable } from '../rx.mjs';
import { getObserverCount, getReplay } from '../rx/MulticastObservableLike.mjs';
import { multicast, scan, mapT, concatAllT, takeFirst, forEach, keep as keep$1, onSubscribe, toReadonlyArray as toReadonlyArray$1 } from '../rx/ObservableLike.mjs';
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
    return createLiftedAsyncEnumerable(scan(increment, returns(start - 1)), concatMap({ ...mapT, ...concatAllT }, (i) => pipe([values[i]], fromArrayWithDelay)), takeFirst({ count }));
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
    }, {}, {
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
        instance.delegate = delegate;
        instance.obs = pipe(delegate, forEach(x => {
            if (!predicate(x)) {
                pipe(instance.delegate, dispatch(none));
            }
        }), keep$1(predicate), multicast(getScheduler(delegate)));
        return instance;
    }, {}, {
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

export { fromArray, keep, keepT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT };

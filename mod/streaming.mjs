/// <reference types="./streaming.d.ts" />
import { multicast, scan, mergeT, distinctUntilChanged } from './__internal__/rx/__internal__ObservableLike.mjs';
import { delegatingDisposableMixin } from './__internal__/util/__internal__Disposables.mjs';
import { clazz, __extends, init, createInstanceFactory } from './__internal__/util/__internal__Objects.mjs';
import { concatWith } from './containers/ContainerLike.mjs';
import { toObservable } from './containers/ReadonlyArrayLike.mjs';
import { pipe, unsafeCast, none, returns, newInstance, getLength, composeUnsafe, updateReducer } from './functions.mjs';
import { createSubject, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto, createObservable } from './rx.mjs';
import { getObserverCount, getReplay } from './rx/MulticastObservableLike.mjs';
import { sinkInto } from './rx/ReactiveContainerLike.mjs';
import { publish } from './rx/SubjectLike.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from './scheduling.mjs';
import { dispatch } from './scheduling/DispatcherLike.mjs';
import { SourceLike_move } from './util.mjs';
import { add } from './util/DisposableLike.mjs';

/** @ignore */
const StreamableLike_stream = Symbol("StreamableLike_stream");
const streamMixin = (() => {
    return pipe(clazz(__extends(delegatingDisposableMixin), function Stream(instance, op, scheduler, replay) {
        const subject = createSubject({ replay });
        init(delegatingDisposableMixin, instance, subject);
        unsafeCast(instance);
        instance[DispatcherLike_scheduler] = scheduler;
        instance.subject = subject;
        instance.observable = pipe(subject, op, multicast(scheduler, { replay }), add(instance));
        return instance;
    }, {
        subject: none,
        observable: none,
        [DispatcherLike_scheduler]: none,
    }, {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return getObserverCount(this.observable);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return getReplay(this.observable);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [DispatcherLike_dispatch](req) {
            unsafeCast(this);
            pipe(this.subject, publish(req));
        },
        [ReactiveContainerLike_sinkInto](observer) {
            unsafeCast(this);
            pipe(this.observable, sinkInto(observer));
        },
    }), returns);
})();
const createStream = /*@__PURE__*/ (() => {
    const createStreamInternal = createInstanceFactory(streamMixin());
    return (op, scheduler, options) => {
        const { replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createStreamInternal(op, scheduler, replay);
    };
})();
const createAsyncEnumerator = /*@__PURE__*/ (() => {
    const createAsyncEnumeratorInternal = (() => {
        const typedStreamMixin = streamMixin();
        return createInstanceFactory(clazz(__extends(typedStreamMixin), function AsyncEnumerator(instance, op, scheduler, replay) {
            init(typedStreamMixin, instance, op, scheduler, replay);
            return instance;
        }, {}, {
            [SourceLike_move]() {
                pipe(this, dispatch(none));
            },
        }));
    })();
    return (op, scheduler, options) => {
        const { replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createAsyncEnumeratorInternal(op, scheduler, replay);
    };
})();
const createStreamble = /*@__PURE__*/ (() => {
    class CreateStreamable {
        constructor(stream) {
            this.stream = stream;
        }
        [StreamableLike_stream](scheduler, options) {
            return this.stream(scheduler, options);
        }
    }
    return (stream) => newInstance(CreateStreamable, stream);
})();
const createLiftedFlowable = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return createStreamble((scheduler, options) => {
        const stream = createStream(op, scheduler, options);
        return pipe(stream, dispatch("pause"));
    });
};
const createLiftedStreamable = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return createStreamble((scheduler, options) => createStream(op, scheduler, options));
};
/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createActionReducer = (reducer, initialState, options) => createLiftedStreamable(obs => createObservable(observer => {
    const acc = initialState();
    pipe(obs, scan(reducer, returns(acc)), concatWith(mergeT, pipe([acc], toObservable())), distinctUntilChanged(options), sinkInto(observer));
}));
/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createStateStore = (initialState, options) => createActionReducer(updateReducer, initialState, options);

export { StreamableLike_stream, createActionReducer, createAsyncEnumerator, createLiftedFlowable, createLiftedStreamable, createStateStore, createStream, createStreamble };

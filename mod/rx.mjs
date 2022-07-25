/// <reference types="./rx.d.ts" />
import { properties, prototype } from './__internal__/util/Disposable.mjs';
import { mix, Object_init, init, createObjectFactory } from './__internal__/util/Object.mjs';
import { none, newInstance, getLength, pipe, max } from './functions.mjs';
import { dispatch } from './scheduling/DispatcherLike.mjs';
import { getDispatcher } from './scheduling/ObserverLike.mjs';
import { onDisposed, addIgnoringChildErrors } from './util/DisposableLike.mjs';
import { isDisposed } from './__internal__/util/DisposableLikeInternal.mjs';

/** @ignore */
const ReactiveContainerLike_sinkInto = Symbol("ReactiveContainerLike_sinkInto");
const DefaultObservable = 0;
const RunnableObservable = 1;
const EnumerableObservable = 2;
/** @ignore */
const ObservableLike_observableType = Symbol("ObservableLike_observableType");
/** @ignore */
const MulticastObservableLike_observerCount = Symbol("MulticastObservableLike_observerCount");
/** @ignore */
const MulticastObservableLike_replay = Symbol("MulticastObservableLike_replay");
/** @ignore */
const SubjectLike_publish = Symbol("SubjectLike_publish");
const createSubject = /*@__PURE__*/ (() => {
    const properties$1 = {
        ...properties,
        [MulticastObservableLike_replay]: 0,
        observers: none,
        replayed: none,
    };
    const prototype$1 = mix(prototype, {
        [Object_init](replay) {
            init(prototype, this);
            this[MulticastObservableLike_replay] = replay;
            this.observers = newInstance(Set);
            this.replayed = [];
        },
        [ObservableLike_observableType]: 0,
        get [MulticastObservableLike_observerCount]() {
            const self = this;
            return self.observers.size;
        },
        [SubjectLike_publish](next) {
            if (!isDisposed(this)) {
                const { replayed } = this;
                const replay = this[MulticastObservableLike_replay];
                if (replay > 0) {
                    replayed.push(next);
                    if (getLength(replayed) > replay) {
                        replayed.shift();
                    }
                }
                for (const observer of this.observers) {
                    pipe(observer, getDispatcher, dispatch(next));
                }
            }
        },
        [ReactiveContainerLike_sinkInto](observer) {
            if (!isDisposed(this)) {
                const { observers } = this;
                observers.add(observer);
                pipe(observer, onDisposed(_ => {
                    observers.delete(observer);
                }));
            }
            const dispatcher = getDispatcher(observer);
            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            for (const next of this.replayed) {
                pipe(dispatcher, dispatch(next));
            }
            pipe(this, addIgnoringChildErrors(dispatcher));
        },
    });
    const createInstance = /*@__PURE__*/ createObjectFactory(prototype$1, properties$1);
    return (options) => {
        const { replay: replayOption = 0 } = options !== null && options !== void 0 ? options : {};
        const replay = max(replayOption, 0);
        return createInstance(replay);
    };
})();

export { DefaultObservable, EnumerableObservable, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observableType, ReactiveContainerLike_sinkInto, RunnableObservable, SubjectLike_publish, createSubject };

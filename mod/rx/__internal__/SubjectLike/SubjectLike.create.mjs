/// <reference types="./SubjectLike.create.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { newInstance, none, unsafeCast, getLength, pipe, max } from '../../../functions.mjs';
import { MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, MulticastObservableLike_observerCount, SubjectLike_publish, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import DispatcherLike__dispatch from '../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatch.mjs';
import DisposableLike__addIgnoringChildErrors from '../../../util/__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.onDisposed.mjs';
import { getDispatcher } from '../../ObserverLike.mjs';

const SubjectLike__create = /*@__PURE__*/ (() => {
    const createSubjectInstance = createInstanceFactory(mix(include(DisposableLike__mixin), function Subject(instance, replay) {
        init(DisposableLike__mixin, instance);
        instance[MulticastObservableLike_replay] = replay;
        instance.observers = newInstance(Set);
        instance.replayed = [];
        return instance;
    }, props({
        [MulticastObservableLike_replay]: 0,
        observers: none,
        replayed: none,
    }), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this.observers.size;
        },
        [SubjectLike_publish](next) {
            if (!DisposableLike__isDisposed(this)) {
                const { replayed } = this;
                const replay = this[MulticastObservableLike_replay];
                if (replay > 0) {
                    replayed.push(next);
                    if (getLength(replayed) > replay) {
                        replayed.shift();
                    }
                }
                for (const observer of this.observers) {
                    pipe(observer, getDispatcher, DispatcherLike__dispatch(next));
                }
            }
        },
        [ReactiveContainerLike_sinkInto](observer) {
            if (!DisposableLike__isDisposed(this)) {
                const { observers } = this;
                observers.add(observer);
                pipe(observer, DisposableLike__onDisposed(_ => {
                    observers.delete(observer);
                }));
            }
            const dispatcher = getDispatcher(observer);
            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            for (const next of this.replayed) {
                pipe(dispatcher, DispatcherLike__dispatch(next));
            }
            pipe(this, DisposableLike__addIgnoringChildErrors(dispatcher));
        },
    }));
    return (options) => {
        const { replay: replayOption = 0 } = options !== null && options !== void 0 ? options : {};
        const replay = max(replayOption, 0);
        return createSubjectInstance(replay);
    };
})();

export { SubjectLike__create as default };

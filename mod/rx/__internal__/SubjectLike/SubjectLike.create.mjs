/// <reference types="./SubjectLike.create.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { newInstance, none, unsafeCast, getLength, pipe, max } from '../../../functions.mjs';
import { MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, MulticastObservableLike_observerCount, SubjectLike_publish, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import { dispatch } from '../../../scheduling/DispatcherLike.mjs';
import { isDisposed, onDisposed, addIgnoringChildErrors } from '../../../util/DisposableLike.mjs';
import DisposableLike__disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { getDispatcher } from '../../ObserverLike.mjs';

const SubjectLike__create = /*@__PURE__*/ (() => {
    const createSubjectInstance = createInstanceFactory(mix(include(DisposableLike__disposableMixin), function Subject(instance, replay) {
        init(DisposableLike__disposableMixin, instance);
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
    }));
    return (options) => {
        const { replay: replayOption = 0 } = options !== null && options !== void 0 ? options : {};
        const replay = max(replayOption, 0);
        return createSubjectInstance(replay);
    };
})();

export { SubjectLike__create as default };

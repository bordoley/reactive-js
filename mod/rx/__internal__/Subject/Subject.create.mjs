/// <reference types="./Subject.create.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { newInstance, none, unsafeCast, getLength, pipe, max } from '../../../functions.mjs';
import { MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, MulticastObservableLike_observerCount, SubjectLike_publish, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import Dispatcher_dispatch from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch.mjs';
import Disposable_addIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onDisposed from '../../../util/__internal__/Disposable/Disposable.onDisposed.mjs';
import Observer_getDispatcher from '../Observer/Observer.getDispatcher.mjs';

const Subject_create = 
/*@__PURE__*/ (() => {
    const createSubjectInstance = createInstanceFactory(mix(include(Disposable_mixin), function Subject(instance, replay) {
        init(Disposable_mixin, instance);
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
            if (!Disposable_isDisposed(this)) {
                const { replayed } = this;
                const replay = this[MulticastObservableLike_replay];
                if (replay > 0) {
                    replayed.push(next);
                    if (getLength(replayed) > replay) {
                        replayed.shift();
                    }
                }
                for (const observer of this.observers) {
                    pipe(observer, Observer_getDispatcher, Dispatcher_dispatch(next));
                }
            }
        },
        [ReactiveContainerLike_sinkInto](observer) {
            if (!Disposable_isDisposed(this)) {
                const { observers } = this;
                observers.add(observer);
                pipe(observer, Disposable_onDisposed(_ => {
                    observers.delete(observer);
                }));
            }
            const dispatcher = Observer_getDispatcher(observer);
            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            for (const next of this.replayed) {
                pipe(dispatcher, Dispatcher_dispatch(next));
            }
            pipe(this, Disposable_addIgnoringChildErrors(dispatcher));
        },
    }));
    return (options) => {
        const { replay: replayOption = 0 } = options !== null && options !== void 0 ? options : {};
        const replay = max(replayOption, 0);
        return createSubjectInstance(replay);
    };
})();

export { Subject_create as default };

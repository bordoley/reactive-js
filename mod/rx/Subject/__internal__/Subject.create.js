/// <reference types="./Subject.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { getLength, max, newInstance, none, pipe, unsafeCast, } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto, SubjectLike_publish, } from "../../../rx.js";
import Dispatcher_dispatch from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Observer_getDispatcher from "../../Observer/__internal__/Observer.getDispatcher.js";
const Subject_create = 
/*@__PURE__*/ (() => {
    const Subject_observers = Symbol("Subject_observers");
    const Subject_replayed = Symbol("Subject_replayed");
    const createSubjectInstance = createInstanceFactory(mix(include(Disposable_mixin), function Subject(instance, replay) {
        init(Disposable_mixin, instance);
        instance[MulticastObservableLike_replay] = replay;
        instance[Subject_observers] = newInstance(Set);
        instance[Subject_replayed] = [];
        return instance;
    }, props({
        [MulticastObservableLike_replay]: 0,
        [Subject_observers]: none,
        [Subject_replayed]: none,
    }), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[Subject_observers].size;
        },
        [SubjectLike_publish](next) {
            if (!Disposable_isDisposed(this)) {
                const { [Subject_replayed]: replayed } = this;
                const replay = this[MulticastObservableLike_replay];
                if (replay > 0) {
                    replayed.push(next);
                    if (getLength(replayed) > replay) {
                        replayed.shift();
                    }
                }
                for (const observer of this[Subject_observers]) {
                    pipe(observer, Observer_getDispatcher, Dispatcher_dispatch(next));
                }
            }
        },
        [ReactiveContainerLike_sinkInto](observer) {
            if (!Disposable_isDisposed(this)) {
                const { [Subject_observers]: observers } = this;
                observers.add(observer);
                pipe(observer, Disposable_onDisposed(_ => {
                    observers.delete(observer);
                }));
            }
            const dispatcher = Observer_getDispatcher(observer);
            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            for (const next of this[Subject_replayed]) {
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
export default Subject_create;

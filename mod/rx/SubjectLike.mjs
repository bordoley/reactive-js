/// <reference types="./SubjectLike.d.ts" />
import { disposableMixin } from '../__internal__/util/__internal__Disposables.mjs';
import { createInstanceFactory, mixin, include, init, props } from '../__internal__/util/__internal__Objects.mjs';
import { newInstance, none, unsafeCast, getLength, pipe, max } from '../functions.mjs';
import { M as MulticastObservableLike_replay, O as ObservableLike_isEnumerable, a as ObservableLike_isRunnable, h as MulticastObservableLike_observerCount, S as SubjectLike_publish, i as isDisposed, R as ReactiveContainerLike_sinkInto, o as onDisposed, j as addIgnoringChildErrors } from '../rx-31e22181.mjs';
import { dispatch } from '../scheduling/DispatcherLike.mjs';
import { getDispatcher } from '../scheduling/ObserverLike.mjs';

const create = 
/*@__PURE__*/ (() => {
    const createSubjectInstance = createInstanceFactory(mixin(include(disposableMixin), function Subject(instance, replay) {
        init(disposableMixin, instance);
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
const publish = (v) => subject => {
    subject[SubjectLike_publish](v);
    return subject;
};
const publishTo = (subject) => v => {
    subject[SubjectLike_publish](v);
    return v;
};

export { create, publish, publishTo };

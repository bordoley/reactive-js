/// <reference types="./SubjectLike.d.ts" />
import { properties, prototype } from '../__internal__/util/Disposable.mjs';
import { Object_init, init, createObjectFactory } from '../__internal__/util/Object.mjs';
import { dispatch } from '../scheduling/DispatcherLike.mjs';
import { onDisposed, addIgnoringChildErrors } from '../util/DisposableLike.mjs';
import { none } from '../util/Option.mjs';
import { newInstance, getLength, pipe, max } from '../util/functions.mjs';
import { MulticastObservableLike_replay, MulticastObservableLike_observerCount, getReplay } from './MulticastObservableLike.mjs';
import { ObservableLike_observableType } from './ObservableLike.mjs';
import { getDispatcher } from './ObserverLike.mjs';
import { ReactiveContainerLike_sinkInto } from './ReactiveContainerLike.mjs';
import { isDisposed } from '../__internal__/util/DisposableLike.mjs';

const SubjectLike_publish = Symbol("SubjectLike_publish");
const publish = (v) => subject => {
    subject[SubjectLike_publish](v);
    return subject;
};
const publishTo = (subject) => v => {
    subject[SubjectLike_publish](v);
    return v;
};
const create = /*@__PURE__*/ (() => {
    const properties$1 = {
        ...properties,
        [MulticastObservableLike_replay]: 0,
        observers: none,
        replayed: none,
    };
    const prototype$1 = {
        ...prototype,
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
                const replay = getReplay(this);
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
            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            for (const next of this.replayed) {
                pipe(observer, getDispatcher, dispatch(next));
            }
            pipe(this, addIgnoringChildErrors(getDispatcher(observer)));
        },
    };
    const createInstance = /*@__PURE__*/ createObjectFactory(prototype$1, properties$1);
    return (options) => {
        const { replay: replayOption = 0 } = options !== null && options !== void 0 ? options : {};
        const replay = max(replayOption, 0);
        return createInstance(replay);
    };
})();

export { SubjectLike_publish, create, publish, publishTo };

/// <reference types="./SubjectLike.d.ts" />
import { DisposableMixin_disposables, mixinDisposable } from '../__internal__/util/disposables.mjs';
import { dispatch } from '../scheduling/DispatcherLike.mjs';
import { DisposableLike_error, DisposableLike_isDisposed, isDisposed, onDisposed, addIgnoringChildErrors } from '../util/DisposableLike.mjs';
import { none } from '../util/Option.mjs';
import { newInstance, getLength, pipe, max } from '../util/functions.mjs';
import { MulticastObservableLike_replay, MulticastObservableLike_observerCount, getReplay } from './MulticastObservableLike.mjs';
import { ObservableLike_observableType } from './ObservableLike.mjs';
import { getDispatcher } from './ObserverLike.mjs';
import { ReactiveContainerLike_sinkInto } from './ReactiveContainerLike.mjs';

const SubjectLike_publish = Symbol("SubjectLike_publish");
const publish = (v) => subject => {
    subject[SubjectLike_publish](v);
    return subject;
};
const publishTo = (subject) => v => {
    subject[SubjectLike_publish](v);
    return v;
};
const Subject = /*@__PURE__*/ (() => {
    var _a, _b, _c, _d;
    class Subject {
        constructor(replay) {
            this[_a] = none;
            this[_b] = false;
            this[_c] = new Set();
            this.observers = newInstance(Set);
            this.replayed = [];
            this[_d] = 0;
            this[MulticastObservableLike_replay] = replay;
        }
        get [(_a = DisposableLike_error, _b = DisposableLike_isDisposed, _c = DisposableMixin_disposables, _d = ObservableLike_observableType, MulticastObservableLike_observerCount)]() {
            return this.observers.size;
        }
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
        }
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
        }
    }
    return pipe(Subject, mixinDisposable());
})();
const create = (options) => {
    const { replay: replayOption = 0 } = options !== null && options !== void 0 ? options : {};
    const replay = max(replayOption, 0);
    return newInstance(Subject, replay);
};

export { SubjectLike_publish, create, publish, publishTo };

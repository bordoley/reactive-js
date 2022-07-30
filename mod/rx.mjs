/// <reference types="./rx.d.ts" />
import { dispose, isDisposed, onDisposed, addIgnoringChildErrors, addTo } from './__internal__/util/DisposableLikeInternal.mjs';
import { disposableMixin } from './__internal__/util/DisposableLikeMixins.mjs';
import { Object_properties, Object_init, init, mixWith, createObjectFactory } from './__internal__/util/Object.mjs';
import { pipe, newInstance, none, getLength, max, forEach, ignore } from './functions.mjs';
import { dispatch } from './scheduling/DispatcherLike.mjs';
import { getDispatcher, getScheduler } from './scheduling/ObserverLike.mjs';
import { schedule } from './scheduling/SchedulerLike.mjs';

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
const createObservable = /*@__PURE__*/ (() => {
    class CreateObservable {
        constructor(f) {
            this.f = f;
        }
        get [ObservableLike_observableType]() {
            return 0;
        }
        [ReactiveContainerLike_sinkInto](observer) {
            try {
                this.f(observer);
            }
            catch (cause) {
                pipe(observer, dispose({ cause }));
            }
        }
    }
    return (f) => newInstance(CreateObservable, f);
})();
const createObservableT = {
    create: createObservable,
};
const createSubject = /*@__PURE__*/ (() => {
    const createSubjectInstance = pipe({
        [Object_properties]: {
            [MulticastObservableLike_replay]: 0,
            observers: none,
            replayed: none,
        },
        [Object_init](replay) {
            init(disposableMixin, this);
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
    }, mixWith(disposableMixin), createObjectFactory());
    return (options) => {
        const { replay: replayOption = 0 } = options !== null && options !== void 0 ? options : {};
        const replay = max(replayOption, 0);
        return createSubjectInstance(replay);
    };
})();
const create = (m) => (onSink) => m.create(onSink);
const createEmpty = (m) => () => pipe((sink) => {
    pipe(sink, dispose());
}, create(m));
const createUsing = (m) => (resourceFactory, sourceFactory) => pipe((sink) => {
    pipe(resourceFactory(), resources => (Array.isArray(resources) ? resources : [resources]), forEach(addTo(sink)), resources => sourceFactory(...resources))[ReactiveContainerLike_sinkInto](sink);
}, create(m));
const createNever = (m) => {
    const neverInstance = pipe(ignore, create(m));
    return () => neverInstance;
};
const createObservableUsing = 
/*@__PURE__*/ createUsing(createObservableT);
const createObservableUsingT = {
    using: createObservableUsing,
};
const deferObservable = (factory, options) => createObservable(observer => {
    const sideEffect = factory();
    if (typeof sideEffect === "function") {
        const callback = () => sideEffect(observer);
        pipe(observer, getScheduler, schedule(callback, options), addTo(observer));
    }
    else {
        sideEffect[ReactiveContainerLike_sinkInto](observer);
    }
});
const deferObservableT = {
    defer: deferObservable,
};
const neverObservable = /*@__PURE__*/ createNever(createObservableT);
const neverObservableT = {
    never: neverObservable,
};
const createRunnable = /*@__PURE__*/ (() => {
    class Runnable {
        constructor(_run) {
            this._run = _run;
        }
        [ReactiveContainerLike_sinkInto](sink) {
            try {
                this._run(sink);
                pipe(sink, dispose());
            }
            catch (cause) {
                pipe(sink, dispose({ cause }));
            }
        }
    }
    return (run) => newInstance(Runnable, run);
})();
const createRunnableT = {
    create: createRunnable,
};
const createRunnableUsing = 
/*@__PURE__*/ createUsing(createRunnableT);
const createRunnableUsingT = {
    using: createRunnableUsing,
};
const emptyRunnable = 
/*@__PURE__*/ createEmpty(createRunnableT);
const emptyRunnableT = { empty: emptyRunnable };
const neverRunnable = 
/*@__PURE__*/ createNever(createRunnableT);
const neverRunnableT = {
    never: neverRunnable,
};

export { DefaultObservable, EnumerableObservable, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observableType, ReactiveContainerLike_sinkInto, RunnableObservable, SubjectLike_publish, createObservable, createObservableUsing, createObservableUsingT, createRunnable, createRunnableUsing, createRunnableUsingT, createSubject, deferObservable, deferObservableT, emptyRunnable, emptyRunnableT, neverObservable, neverObservableT, neverRunnable, neverRunnableT };

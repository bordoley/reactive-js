/// <reference types="./rx.d.ts" />
import { getDelay, hasDelay } from './__internal__/optionalArgs.mjs';
import { addTo, dispose, isDisposed, onDisposed, addIgnoringChildErrors } from './__internal__/util/DisposableLikeInternal.mjs';
import { disposableMixin } from './__internal__/util/DisposableLikeMixins.mjs';
import { clazz, __extends, init, createObjectFactory } from './__internal__/util/Object.mjs';
import { ignore, pipe, forEach, newInstance, none, getLength, max, pipeLazy } from './functions.mjs';
import { dispatch } from './scheduling/DispatcherLike.mjs';
import { getDispatcher, getScheduler } from './scheduling/ObserverLike.mjs';
import { schedule, __yield } from './scheduling/SchedulerLike.mjs';
import { SinkLike_notify } from './util.mjs';

/** @ignore */
const ReactiveContainerLike_sinkInto = Symbol("ReactiveContainerLike_sinkInto");
const observableType = 0;
const runnableObservableType = 1;
const enumerableObservableType = 2;
/** @ignore */
const ObservableLike_observableType = Symbol("ObservableLike_observableType");
/** @ignore */
const MulticastObservableLike_observerCount = Symbol("MulticastObservableLike_observerCount");
/** @ignore */
const MulticastObservableLike_replay = Symbol("MulticastObservableLike_replay");
/** @ignore */
const SubjectLike_publish = Symbol("SubjectLike_publish");
const createNever = (create) => create(ignore);
const createUsing = (create) => (resourceFactory, sourceFactory) => create((sink) => {
    pipe(resourceFactory(), resources => (Array.isArray(resources) ? resources : [resources]), forEach(addTo(sink)), resources => sourceFactory(...resources))[ReactiveContainerLike_sinkInto](sink);
});
class CreateObservable {
    constructor(f, type) {
        this.f = f;
        this[ObservableLike_observableType] = type;
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
const createEnumerableObservable = /*@__PURE__*/ (() => {
    return (f) => newInstance(CreateObservable, f, enumerableObservableType);
})();
const createObservable = /*@__PURE__*/ (() => {
    return (f) => newInstance(CreateObservable, f, observableType);
})();
const createRunnableObservable = /*@__PURE__*/ (() => {
    return (f) => newInstance(CreateObservable, f, runnableObservableType);
})();
const createObservableUsing = 
/*@__PURE__*/ createUsing(createObservable);
const createObservableUsingT = {
    using: createObservableUsing,
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
const createRunnableUsing = 
/*@__PURE__*/ createUsing(createRunnable);
const createRunnableUsingT = {
    using: createRunnableUsing,
};
const createSubject = /*@__PURE__*/ (() => {
    const createSubjectInstance = pipe(clazz(__extends(disposableMixin), function Subject(replay) {
        init(disposableMixin, this);
        this[MulticastObservableLike_replay] = replay;
        this.observers = newInstance(Set);
        this.replayed = [];
        return this;
    }, {
        [MulticastObservableLike_replay]: 0,
        observers: none,
        replayed: none,
    }, {
        [ObservableLike_observableType]: observableType,
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
    }), createObjectFactory());
    return (options) => {
        const { replay: replayOption = 0 } = options !== null && options !== void 0 ? options : {};
        const replay = max(replayOption, 0);
        return createSubjectInstance(replay);
    };
})();
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
const deferEnumerableObservable = (factory, options) => createEnumerableObservable(observer => {
    const sideEffect = factory();
    if (typeof sideEffect === "function") {
        const callback = () => sideEffect(observer);
        pipe(observer, getScheduler, schedule(callback, options), addTo(observer));
    }
    else {
        sideEffect[ReactiveContainerLike_sinkInto](observer);
    }
});
const deferEnumerableObservableT = {
    defer: deferEnumerableObservable,
};
const deferRunnable = f => createRunnable(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
});
const deferRunnableT = { defer: deferRunnable };
const emptyObservable = ((options) => {
    const delay = getDelay(options);
    return delay > 0
        ? createRunnableObservable(sink => {
            pipe(sink, getScheduler, schedule(pipeLazy(sink, dispose()), { delay }));
        })
        : createEnumerableObservable(sink => {
            pipe(sink, dispose());
        });
});
const emptyRunnable = () => createRunnable(sink => {
    pipe(sink, dispose());
});
const emptyRunnableT = { empty: emptyRunnable };
const generateObservable = ((generator, initialValue, options) => {
    const delay = getDelay(options);
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        let acc = initialValue();
        const continuation = () => {
            while (!isDisposed(observer)) {
                acc = generator(acc);
                observer[SinkLike_notify](acc);
                __yield(options);
            }
        };
        pipe(observer, getScheduler, schedule(continuation, delayStart && hasDelay(options) ? options : none), addTo(observer));
    };
    return delay > 0
        ? createRunnableObservable(onSink)
        : createEnumerableObservable(onSink);
});
const generateRunnable = (generator, initialValue) => createRunnable((sink) => {
    let acc = initialValue();
    while (!isDisposed(sink)) {
        acc = generator(acc);
        sink[SinkLike_notify](acc);
    }
});
const generateRunnableT = {
    generate: generateRunnable,
};
const neverEnumerableObservable = () => createNever(createEnumerableObservable);
const neverEnumerableObservableT = {
    never: neverEnumerableObservable,
};
const neverRunnable = () => createNever(createRunnable);
const neverRunnableT = {
    never: neverRunnable,
};

export { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observableType, ReactiveContainerLike_sinkInto, SubjectLike_publish, createEnumerableObservable, createObservable, createObservableUsing, createObservableUsingT, createRunnable, createRunnableObservable, createRunnableUsing, createRunnableUsingT, createSubject, deferEnumerableObservable, deferEnumerableObservableT, deferObservable, deferObservableT, deferRunnable, deferRunnableT, emptyObservable, emptyRunnable, emptyRunnableT, enumerableObservableType, generateObservable, generateRunnable, generateRunnableT, neverEnumerableObservable, neverEnumerableObservableT, neverRunnable, neverRunnableT, observableType, runnableObservableType };

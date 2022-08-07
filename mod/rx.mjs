/// <reference types="./rx.d.ts" />
import { getDelay, hasDelay } from './__internal__/optionalArgs.mjs';
import { dispose, isDisposed, onDisposed, addIgnoringChildErrors, addTo } from './__internal__/util/DisposableLikeInternal.mjs';
import { disposableMixin } from './__internal__/util/DisposableLikeMixins.mjs';
import { createInstanceFactory, clazz, __extends, init } from './__internal__/util/Object.mjs';
import { none, pipe, newInstance, getLength, max, pipeLazy, ignore } from './functions.mjs';
import { dispatch } from './scheduling/DispatcherLike.mjs';
import { getDispatcher, getScheduler } from './scheduling/ObserverLike.mjs';
import { schedule, __yield } from './scheduling/SchedulerLike.mjs';
import { SinkLike_notify } from './util.mjs';

/** @ignore */
const ReactiveContainerLike_sinkInto = Symbol("ReactiveContainerLike_sinkInto");
// @ignore
const ObservableLike_isEnumerable = Symbol("ObservableLike_isEnumerable");
// @ignore
const ObservableLike_isRunnable = Symbol("ObservableLike_isEnumerable");
/** @ignore */
const MulticastObservableLike_observerCount = Symbol("MulticastObservableLike_observerCount");
/** @ignore */
const MulticastObservableLike_replay = Symbol("MulticastObservableLike_replay");
/** @ignore */
const SubjectLike_publish = Symbol("SubjectLike_publish");
const createObservable = /*@__PURE__*/ (() => {
    const createObservableInternal = createInstanceFactory(clazz(function CreateObservable(f, isEnumerable, isRunnable) {
        this.f = f;
        this[ObservableLike_isEnumerable] = isEnumerable;
        this[ObservableLike_isRunnable] = isRunnable;
        return this;
    }, {
        f: none,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_isEnumerable]: false,
    }, {
        [ReactiveContainerLike_sinkInto](observer) {
            try {
                this.f(observer);
            }
            catch (cause) {
                pipe(observer, dispose({ cause }));
            }
        },
    }));
    return (f, options) => {
        const { isEnumerable = false, isRunnable = false } = options !== null && options !== void 0 ? options : {};
        return createObservableInternal(f, isEnumerable, isEnumerable || isRunnable);
    };
})();
const createRunnable = /*@__PURE__*/ (() => createInstanceFactory(clazz(function Runnable(run) {
    this.run = run;
    return this;
}, {
    run: none,
}, {
    [ReactiveContainerLike_sinkInto](sink) {
        try {
            this.run(sink);
            pipe(sink, dispose());
        }
        catch (cause) {
            pipe(sink, dispose({ cause }));
        }
    },
})))();
const createSubject = /*@__PURE__*/ (() => {
    const createSubjectInstance = createInstanceFactory(clazz(__extends(disposableMixin), function Subject(replay) {
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
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
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
    }));
    return (options) => {
        const { replay: replayOption = 0 } = options !== null && options !== void 0 ? options : {};
        const replay = max(replayOption, 0);
        return createSubjectInstance(replay);
    };
})();
const deferObservable = ((factory, options) => createObservable(observer => {
    const sideEffect = factory();
    if (typeof sideEffect === "function") {
        const callback = () => sideEffect(observer);
        pipe(observer, getScheduler, schedule(callback, options), addTo(observer));
    }
    else {
        sideEffect[ReactiveContainerLike_sinkInto](observer);
    }
}, options));
const deferObservableT = {
    defer: deferObservable,
};
const deferRunnable = f => createRunnable(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
});
const deferRunnableT = { defer: deferRunnable };
const emptyObservable = ((options) => {
    const delay = getDelay(options);
    return delay > 0
        ? createObservable(sink => {
            pipe(sink, getScheduler, schedule(pipeLazy(sink, dispose()), { delay }));
        }, { isRunnable: true })
        : createObservable(sink => {
            pipe(sink, dispose());
        }, { isEnumerable: true });
});
const emptyObservableT = {
    empty: emptyObservable,
};
const emptyRunnable = () => createRunnable(sink => {
    pipe(sink, dispose());
});
const emptyRunnableT = { empty: emptyRunnable };
/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
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
        ? createObservable(onSink, {
            isRunnable: true,
        })
        : createObservable(onSink, {
            isEnumerable: true,
        });
});
const generateObservableT = { generate: generateObservable };
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
const neverObservable = () => createObservable(ignore, { isEnumerable: true });
const neverObservableT = {
    never: neverObservable,
};
const neverRunnable = () => createRunnable(ignore);
const neverRunnableT = {
    never: neverRunnable,
};

export { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto, SubjectLike_publish, createObservable, createRunnable, createSubject, deferObservable, deferObservableT, deferRunnable, deferRunnableT, emptyObservable, emptyObservableT, emptyRunnable, emptyRunnableT, generateObservable, generateObservableT, generateRunnable, generateRunnableT, neverObservable, neverObservableT, neverRunnable, neverRunnableT };

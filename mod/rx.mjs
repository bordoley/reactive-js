/// <reference types="./rx.d.ts" />
import { getDelay, hasDelay } from './__internal__/__internal__optionParsing.mjs';
import { dispose, isDisposed, onDisposed, addIgnoringChildErrors, addTo } from './__internal__/util/__internal__DisposableLike.mjs';
import { disposableMixin } from './__internal__/util/__internal__Disposables.mjs';
import { createInstanceFactory, clazz, props, __extends, init } from './__internal__/util/__internal__Objects.mjs';
import { none, pipe, newInstance, unsafeCast, getLength, max, pipeLazy, ignore } from './functions.mjs';
import { dispatch } from './scheduling/DispatcherLike.mjs';
import { getDispatcher, getScheduler } from './scheduling/ObserverLike.mjs';
import { schedule, __yield } from './scheduling/SchedulerLike.mjs';
import { SinkLike_notify } from './util.mjs';

/** @ignore */
const ReactiveContainerLike_sinkInto = Symbol("ReactiveContainerLike_sinkInto");
// @ignore
const ObservableLike_isEnumerable = Symbol("ObservableLike_isEnumerable");
// @ignore
const ObservableLike_isRunnable = Symbol("ObservableLike_isRunnable");
/** @ignore */
const MulticastObservableLike_observerCount = Symbol("MulticastObservableLike_observerCount");
/** @ignore */
const MulticastObservableLike_replay = Symbol("MulticastObservableLike_replay");
/** @ignore */
const SubjectLike_publish = Symbol("SubjectLike_publish");
const createObservableImpl = /*@__PURE__*/ (() => {
    return createInstanceFactory(clazz(function CreateObservable(instance, f, isEnumerable, isRunnable) {
        instance.f = f;
        instance[ObservableLike_isEnumerable] = isEnumerable;
        instance[ObservableLike_isRunnable] = isEnumerable || isRunnable;
        return instance;
    }, props({
        f: none,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_isEnumerable]: false,
    }), {
        [ReactiveContainerLike_sinkInto](observer) {
            try {
                this.f(observer);
            }
            catch (cause) {
                pipe(observer, dispose({ cause }));
            }
        },
    }));
})();
const createEnumerableObservable = (f) => createObservableImpl(f, true, true);
const createObservable = (f) => createObservableImpl(f, false, false);
const createRunnableObservable = (f) => createObservableImpl(f, false, true);
const createRunnable = /*@__PURE__*/ (() => {
    return createInstanceFactory(clazz(function Runnable(instance, run) {
        instance.run = run;
        return instance;
    }, props({
        run: none,
    }), {
        [ReactiveContainerLike_sinkInto](sink) {
            try {
                this.run(sink);
                pipe(sink, dispose());
            }
            catch (cause) {
                pipe(sink, dispose({ cause }));
            }
        },
    }));
})();
const createSubject = /*@__PURE__*/ (() => {
    const createSubjectInstance = createInstanceFactory(clazz(__extends(disposableMixin), function Subject(instance, replay) {
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
const deferObservableImpl = (factory, isEnumerable, isRunnable) => createObservableImpl(observer => {
    factory()[ReactiveContainerLike_sinkInto](observer);
}, isEnumerable, isRunnable);
const deferEnumerableObservable = (f => deferObservableImpl(f, true, true));
const deferEnumerableObservableT = {
    defer: deferEnumerableObservable,
};
const deferObservable = f => deferObservableImpl(f, false, false);
const deferObservableT = {
    defer: deferObservable,
};
const deferRunnableObservable = (f => deferObservableImpl(f, false, true));
const deferRunnableObservableT = {
    defer: deferRunnableObservable,
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
const emptyEnumerableObservableT = {
    empty: emptyObservable,
};
const emptyObservableT = {
    empty: emptyObservable,
};
const emptyRunnableObservableT = {
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
        ? createRunnableObservable(onSink)
        : createEnumerableObservable(onSink);
});
const generateEnumerableObservableT = { generate: generateObservable };
const generateObservableT = { generate: generateObservable };
const generateRunnableObservableT = { generate: generateObservable };
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
const neverObservable = () => createEnumerableObservable(ignore);
const neverEnumerableObservableT = {
    never: neverObservable,
};
const neverObservableT = {
    never: neverObservable,
};
const neverRunnableObservableT = {
    never: neverObservable,
};
const neverRunnable = () => createRunnable(ignore);
const neverRunnableT = {
    never: neverRunnable,
};

export { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto, SubjectLike_publish, createEnumerableObservable, createObservable, createRunnable, createRunnableObservable, createSubject, deferEnumerableObservable, deferEnumerableObservableT, deferObservable, deferObservableT, deferRunnable, deferRunnableObservable, deferRunnableObservableT, deferRunnableT, emptyEnumerableObservableT, emptyObservable, emptyObservableT, emptyRunnable, emptyRunnableObservableT, emptyRunnableT, generateEnumerableObservableT, generateObservable, generateObservableT, generateRunnable, generateRunnableObservableT, generateRunnableT, neverEnumerableObservableT, neverObservable, neverObservableT, neverRunnable, neverRunnableObservableT, neverRunnableT };

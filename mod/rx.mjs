/// <reference types="./rx.d.ts" />
import { getDelay, hasDelay } from './__internal__/optionalArgs.mjs';
import { addTo, dispose, isDisposed, onDisposed, addIgnoringChildErrors } from './__internal__/util/DisposableLikeInternal.mjs';
import { disposableMixin } from './__internal__/util/DisposableLikeMixins.mjs';
import { createInstanceFactory, clazz, __extends, init } from './__internal__/util/Object.mjs';
import { pipe, forEach, none, newInstance, getLength, max, pipeLazy, ignore } from './functions.mjs';
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
const createUsing = (create) => (resourceFactory, sourceFactory) => create((sink) => {
    pipe(resourceFactory(), resources => (Array.isArray(resources) ? resources : [resources]), forEach(addTo(sink)), resources => sourceFactory(...resources))[ReactiveContainerLike_sinkInto](sink);
});
const createObservable = /*@__PURE__*/ (() => {
    const createObservableInternal = createInstanceFactory(clazz(function CreateObservable(f, type) {
        this.f = f;
        this[ObservableLike_observableType] = type;
        return this;
    }, {
        f: none,
        [ObservableLike_observableType]: none,
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
        const { type = observableType } = options !== null && options !== void 0 ? options : {};
        return createObservableInternal(f, type);
    };
})();
const createObservableUsing = 
/*@__PURE__*/ createUsing(createObservable);
const createObservableUsingT = {
    using: createObservableUsing,
};
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
const createRunnableUsing = 
/*@__PURE__*/ createUsing(createRunnable);
const createRunnableUsingT = {
    using: createRunnableUsing,
};
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
    }));
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
}, options);
const deferObservableT = {
    defer: deferObservable,
};
const deferRunnable = f => createRunnable(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
});
const deferRunnableT = { defer: deferRunnable };
const emptyObservable = (options) => {
    const delay = getDelay(options);
    return delay > 0
        ? createObservable(sink => {
            pipe(sink, getScheduler, schedule(pipeLazy(sink, dispose()), { delay }));
        }, { type: runnableObservableType })
        : createObservable(sink => {
            pipe(sink, dispose());
        }, { type: enumerableObservableType });
};
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
const generateObservable = (generator, initialValue, options) => {
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
    return createObservable(onSink, {
        type: delay > 0 ? runnableObservableType : enumerableObservableType,
    });
};
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
const neverObservable = () => createObservable(ignore, { type: enumerableObservableType });
const neverObservableT = {
    never: neverObservable,
};
const neverRunnable = () => createRunnable(ignore);
const neverRunnableT = {
    never: neverRunnable,
};

export { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observableType, ReactiveContainerLike_sinkInto, SubjectLike_publish, createObservable, createObservableUsing, createObservableUsingT, createRunnable, createRunnableUsing, createRunnableUsingT, createSubject, deferObservable, deferObservableT, deferRunnable, deferRunnableT, emptyObservable, emptyObservableT, emptyRunnable, emptyRunnableT, enumerableObservableType, generateObservable, generateObservableT, generateRunnable, generateRunnableT, neverObservable, neverObservableT, neverRunnable, neverRunnableT, observableType, runnableObservableType };

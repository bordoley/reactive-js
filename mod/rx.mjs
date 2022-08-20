/// <reference types="./rx.d.ts" />
import { dispose } from './__internal__/util/__internal__DisposableLike.mjs';
import { createInstanceFactory, mixin, props } from './__internal__/util/__internal__Objects.mjs';
import './containers.mjs';
import { none, pipe } from './functions.mjs';

/** @ignore */
const ReactiveContainerLike_sinkInto = Symbol("ReactiveContainerLike_sinkInto");
/**  @ignore */
const ObservableLike_isEnumerable = Symbol("ObservableLike_isEnumerable");
/**  @ignore */
const ObservableLike_isRunnable = Symbol("ObservableLike_isRunnable");
/** @ignore */
const MulticastObservableLike_observerCount = Symbol("MulticastObservableLike_observerCount");
/** @ignore */
const MulticastObservableLike_replay = Symbol("MulticastObservableLike_replay");
/** @ignore */
const SubjectLike_publish = Symbol("SubjectLike_publish");
const createObservableImpl = /*@__PURE__*/ (() => {
    return createInstanceFactory(mixin(function CreateObservable(instance, f, isEnumerable, isRunnable) {
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
    return createInstanceFactory(mixin(function Runnable(instance, run) {
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

export { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto, SubjectLike_publish, createEnumerableObservable, createObservable, createRunnable, createRunnableObservable, deferEnumerableObservable, deferEnumerableObservableT, deferObservable, deferObservableT, deferRunnableObservable, deferRunnableObservableT };

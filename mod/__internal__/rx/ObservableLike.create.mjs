/// <reference types="./ObservableLike.create.d.ts" />
import { none, pipe } from '../../functions.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../rx.mjs';
import { createInstanceFactory, mixin, props } from '../mixins.mjs';
import { dispose } from '../util/DisposableLike.operators.mjs';

const createImpl = /*@__PURE__*/ (() => {
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
const createEnumerableObservable = (f) => createImpl(f, true, true);
const createObservable = (f) => createImpl(f, false, false);
const createRunnableObservable = (f) => createImpl(f, false, true);
const deferObservableImpl = (factory, isEnumerable, isRunnable) => createImpl(observer => {
    factory()[ReactiveContainerLike_sinkInto](observer);
}, isEnumerable, isRunnable);
const deferEnumerableObservable = (f => deferObservableImpl(f, true, true));
const deferObservable = f => deferObservableImpl(f, false, false);
const deferRunnableObservable = (f => deferObservableImpl(f, false, true));

export { createEnumerableObservable, createObservable, createRunnableObservable, deferEnumerableObservable, deferObservable, deferObservableImpl, deferRunnableObservable };

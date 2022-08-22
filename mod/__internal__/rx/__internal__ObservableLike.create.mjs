/// <reference types="./__internal__ObservableLike.create.d.ts" />
import { none, pipe } from '../../functions.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../rx.mjs';
import { dispose } from '../util/__internal__DisposableLike.mjs';
import { createInstanceFactory, mixin, props } from '../util/__internal__Objects.mjs';

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

export { createEnumerableObservable, createObservable, createObservableImpl, createRunnableObservable };

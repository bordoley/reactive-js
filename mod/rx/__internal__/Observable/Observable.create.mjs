/// <reference types="./Observable.create.d.ts" />
import { createInstanceFactory, mix, props } from '../../../__internal__/mixins.mjs';
import { none, pipe, error } from '../../../functions.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';

const Observable$create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function CreateObservable(instance, f, isEnumerable = false, isRunnable = false) {
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
            catch (e) {
                pipe(observer, Disposable$dispose(error(e)));
            }
        },
    }));
})();

export { Observable$create as default };

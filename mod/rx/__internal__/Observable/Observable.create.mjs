/// <reference types="./Observable.create.d.ts" />
import { createInstanceFactory, mix, props } from '../../../__internal__/mixins.mjs';
import { none, pipe, error } from '../../../functions.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';

const Observable_create = /*@__PURE__*/ (() => {
    const CreateObservable_effect = Symbol("CreateObservable_effect");
    return createInstanceFactory(mix(function CreateObservable(instance, effect, isEnumerable = false, isRunnable = false) {
        instance[CreateObservable_effect] = effect;
        instance[ObservableLike_isEnumerable] = isEnumerable;
        instance[ObservableLike_isRunnable] = isEnumerable || isRunnable;
        return instance;
    }, props({
        [CreateObservable_effect]: none,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_isEnumerable]: false,
    }), {
        [ReactiveContainerLike_sinkInto](observer) {
            try {
                this[CreateObservable_effect](observer);
            }
            catch (e) {
                pipe(observer, Disposable_dispose(error(e)));
            }
        },
    }));
})();

export { Observable_create as default };

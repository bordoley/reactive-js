/// <reference types="./Observable.create.d.ts" />

import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, pipe } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
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
        [ObservableLike_observe](observer) {
            try {
                this[CreateObservable_effect](observer);
            }
            catch (e) {
                pipe(observer, Disposable_dispose(error(e)));
            }
        },
    }));
})();
export default Observable_create;

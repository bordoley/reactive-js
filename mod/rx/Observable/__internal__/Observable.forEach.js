/// <reference types="./Observable.forEach.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_forEach = /*@__PURE__*/ (() => {
    const createForEachObserver = (() => {
        const ForEachObserverMixin_effect = Symbol("ForEachObserverMixin_effect");
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function ForEachObserverMixin(instance, delegate, effect) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
            instance[ForEachObserverMixin_effect] = effect;
            return instance;
        }, props({
            [ForEachObserverMixin_effect]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[ForEachObserverMixin_effect](next);
                this[DelegatingLike_delegate][ObserverLike_notify](next);
            },
        }));
    })();
    return ((effect) => pipe(createForEachObserver, partial(effect), Observable_liftEnumerableOperator));
})();
export default Observable_forEach;

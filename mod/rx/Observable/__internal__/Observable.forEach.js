/// <reference types="./Observable.forEach.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_forEach from "../../../containers/StatefulContainer/__internal__/StatefulContainer.forEach.js";
import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_forEach = /*@__PURE__*/ (() => {
    const createForEachObserver = (() => {
        const ForEachSinkMixin_effect = Symbol("ForEachSinkMixin_effect");
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function ForEachSinkMixin(instance, delegate, effect) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
            instance[ForEachSinkMixin_effect] = effect;
            return instance;
        }, props({
            [ForEachSinkMixin_effect]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[ForEachSinkMixin_effect](next);
                this[DelegatingLike_delegate][ObserverLike_notify](next);
            },
        }));
    })();
    return pipe(createForEachObserver, StatefulContainer_forEach(Observable_liftEnumerableOperator));
})();
export default Observable_forEach;

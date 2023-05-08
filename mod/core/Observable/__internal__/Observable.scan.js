/// <reference types="./Observable.scan.d.ts" />

import { DelegatingLike_delegate, ReducerAccumulatorLike_acc, ReducerAccumulatorLike_reducer, } from "../../../__internal__/core.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DisposableLike_dispose, ObserverLike_notify, } from "../../../core.js";
import Delegating_mixin from "../../../core/Delegating/__internal__/Delegating.mixin.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_scan = /*@__PURE__*/ (() => {
    const createScanObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function ScanObserver(instance, delegate, reducer, initialValue) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(Delegating_mixin(), instance, delegate);
            instance[ReducerAccumulatorLike_reducer] = reducer;
            try {
                const acc = initialValue();
                instance[ReducerAccumulatorLike_acc] = acc;
            }
            catch (e) {
                instance[DisposableLike_dispose](error(e));
            }
            return instance;
        }, props({
            [ReducerAccumulatorLike_acc]: none,
            [ReducerAccumulatorLike_reducer]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const nextAcc = this[ReducerAccumulatorLike_reducer](this[ReducerAccumulatorLike_acc], next);
                this[ReducerAccumulatorLike_acc] = nextAcc;
                this[DelegatingLike_delegate][ObserverLike_notify](nextAcc);
            },
        }));
    })();
    return ((reducer, initialValue) => pipe(createScanObserver, partial(reducer, initialValue), Enumerable_lift));
})();
export default Observable_scan;

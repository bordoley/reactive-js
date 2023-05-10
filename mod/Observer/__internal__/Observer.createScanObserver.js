/// <reference types="./Observer.createScanObserver.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, ReducerAccumulatorLike_acc, ReducerAccumulatorLike_reducer, } from "../../__internal__/types.js";
import { error, none } from "../../functions.js";
import { DisposableLike_dispose, ObserverLike_notify, } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createScanObserver = /*@__PURE__*/ (() => {
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
export default Observer_createScanObserver;

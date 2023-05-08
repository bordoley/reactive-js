/// <reference types="./Observable.pairwise.d.ts" />

import { DelegatingLike_delegate, } from "../../../__internal__/core.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __PairwiseObserver_hasPrev, __PairwiseObserver_prev, } from "../../../__internal__/symbols.js";
import { ObserverLike_notify, } from "../../../core.js";
import Delegating_mixin from "../../../core/Delegating/__internal__/Delegating.mixin.js";
import { none, pipe, returns } from "../../../functions.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_pairwise = /*@__PURE__*/ (() => {
    const createPairwiseObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function PairwiseObserver(instance, delegate) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(Delegating_mixin(), instance, delegate);
            return instance;
        }, props({
            [__PairwiseObserver_prev]: none,
            [__PairwiseObserver_hasPrev]: false,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const prev = this[__PairwiseObserver_prev];
                if (this[__PairwiseObserver_hasPrev]) {
                    this[DelegatingLike_delegate][ObserverLike_notify]([prev, next]);
                }
                this[__PairwiseObserver_hasPrev] = true;
                this[__PairwiseObserver_prev] = next;
            },
        }));
    })();
    return pipe(createPairwiseObserver, Enumerable_lift, returns);
})();
export default Observable_pairwise;

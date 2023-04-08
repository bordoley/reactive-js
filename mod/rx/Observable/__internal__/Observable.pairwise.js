/// <reference types="./Observable.pairwise.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { PairwiseObserver_hasPrev, PairwiseObserver_prev, } from "../../../__internal__/symbols.js";
import { none, pipe, returns } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_pairwise = /*@__PURE__*/ (() => {
    const createPairwiseObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin()), function PairwiseObserver(instance, delegate) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            return instance;
        }, props({
            [PairwiseObserver_prev]: none,
            [PairwiseObserver_hasPrev]: false,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const prev = this[PairwiseObserver_prev];
                if (this[PairwiseObserver_hasPrev]) {
                    this[DelegatingLike_delegate][ObserverLike_notify]([prev, next]);
                }
                this[PairwiseObserver_hasPrev] = true;
                this[PairwiseObserver_prev] = next;
            },
        }));
    })();
    return pipe(createPairwiseObserver, Enumerable_lift, returns);
})();
export default Observable_pairwise;

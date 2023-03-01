/// <reference types="./Observable.pairwise.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe, returns } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_lift from "./Observable.lift.js";
const Observable_pairwise = /*@__PURE__*/ (() => {
    const createPairwiseObserver = (() => {
        const PairwiseObserverMixin_prev = Symbol("PairwiseObserverMixin_prev");
        const PairwiseObserverMixin_hasPrev = Symbol("PairwiseObserverMixin_hasPrev");
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function PairwiseObserverMixin(instance, delegate) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
            return instance;
        }, props({
            [PairwiseObserverMixin_prev]: none,
            [PairwiseObserverMixin_hasPrev]: false,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const prev = this[PairwiseObserverMixin_prev];
                if (this[PairwiseObserverMixin_hasPrev]) {
                    this[DelegatingLike_delegate][ObserverLike_notify]([prev, next]);
                }
                this[PairwiseObserverMixin_hasPrev] = true;
                this[PairwiseObserverMixin_prev] = next;
            },
        }));
    })();
    return pipe(createPairwiseObserver, Observable_lift(true), returns);
})();
export default Observable_pairwise;

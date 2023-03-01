/// <reference types="./Observable.pairwise.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe, returns } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_lift from "./Observable.lift.js";
const Observable_pairwise = 
/*@__PURE__*/ (() => {
    const createPairwiseObserver = (() => {
        const PairwiseSinkMixin_prev = Symbol("PairwiseSinkMixin_prev");
        const PairwiseSinkMixin_hasPrev = Symbol("PairwiseSinkMixin_hasPrev");
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function PairwiseSinkMixin(instance, delegate) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
            return instance;
        }, props({
            [PairwiseSinkMixin_prev]: none,
            [PairwiseSinkMixin_hasPrev]: false,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const prev = this[PairwiseSinkMixin_prev];
                if (this[PairwiseSinkMixin_hasPrev]) {
                    this[DelegatingLike_delegate][ObserverLike_notify]([
                        prev,
                        next,
                    ]);
                }
                this[PairwiseSinkMixin_hasPrev] = true;
                this[PairwiseSinkMixin_prev] = next;
            },
        }));
    })();
    return pipe(createPairwiseObserver, Observable_lift(true), returns);
})();
export default Observable_pairwise;

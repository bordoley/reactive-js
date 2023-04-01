/// <reference types="./Observable.pairwise.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { PairwiseObserver_hasPrev, PairwiseObserver_prev, } from "../../../__internal__/symbols.js";
import { none, pipe, returns } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, { initObserverMixinFromDelegate, } from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_pairwise = /*@__PURE__*/ (() => {
    const createPairwiseObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function PairwiseObserver(instance, delegate) {
            init(Disposable_delegatingMixin(), instance, delegate);
            initObserverMixinFromDelegate(instance, delegate);
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
    return pipe(createPairwiseObserver, Observable_liftEnumerableOperator, returns);
})();
export default Observable_pairwise;

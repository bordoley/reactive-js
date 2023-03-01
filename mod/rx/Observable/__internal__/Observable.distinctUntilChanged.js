/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_distinctUntilChanged from "../../../containers/StatefulContainer/__internal__/StatefulContainer.distinctUntilChanged.js";
import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const createDistinctUntilChangedObserver = (() => {
        const DistinctUntilChangedObserverMixin_equality = Symbol("DistinctUntilChangedObserverMixin_equality");
        const DistinctUntilChangedObserverMixin_prev = Symbol("DistinctUntilChangedObserverMixin_prev");
        const DistinctUntilChangedObserverMixin_hasValue = Symbol("DistinctUntilChangedObserverMixin_hasValue");
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function DistinctUntilChangedObserverMixin(instance, delegate, equality) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
            instance[DistinctUntilChangedObserverMixin_equality] = equality;
            return instance;
        }, props({
            [DistinctUntilChangedObserverMixin_equality]: none,
            [DistinctUntilChangedObserverMixin_prev]: none,
            [DistinctUntilChangedObserverMixin_hasValue]: false,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const shouldEmit = !this[DistinctUntilChangedObserverMixin_hasValue] ||
                    !this[DistinctUntilChangedObserverMixin_equality](this[DistinctUntilChangedObserverMixin_prev], next);
                if (shouldEmit) {
                    this[DistinctUntilChangedObserverMixin_prev] = next;
                    this[DistinctUntilChangedObserverMixin_hasValue] = true;
                    this[DelegatingLike_delegate][ObserverLike_notify](next);
                }
            },
        }));
    })();
    return pipe(createDistinctUntilChangedObserver, StatefulContainer_distinctUntilChanged(Observable_liftEnumerableOperator));
})();
export default Observable_distinctUntilChanged;

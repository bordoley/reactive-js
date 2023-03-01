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
        const DistinctUntilChangedSinkMixin_equality = Symbol("DistinctUntilChangedSinkMixin_equality");
        const DistinctUntilChangedSinkMixin_prev = Symbol("DistinctUntilChangedSinkMixin_prev");
        const DistinctUntilChangedSinkMixin_hasValue = Symbol("DistinctUntilChangedSinkMixin_hasValue");
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function DistinctUntilChangedSinkMixin(instance, delegate, equality) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
            instance[DistinctUntilChangedSinkMixin_equality] = equality;
            return instance;
        }, props({
            [DistinctUntilChangedSinkMixin_equality]: none,
            [DistinctUntilChangedSinkMixin_prev]: none,
            [DistinctUntilChangedSinkMixin_hasValue]: false,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const shouldEmit = !this[DistinctUntilChangedSinkMixin_hasValue] ||
                    !this[DistinctUntilChangedSinkMixin_equality](this[DistinctUntilChangedSinkMixin_prev], next);
                if (shouldEmit) {
                    this[DistinctUntilChangedSinkMixin_prev] = next;
                    this[DistinctUntilChangedSinkMixin_hasValue] = true;
                    this[DelegatingLike_delegate][ObserverLike_notify](next);
                }
            },
        }));
    })();
    return pipe(createDistinctUntilChangedObserver, StatefulContainer_distinctUntilChanged(Observable_liftEnumerableOperator));
})();
export default Observable_distinctUntilChanged;

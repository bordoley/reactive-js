/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __DistinctUntilChangedObserver_equality, __DistinctUntilChangedObserver_hasValue, __DistinctUntilChangedObserver_prev, } from "../../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { none, partial, pipe, strictEquality, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const createDistinctUntilChangedObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function DistinctUntilChangedObserver(instance, delegate, equality) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(Delegating_mixin(), instance, delegate);
            instance[__DistinctUntilChangedObserver_equality] = equality;
            return instance;
        }, props({
            [__DistinctUntilChangedObserver_equality]: none,
            [__DistinctUntilChangedObserver_prev]: none,
            [__DistinctUntilChangedObserver_hasValue]: false,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const shouldEmit = !this[__DistinctUntilChangedObserver_hasValue] ||
                    !this[__DistinctUntilChangedObserver_equality](this[__DistinctUntilChangedObserver_prev], next);
                if (shouldEmit) {
                    this[__DistinctUntilChangedObserver_prev] = next;
                    this[__DistinctUntilChangedObserver_hasValue] = true;
                    this[DelegatingLike_delegate][ObserverLike_notify](next);
                }
            },
        }));
    })();
    return ((options) => {
        const { equality = strictEquality } = options ?? {};
        return pipe(createDistinctUntilChangedObserver, partial(equality), Enumerable_lift);
    });
})();
export default Observable_distinctUntilChanged;

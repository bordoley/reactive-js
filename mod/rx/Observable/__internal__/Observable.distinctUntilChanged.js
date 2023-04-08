/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DistinctUntilChangedObserver_equality, DistinctUntilChangedObserver_hasValue, DistinctUntilChangedObserver_prev, } from "../../../__internal__/symbols.js";
import { none, partial, pipe, strictEquality, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const createDistinctUntilChangedObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin(), delegatingMixin()), function DistinctUntilChangedObserver(instance, delegate, equality) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(delegatingMixin(), instance, delegate);
            instance[DistinctUntilChangedObserver_equality] = equality;
            return instance;
        }, props({
            [DistinctUntilChangedObserver_equality]: none,
            [DistinctUntilChangedObserver_prev]: none,
            [DistinctUntilChangedObserver_hasValue]: false,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const shouldEmit = !this[DistinctUntilChangedObserver_hasValue] ||
                    !this[DistinctUntilChangedObserver_equality](this[DistinctUntilChangedObserver_prev], next);
                if (shouldEmit) {
                    this[DistinctUntilChangedObserver_prev] = next;
                    this[DistinctUntilChangedObserver_hasValue] = true;
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

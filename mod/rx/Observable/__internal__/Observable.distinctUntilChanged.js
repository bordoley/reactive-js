/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DistinctUntilChangedObserver_equality, DistinctUntilChangedObserver_hasValue, DistinctUntilChangedObserver_prev, } from "../../../__internal__/symbols.js";
import { none, partial, pipe, strictEquality, } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { QueueableLike_maxBufferSize } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const createDistinctUntilChangedObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function DistinctUntilChangedObserver(instance, delegate, equality) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_maxBufferSize]);
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
        const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
        return pipe(createDistinctUntilChangedObserver, partial(equality), Observable_liftEnumerableOperator);
    });
})();
export default Observable_distinctUntilChanged;

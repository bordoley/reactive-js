/// <reference types="./Observable.keep.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { KeepObserver_predicate } from "../../../__internal__/symbols.js";
import { none, partial, pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_keep = /*@__PURE__*/ (() => {
    const createKeepObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function KeepObserver(instance, delegate, predicate) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_capacity], delegate[QueueableLike_backpressureStrategy]);
            instance[KeepObserver_predicate] = predicate;
            return instance;
        }, props({
            [KeepObserver_predicate]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                if (this[KeepObserver_predicate](next)) {
                    this[DelegatingLike_delegate][ObserverLike_notify](next);
                }
            },
        }));
    })();
    return (predicate) => pipe(createKeepObserver, partial(predicate), Observable_liftEnumerableOperator);
})();
export default Observable_keep;

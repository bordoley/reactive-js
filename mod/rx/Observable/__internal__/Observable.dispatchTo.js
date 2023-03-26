/// <reference types="./Observable.dispatchTo.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { bindMethod, isFunction, none, partial, pipe, } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { SchedulerLike_requestYield } from "../../../scheduling.js";
import { QueueableLike_maxBufferSize, QueueableLike_push, } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_dispatchTo = /*@__PURE__*/ (() => {
    const createDispatchToObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function DispatchToObserver(instance, delegate, effect) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_maxBufferSize]);
            instance.d = effect;
            return instance;
        }, props({
            d: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                if (!this.d(next)) {
                    this[DispatcherLike_scheduler][SchedulerLike_requestYield]();
                }
                this[DelegatingLike_delegate][ObserverLike_notify](next);
            },
        }));
    })();
    return ((push) => {
        const effect = isFunction(push)
            ? push
            : bindMethod(push, QueueableLike_push);
        return pipe(createDispatchToObserver, partial(effect), Observable_liftEnumerableOperator);
    });
})();
export default Observable_dispatchTo;

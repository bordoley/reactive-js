/// <reference types="./Observable.enqueue.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EnqueueObserver_effect } from "../../../__internal__/symbols.js";
import { bindMethod, isFunction, none, partial, pipe, } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { SchedulerLike_requestYield } from "../../../scheduling.js";
import { QueueableLike_enqueue } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, { initObserverMixinFromDelegate, } from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_enqueue = /*@__PURE__*/ (() => {
    const createEnqueueObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function EnqueueObserver(instance, delegate, effect) {
            init(Disposable_delegatingMixin(), instance, delegate);
            initObserverMixinFromDelegate(instance, delegate);
            instance[EnqueueObserver_effect] = effect;
            return instance;
        }, props({
            [EnqueueObserver_effect]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                if (!this[EnqueueObserver_effect](next)) {
                    this[DispatcherLike_scheduler][SchedulerLike_requestYield]();
                }
                this[DelegatingLike_delegate][ObserverLike_notify](next);
            },
        }));
    })();
    return ((queue) => {
        const effect = isFunction(queue)
            ? queue
            : bindMethod(queue, QueueableLike_enqueue);
        return pipe(createEnqueueObserver, partial(effect), Observable_liftEnumerableOperator);
    });
})();
export default Observable_enqueue;

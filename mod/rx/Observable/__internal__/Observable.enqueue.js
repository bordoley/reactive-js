/// <reference types="./Observable.enqueue.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __EnqueueObserver_effect } from "../../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.internal.js";
import { bindMethod, isFunction, none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { SchedulerLike_requestYield } from "../../../scheduling.js";
import { QueueableLike_enqueue } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_enqueue = /*@__PURE__*/ (() => {
    const createEnqueueObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function EnqueueObserver(instance, delegate, effect) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(Delegating_mixin(), instance, delegate);
            instance[__EnqueueObserver_effect] = effect;
            return instance;
        }, props({
            [__EnqueueObserver_effect]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                if (!this[__EnqueueObserver_effect](next)) {
                    this[SchedulerLike_requestYield]();
                }
                this[DelegatingLike_delegate][ObserverLike_notify](next);
            },
        }));
    })();
    return ((queue) => {
        const effect = isFunction(queue)
            ? queue
            : bindMethod(queue, QueueableLike_enqueue);
        return pipe(createEnqueueObserver, partial(effect), Enumerable_lift);
    });
})();
export default Observable_enqueue;

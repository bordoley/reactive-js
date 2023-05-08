/// <reference types="./Observer.createEnqueueObserver.d.ts" />

import { DelegatingLike_delegate, } from "../../../__internal__/core.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __EnqueueObserver_queue } from "../../../__internal__/symbols.js";
import { ObserverLike_notify, QueueableLike_enqueue, SchedulerLike_requestYield, } from "../../../core.js";
import Delegating_mixin from "../../../core/Delegating/__internal__/Delegating.mixin.js";
import { none } from "../../../functions.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createEnqueueObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function EnqueueObserver(instance, delegate, queue) {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__EnqueueObserver_queue] = queue;
        return instance;
    }, props({
        [__EnqueueObserver_queue]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            if (!this[__EnqueueObserver_queue][QueueableLike_enqueue](next)) {
                this[SchedulerLike_requestYield]();
            }
            this[DelegatingLike_delegate][ObserverLike_notify](next);
        },
    }));
})();
export default Observer_createEnqueueObserver;

/// <reference types="./Scheduler.delegatingMixin.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { __DelegatingSchedulerImplementationMixin_delegate } from "../../__internal__/symbols.js";
import { none, pipe } from "../../functions.js";
import { SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerLike_yield, } from "../../types.js";
const Scheduler_delegatingMixin = /*@__PURE__*/ (() => {
    return mix(function DelegatingSchedulerImplementationMixin(instance, delegate) {
        instance[__DelegatingSchedulerImplementationMixin_delegate] = delegate;
        return instance;
    }, props({
        [__DelegatingSchedulerImplementationMixin_delegate]: none,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            return this[__DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_inContinuation];
        },
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[__DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_maxYieldInterval];
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[__DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[__DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[__DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[__DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_schedule](continuation, options), Disposable_addTo(this, { ignoreChildErrors: true }));
        },
        [SchedulerLike_yield](delay) {
            this[__DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_yield](delay);
        },
    });
})();
export default Scheduler_delegatingMixin;

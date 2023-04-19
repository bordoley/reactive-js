/// <reference types="./Scheduler.delegatingMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { __DelegatingSchedulerMixin_delegate } from "../../../__internal__/symbols.js";
import { none, pipe, unsafeCast, } from "../../../functions.js";
import { SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerLike_yield, } from "../../../scheduling.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
const Scheduler_delegatingMixin = /*@__PURE__*/ (() => {
    return mix(function DelegatingSchedulerMixin(instance, delegate) {
        instance[__DelegatingSchedulerMixin_delegate] = delegate;
        return instance;
    }, props({
        [__DelegatingSchedulerMixin_delegate]: none,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            return this[__DelegatingSchedulerMixin_delegate][SchedulerLike_inContinuation];
        },
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[__DelegatingSchedulerMixin_delegate][SchedulerLike_maxYieldInterval];
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[__DelegatingSchedulerMixin_delegate][SchedulerLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[__DelegatingSchedulerMixin_delegate][SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[__DelegatingSchedulerMixin_delegate][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[__DelegatingSchedulerMixin_delegate][SchedulerLike_schedule](continuation, options), Disposable_addToIgnoringChildErrors(this));
        },
        [SchedulerLike_yield](delay) {
            this[__DelegatingSchedulerMixin_delegate][SchedulerLike_yield](delay);
        },
    });
})();
export default Scheduler_delegatingMixin;

/// <reference types="./Scheduler.delegatingMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { SchedulerDelegatingMixin_delegate } from "../../../__internal__/symbols.js";
import { none, pipe, unsafeCast } from "../../../functions.js";
import { SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../scheduling.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
const Scheduler_delegatingMixin = /*@__PURE__*/ (() => {
    return mix(function DelegatingSchedulerMixin(instance, delegate) {
        instance[SchedulerDelegatingMixin_delegate] = delegate;
        return instance;
    }, props({
        [SchedulerDelegatingMixin_delegate]: none,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            return this[SchedulerDelegatingMixin_delegate][SchedulerLike_inContinuation];
        },
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[SchedulerDelegatingMixin_delegate][SchedulerLike_maxYieldInterval];
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[SchedulerDelegatingMixin_delegate][SchedulerLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[SchedulerDelegatingMixin_delegate][SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[SchedulerDelegatingMixin_delegate][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[SchedulerDelegatingMixin_delegate][SchedulerLike_schedule](continuation, options), Disposable_addToIgnoringChildErrors(this));
        },
    });
})();
export default Scheduler_delegatingMixin;

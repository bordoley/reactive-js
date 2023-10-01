/// <reference types="./DelegatingSchedulerMixin.d.ts" />

import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerLike_yield, } from "../../concurrent.js";
import { none, pipe } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
const DelegatingSchedulerMixin = /*@__PURE__*/ (() => {
    const DelegatingSchedulerMixin_delegate = Symbol("DelegatingSchedulerMixin_delegate");
    return mix(function DelegatingSchedulerMixin(instance, delegate) {
        instance[DelegatingSchedulerMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingSchedulerMixin_delegate]: none,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            return this[DelegatingSchedulerMixin_delegate][SchedulerLike_inContinuation];
        },
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[DelegatingSchedulerMixin_delegate][SchedulerLike_maxYieldInterval];
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[DelegatingSchedulerMixin_delegate][SchedulerLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[DelegatingSchedulerMixin_delegate][SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[DelegatingSchedulerMixin_delegate][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[DelegatingSchedulerMixin_delegate][SchedulerLike_schedule](continuation, options), Disposable.addTo(this, { ignoreChildErrors: true }));
        },
        [SchedulerLike_yield](delay) {
            this[DelegatingSchedulerMixin_delegate][SchedulerLike_yield](delay);
        },
    });
})();
export default DelegatingSchedulerMixin;

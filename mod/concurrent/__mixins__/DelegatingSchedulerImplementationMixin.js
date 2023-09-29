/// <reference types="./DelegatingSchedulerImplementationMixin.d.ts" />

import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerLike_yield, } from "../../concurrent.js";
import { none, pipe } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
const DelegatingSchedulerImplementationMixin = /*@__PURE__*/ (() => {
    const DelegatingSchedulerImplementationMixin_delegate = Symbol("DelegatingSchedulerImplementationMixin_delegate");
    return mix(function DelegatingSchedulerImplementationMixin(instance, delegate) {
        instance[DelegatingSchedulerImplementationMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingSchedulerImplementationMixin_delegate]: none,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            return this[DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_inContinuation];
        },
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_maxYieldInterval];
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_schedule](continuation, options), Disposable.addTo(this, { ignoreChildErrors: true }));
        },
        [SchedulerLike_yield](delay) {
            this[DelegatingSchedulerImplementationMixin_delegate][SchedulerLike_yield](delay);
        },
    });
})();
export default DelegatingSchedulerImplementationMixin;

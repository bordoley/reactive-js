/// <reference types="./DelegatingSchedulerMixin.d.ts" />

import { mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { bind, none, pipe } from "../../functions.js";
import { SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
const DelegatingSchedulerMixin = 
/*@__PURE__*/ (() => {
    const DelegatingSchedulerMixin_delegate = Symbol("DelegatingSchedulerMixin_delegate");
    const DelegatingSchedulerMixin_scheduler = Symbol("DelegatingSchedulerMixin_scheduler");
    const DelegatingSchedulerMixin_scheduleCallback = Symbol("DelegatingSchedulerMixin_scheduleCallback");
    return mix(function DelegatingSchedulerMixin(delegate) {
        this[DelegatingSchedulerMixin_delegate] = delegate;
        this[DelegatingSchedulerMixin_scheduler] =
            delegate[DelegatingSchedulerMixin_scheduler] ?? delegate;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[DelegatingSchedulerMixin_scheduleCallback] =
            function ObserverMixinSchedulerCallback(ctx) {
                instance[SchedulerLike_inContinuation] = true;
                this(ctx);
                instance[SchedulerLike_inContinuation] = false;
            };
        return this;
    }, props({
        [DelegatingSchedulerMixin_delegate]: none,
        [DelegatingSchedulerMixin_scheduler]: none,
        [DelegatingSchedulerMixin_scheduleCallback]: none,
        [SchedulerLike_inContinuation]: false,
    }), proto({
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[DelegatingSchedulerMixin_scheduler][SchedulerLike_maxYieldInterval];
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[DelegatingSchedulerMixin_scheduler][SchedulerLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[DelegatingSchedulerMixin_scheduler][SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[DelegatingSchedulerMixin_scheduler][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[DelegatingSchedulerMixin_delegate][SchedulerLike_schedule](bind(this[DelegatingSchedulerMixin_scheduleCallback], continuation), options), Disposable.addToContainer(this));
        },
    }));
})();
export default DelegatingSchedulerMixin;

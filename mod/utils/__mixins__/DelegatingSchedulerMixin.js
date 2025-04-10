/// <reference types="./DelegatingSchedulerMixin.d.ts" />

import { mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { bind, none, pipe } from "../../functions.js";
import { ClockLike_now, EnumeratorLike_current, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SyncEnumeratorLike_moveNext, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as Iterator from "../__internal__/Iterator.js";
const DelegatingSchedulerMixin = 
/*@__PURE__*/ (() => {
    const DelegatingSchedulerMixin_delegate = Symbol("DelegatingSchedulerMixin_delegate");
    const DelegatingSchedulerMixin_scheduler = Symbol("DelegatingSchedulerMixin_scheduler");
    const DelegatingSchedulerMixin_scheduleCallback = Symbol("DelegatingSchedulerMixin_scheduleCallback");
    return mix(function DelegatingSchedulerMixin(delegate) {
        this[DelegatingSchedulerMixin_delegate] = delegate;
        this[DelegatingSchedulerMixin_scheduler] =
            delegate[DelegatingSchedulerMixin_scheduler] ?? delegate;
        const instance = this;
        this[DelegatingSchedulerMixin_scheduleCallback] =
            function* DelegatingSchedulerMixinSchedulerCallback() {
                const enumerator = pipe(this(instance), Iterator.toSyncEnumerator());
                instance[SchedulerLike_inContinuation] = true;
                while (enumerator[SyncEnumeratorLike_moveNext]()) {
                    const delay = enumerator[EnumeratorLike_current];
                    instance[SchedulerLike_inContinuation] = false;
                    yield delay;
                    instance[SchedulerLike_inContinuation] = true;
                }
                instance[SchedulerLike_inContinuation] = false;
                Disposable.raiseIfDisposedWithError(enumerator);
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
        get [ClockLike_now]() {
            unsafeCast(this);
            return this[DelegatingSchedulerMixin_scheduler][ClockLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[DelegatingSchedulerMixin_scheduler][SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[DelegatingSchedulerMixin_scheduler][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation) {
            return pipe(this[DelegatingSchedulerMixin_delegate][SchedulerLike_schedule](bind(this[DelegatingSchedulerMixin_scheduleCallback], continuation)), Disposable.addToContainer(this));
        },
    }));
})();
export default DelegatingSchedulerMixin;

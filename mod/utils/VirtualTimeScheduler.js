/// <reference types="./VirtualTimeScheduler.d.ts" />

import { MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, unsafeCast, } from "../__internal__/mixins.js";
import { none } from "../functions.js";
import { clampPositiveNonZeroInteger, max } from "../math.js";
import { ClockLike_now, CollectionEnumeratorLike_count, CollectionEnumeratorLike_peek, DisposableLike_dispose, EnumeratorLike_current, QueueableLike_enqueue, SchedulerLike_maxYieldInterval, SyncEnumeratorLike_moveNext, VirtualTimeSchedulerLike_run, } from "../utils.js";
import * as Queue from "./Queue.js";
import * as CurrentScheduler from "./__internal__/CurrentScheduler.js";
import SchedulerMixin, { SchedulerContinuation, SchedulerContinuationLike_dueTime, SchedulerContinuationLike_run, SchedulerMixinHostLike_schedule, SchedulerMixinHostLike_shouldYield, } from "./__mixins__/SchedulerMixin.js";
const VirtualTimeScheduler_maxMicroTaskTicks = Symbol("VirtualTimeScheduler_maxMicroTaskTicks");
const VirtualTimeScheduler_microTaskTicks = Symbol("VirtualTimeScheduler_microTaskTicks");
const VirtualTimeScheduler_queue = Symbol("VirtualTimeScheduler_queue");
const createVirtualTimeSchedulerInstance = /*@__PURE__*/ (() => mixInstanceFactory(include(SchedulerMixin), function VirtualTimeScheduler(maxMicroTaskTicks) {
    init(SchedulerMixin, this);
    this[VirtualTimeScheduler_maxMicroTaskTicks] = maxMicroTaskTicks;
    this[VirtualTimeScheduler_queue] = Queue.createSorted(SchedulerContinuation.compare);
    return this;
}, props({
    [ClockLike_now]: 0,
    [VirtualTimeScheduler_maxMicroTaskTicks]: MAX_SAFE_INTEGER,
    [VirtualTimeScheduler_microTaskTicks]: 0,
    [VirtualTimeScheduler_queue]: none,
}), {
    [SchedulerLike_maxYieldInterval]: 1,
    get [SchedulerMixinHostLike_shouldYield]() {
        unsafeCast(this);
        this[VirtualTimeScheduler_microTaskTicks]++;
        return (this[VirtualTimeScheduler_microTaskTicks] >=
            this[VirtualTimeScheduler_maxMicroTaskTicks]);
    },
    [VirtualTimeSchedulerLike_run]() {
        let queue = none;
        const oldScheduler = CurrentScheduler.set(this);
        while (((queue = this[VirtualTimeScheduler_queue]),
            queue[CollectionEnumeratorLike_count] > 0)) {
            const currentTime = this[ClockLike_now];
            const firstContinuation = queue[CollectionEnumeratorLike_peek];
            const firstContinuationDueTime = firstContinuation?.[SchedulerContinuationLike_dueTime] ??
                MIN_SAFE_INTEGER;
            if (firstContinuationDueTime > currentTime) {
                // Fast forward time to avoid unnecessary loops
                const dueTime = firstContinuationDueTime;
                this[ClockLike_now] = max(dueTime, currentTime + 1);
            }
            this[VirtualTimeScheduler_queue] = Queue.createSorted(SchedulerContinuation.compare);
            this[VirtualTimeScheduler_microTaskTicks] = 0;
            while (queue[SyncEnumeratorLike_moveNext]()) {
                let continuation = queue[EnumeratorLike_current];
                if (continuation[SchedulerContinuationLike_dueTime] > currentTime ||
                    this[VirtualTimeScheduler_microTaskTicks] >=
                        this[VirtualTimeScheduler_maxMicroTaskTicks]) {
                    // copy the task and all other remaining tasks back to the scheduler queue
                    this[VirtualTimeScheduler_queue][QueueableLike_enqueue](continuation);
                    while (queue[SyncEnumeratorLike_moveNext]()) {
                        continuation = queue[EnumeratorLike_current];
                        this[VirtualTimeScheduler_queue][QueueableLike_enqueue](continuation);
                    }
                }
                else {
                    continuation[SchedulerContinuationLike_run]();
                    this[VirtualTimeScheduler_microTaskTicks]++;
                }
            }
            const queueHeadDueTime = this[VirtualTimeScheduler_queue][CollectionEnumeratorLike_peek]?.[SchedulerContinuationLike_dueTime] ?? MIN_SAFE_INTEGER;
            const exceededMaxMicroTicks = this[VirtualTimeScheduler_microTaskTicks] >=
                this[VirtualTimeScheduler_maxMicroTaskTicks];
            if (queueHeadDueTime > currentTime || exceededMaxMicroTicks) {
                this[ClockLike_now] = max(queueHeadDueTime, currentTime + 1);
            }
        }
        CurrentScheduler.set(oldScheduler);
        this[DisposableLike_dispose]();
    },
    [SchedulerMixinHostLike_schedule](continuation) {
        this[VirtualTimeScheduler_queue][QueueableLike_enqueue](continuation);
    },
}))();
export const create = (options = {}) => {
    const maxMicroTaskTicks = clampPositiveNonZeroInteger(options?.maxMicroTaskTicks ?? MAX_SAFE_INTEGER);
    return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};

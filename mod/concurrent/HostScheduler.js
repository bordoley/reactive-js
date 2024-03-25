/// <reference types="./HostScheduler.d.ts" />

import { MAX_VALUE, globalObject } from "../__internal__/constants.js";
import { clampPositiveInteger } from "../__internal__/math.js";
import { include, init, mixInstanceFactory, props, unsafeCast, } from "../__internal__/mixins.js";
import { SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, } from "../concurrent.js";
import { isNone, isSome, none, pipe, pipeLazy, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import PriorityQueueMixin from "../utils/__mixins__/PriorityQueueMixin.js";
import SerialDisposableMixin from "../utils/__mixins__/SerialDisposableMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_dequeue, QueueLike_head, QueueableLike_enqueue, SerialDisposableLike_current, } from "../utils.js";
import { ContinuationLike_dueTime, ContinuationLike_run, } from "./__internal__/Continuation.js";
import * as Continuation from "./__internal__/Continuation.js";
import { ContinuationSchedulerLike_schedule, ContinuationSchedulerLike_shouldYield, } from "./__internal__/ContinuationScheduler.js";
import CurrentTimeSchedulerMixin from "./__mixins__/CurrentTimeSchedulerMixin.js";
import SchedulerMixin from "./__mixins__/SchedulerMixin.js";
export const create = /*@PURE__*/ (() => {
    const HostScheduler_hostSchedulerContinuationDueTime = Symbol("HostScheduler_hostSchedulerContinuationDueTime");
    const HostScheduler_activeContinuation = Symbol("HostScheduler_activeContinuation");
    const peek = (instance) => {
        let continuation = none;
        while (true) {
            continuation = instance[QueueLike_head];
            if (isNone(continuation) || !continuation[DisposableLike_isDisposed]) {
                break;
            }
            instance[QueueLike_dequeue]();
        }
        return continuation;
    };
    const hostSchedulerContinuation = (instance, immmediateOrTimerDisposable) => {
        immmediateOrTimerDisposable[DisposableLike_dispose]();
        const startTime = instance[SchedulerLike_now];
        while (!instance[DisposableLike_isDisposed]) {
            const nextContinuationToRun = peek(instance);
            if (isNone(nextContinuationToRun)) {
                break;
            }
            const dueTime = nextContinuationToRun[ContinuationLike_dueTime];
            const now = instance[SchedulerLike_now];
            const delay = dueTime - now;
            if (delay > 0) {
                scheduleOnHost(instance);
                break;
            }
            const continuation = instance[QueueLike_dequeue]();
            instance[HostScheduler_activeContinuation] = continuation;
            continuation?.[ContinuationLike_run]();
            instance[HostScheduler_activeContinuation] = none;
            const elapsed = instance[SchedulerLike_now] - startTime;
            const shouldYield = elapsed > instance[SchedulerLike_maxYieldInterval];
            if (shouldYield) {
                scheduleOnHost(instance);
                break;
            }
        }
    };
    const scheduleOnHost = (instance) => {
        const now = instance[SchedulerLike_now];
        const hostSchedulerContinuationIsScheduled = !instance[SerialDisposableLike_current][DisposableLike_isDisposed];
        const hostSchedulerContinuationDueTime = instance[HostScheduler_hostSchedulerContinuationDueTime];
        const nextContinuation = peek(instance);
        const nextContinuationDueTime = nextContinuation?.[ContinuationLike_dueTime] ?? MAX_VALUE;
        const inContinuation = instance[SchedulerLike_inContinuation];
        const hostContinuationAlreadyScheduled = hostSchedulerContinuationIsScheduled &&
            hostSchedulerContinuationDueTime <= nextContinuationDueTime;
        if (isNone(nextContinuation) ||
            inContinuation ||
            hostContinuationAlreadyScheduled) {
            return;
        }
        const dueTime = nextContinuation[ContinuationLike_dueTime];
        const delay = clampPositiveInteger(dueTime - now);
        instance[HostScheduler_hostSchedulerContinuationDueTime] = dueTime;
        const disposable = Disposable.create();
        const { setImmediate, setTimeout, clearImmediate, clearTimeout } = globalObject;
        const cleanup = delay > 4 || isNone(setImmediate)
            ? pipeLazy(setTimeout(hostSchedulerContinuation, delay, instance, disposable), clearTimeout)
            : pipeLazy(setImmediate(hostSchedulerContinuation, instance, disposable), clearImmediate);
        pipe(disposable, Disposable.addTo(instance), DisposableContainer.onDisposed(cleanup));
    };
    const createHostSchedulerInstance = mixInstanceFactory(include(CurrentTimeSchedulerMixin, SchedulerMixin, SerialDisposableMixin(), PriorityQueueMixin()), function HostScheduler(instance, maxYieldInterval) {
        instance[SchedulerLike_maxYieldInterval] = maxYieldInterval;
        init(CurrentTimeSchedulerMixin, instance);
        init(SerialDisposableMixin(), instance, Disposable.disposed);
        init(PriorityQueueMixin(), instance, Continuation.compare, none);
        return instance;
    }, props({
        [SchedulerLike_maxYieldInterval]: 300,
        [HostScheduler_hostSchedulerContinuationDueTime]: 0,
        [HostScheduler_activeContinuation]: none,
    }), {
        get [ContinuationSchedulerLike_shouldYield]() {
            unsafeCast(this);
            const now = this[SchedulerLike_now];
            const nextContinuation = peek(this);
            const yieldToNextContinuation = isSome(nextContinuation) &&
                this[HostScheduler_activeContinuation] !== nextContinuation &&
                nextContinuation[ContinuationLike_dueTime] <= now;
            return yieldToNextContinuation;
        },
        [ContinuationSchedulerLike_schedule](continuation) {
            this[QueueableLike_enqueue](continuation);
            scheduleOnHost(this);
        },
    });
    return (options = {}) => {
        const { maxYieldInterval = 300 } = options;
        return createHostSchedulerInstance(clampPositiveInteger(maxYieldInterval));
    };
})();
let globalHostScheduler = none;
export const get = () => {
    if (isNone(globalHostScheduler)) {
        const scheduler = create();
        globalHostScheduler = scheduler;
    }
    return globalHostScheduler;
};
export const setMaxYieldInterval = (maxYieldInterval) => {
    const scheduler = get();
    scheduler[SchedulerLike_maxYieldInterval] =
        clampPositiveInteger(maxYieldInterval);
};

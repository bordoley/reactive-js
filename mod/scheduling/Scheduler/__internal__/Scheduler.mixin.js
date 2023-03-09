/// <reference types="./Scheduler.mixin.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, isNone, isSome, newInstance, none, raiseWithDebugMessage, unsafeCast, } from "../../../functions.js";
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_count, QueueLike_push, } from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import { PullableQueueLike_pull, } from "../../../util/__internal__/util.internal.js";
import { getDelay } from "../../__internal__/Scheduler.options.js";
export const ContinuationSchedulerLike_now = Symbol("ContinuationSchedulerLike_now");
export const ContinuationSchedulerLike_schedule = Symbol("ContinuationSchedulerLike_schedule");
export const ContinuationSchedulerLike_shouldYield = Symbol("ContinuationSchedulerLike_shouldYield");
export const ContinuationLike_run = Symbol("ContinuationLike_run");
export const ContinuationLike_priority = Symbol("ContinuationLike_run");
export const ContinuationLike_continuationScheduler = Symbol("ContinuationLike_continuationScheduler");
export const PrioritySchedulerImplementationLike_runContinuation = Symbol("PrioritySchedulerImplementationLike_runContinuation");
export const PrioritySchedulerImplementationLike_shouldYield = Symbol("PrioritySchedulerImplementationLike_shouldYield");
let currentContinuation = none;
const getContinuation = () => isNone(currentContinuation)
    ? raiseWithDebugMessage("not in continuation")
    : currentContinuation;
class YieldError {
    constructor(delay) {
        this.delay = delay;
    }
}
export const Continuation__yield = (delay = 0) => {
    // FIXME: clean the delay here.
    const continuation = getContinuation();
    const shouldYield = delay > 0 ||
        continuation[QueueLike_count] > 0 ||
        continuation[ContinuationLike_continuationScheduler][ContinuationSchedulerLike_shouldYield];
    if (shouldYield) {
        throw newInstance(YieldError, delay);
    }
};
export const Continuation__now = () => {
    const continuation = getContinuation();
    return continuation[ContinuationLike_continuationScheduler][ContinuationSchedulerLike_now];
};
export const PriorityScheduler_mixin = 
/*@__PURE__*/ (() => {
    const Continuation_childContinuation = Symbol("Continuation_childContinuation");
    const Continuation_effect = Symbol("Continuation_effect");
    const createContinuation = createInstanceFactory(mix(include(Disposable_mixin, IndexedQueue_fifoQueueMixin()), function Continuation(instance, scheduler, effect, priority) {
        init(Disposable_mixin, instance);
        init(IndexedQueue_fifoQueueMixin(), instance);
        instance[ContinuationLike_continuationScheduler] = scheduler;
        instance[Continuation_effect] = effect;
        instance[ContinuationLike_priority] = priority;
        return instance;
    }, props({
        [ContinuationLike_continuationScheduler]: none,
        [ContinuationLike_priority]: 0,
        [Continuation_childContinuation]: none,
        [Continuation_effect]: none,
    }), {
        get [ContinuationSchedulerLike_now]() {
            unsafeCast(this);
            return this[ContinuationLike_continuationScheduler][ContinuationSchedulerLike_now];
        },
        get [ContinuationSchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[ContinuationLike_continuationScheduler][ContinuationSchedulerLike_shouldYield];
        },
        [ContinuationLike_run]() {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            const scheduler = this[ContinuationLike_continuationScheduler];
            const oldContinuation = currentContinuation;
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            currentContinuation = this;
            // Run any inner continuations first.
            let head = none;
            while (((head = this[PullableQueueLike_pull]()), isSome(head))) {
                if (!head[DisposableLike_isDisposed]) {
                    this[Continuation_childContinuation] = head;
                    head[ContinuationLike_run]();
                    this[Continuation_childContinuation] = none;
                }
                const shouldYield = scheduler[ContinuationSchedulerLike_shouldYield];
                if (shouldYield && !this[DisposableLike_isDisposed]) {
                    currentContinuation = oldContinuation;
                    scheduler[ContinuationSchedulerLike_schedule](this);
                    return;
                }
            }
            let err = none;
            let yieldError = none;
            try {
                this[Continuation_effect]();
            }
            catch (e) {
                if (e instanceof YieldError) {
                    yieldError = e;
                }
                else {
                    err = error(e);
                }
            }
            currentContinuation = oldContinuation;
            if (isSome(yieldError) && !this[DisposableLike_isDisposed]) {
                scheduler[ContinuationSchedulerLike_schedule](this, yieldError);
            }
            else {
                this[DisposableLike_dispose](err);
            }
            // If the current continuation is being rescheduled with delay,
            // reschedule all its children on the parent.
            if ((isSome(yieldError) && yieldError.delay > 0) ||
                this[DisposableLike_isDisposed]) {
                while (((head = this[PullableQueueLike_pull]()), isSome(head))) {
                    if (!head[DisposableLike_isDisposed]) {
                        scheduler[ContinuationSchedulerLike_schedule](head);
                    }
                }
            }
        },
        [ContinuationSchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            const childContinuation = this[Continuation_childContinuation];
            continuation[ContinuationLike_continuationScheduler] = this;
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            if (delay > 0 || this[DisposableLike_isDisposed]) {
                this[ContinuationLike_continuationScheduler][ContinuationSchedulerLike_schedule](continuation, options);
            }
            else if (isSome(childContinuation) &&
                childContinuation !== continuation &&
                !childContinuation[DisposableLike_isDisposed]) {
                childContinuation[ContinuationSchedulerLike_schedule](continuation, options);
            }
            else {
                this[QueueLike_push](continuation);
            }
        },
    }));
    const SchedulerMixin_yieldRequested = Symbol("SchedulerMixin_yieldRequested");
    const SchedulerMixin_currentContinuation = Symbol("SchedulerMixin_currentContinuation");
    return mix(include(Disposable_mixin), function SchedulerMixin(instance) {
        init(Disposable_mixin, instance);
        return instance;
    }, props({
        [SchedulerMixin_currentContinuation]: none,
        [SchedulerMixin_yieldRequested]: false,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            const currentContinuation = this[SchedulerMixin_currentContinuation];
            return isSome(currentContinuation);
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            const inContinuation = this[SchedulerLike_inContinuation];
            const yieldRequested = this[SchedulerMixin_yieldRequested];
            return (inContinuation &&
                (yieldRequested ||
                    this[PrioritySchedulerImplementationLike_shouldYield]));
        },
        get [ContinuationSchedulerLike_now]() {
            unsafeCast(this);
            return this[SchedulerLike_now];
        },
        get [ContinuationSchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[SchedulerMixin_yieldRequested] = true;
        },
        [SchedulerLike_schedule](effect, options) {
            // FIXME: Cleanup the options
            const delay = getDelay(options);
            const { priority = 0 } = options !== null && options !== void 0 ? options : {};
            const continuation = createContinuation(this, effect, priority);
            const currentContinuation = this[SchedulerMixin_currentContinuation];
            if (delay > 0 ||
                isNone(currentContinuation) ||
                currentContinuation[ContinuationLike_priority] !== priority) {
                this[ContinuationSchedulerLike_schedule](continuation, options);
            }
            else {
                currentContinuation[ContinuationSchedulerLike_schedule](continuation);
            }
            return continuation;
        },
        [PrioritySchedulerImplementationLike_runContinuation](continuation) {
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            this[SchedulerMixin_currentContinuation] = continuation;
            this[SchedulerMixin_yieldRequested] = false;
            continuation[ContinuationLike_run]();
            this[SchedulerMixin_yieldRequested] = false;
            this[SchedulerMixin_currentContinuation] = none;
        },
    });
})();

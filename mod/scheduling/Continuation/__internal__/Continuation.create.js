/// <reference types="./Continuation.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, isNone, isSome, newInstance, none, raiseWithDebugMessage, } from "../../../functions.js";
import { ContinuationLike_run, ContinuationLike_scheduler, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import { PullableQueueLike_pull, } from "../../../util/__internal__/util.internal.js";
class YieldError {
    constructor(delay) {
        this.delay = delay;
    }
}
const Continuation_effect = Symbol("Continuation_effect");
let currentContinuation = none;
export const Continuation__getCurrentContinuation = () => currentContinuation;
export const Continuation__yield = (delay = 0) => {
    const continuation = isNone(currentContinuation)
        ? raiseWithDebugMessage("not in continuation")
        : currentContinuation;
    if (delay > 0 ||
        continuation[ContinuationLike_scheduler][SchedulerLike_shouldYield]) {
        throw newInstance(YieldError, delay);
    }
};
export const Continuation__now = () => {
    const continuation = isNone(currentContinuation)
        ? raiseWithDebugMessage("not in continuation")
        : currentContinuation;
    return continuation[ContinuationLike_scheduler][SchedulerLike_now];
};
const Continuation_create = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin, IndexedQueue_fifoQueueMixin()), function Continuation(instance, scheduler, effect) {
    init(Disposable_mixin, instance);
    init(IndexedQueue_fifoQueueMixin(), instance);
    instance[ContinuationLike_scheduler] = scheduler;
    instance[Continuation_effect] = effect;
    return instance;
}, props({
    [ContinuationLike_scheduler]: none,
    [Continuation_effect]: none,
}), {
    [ContinuationLike_run]() {
        if (!this[DisposableLike_isDisposed]) {
            let err = none;
            let yieldError = none;
            let shouldYield = false;
            const oldContinuation = currentContinuation;
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            currentContinuation = this;
            // Run any inner continuations first.
            let head = none;
            while (((head = this[PullableQueueLike_pull]()), isSome(head))) {
                if (!head[DisposableLike_isDisposed]) {
                    head[ContinuationLike_run]();
                }
                shouldYield =
                    this[ContinuationLike_scheduler][SchedulerLike_shouldYield];
                if (shouldYield) {
                    currentContinuation = oldContinuation;
                    this[ContinuationLike_scheduler][SchedulerLike_schedule](this);
                    return;
                }
            }
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
            if (isSome(yieldError) && yieldError.delay > 0) {
                while (((head = this[PullableQueueLike_pull]()), isSome(head))) {
                    this[ContinuationLike_scheduler][SchedulerLike_schedule](head);
                }
            }
            if (isSome(yieldError)) {
                this[ContinuationLike_scheduler][SchedulerLike_schedule](this, yieldError);
            }
            else {
                let head = none;
                while (((head = this[PullableQueueLike_pull]()), isSome(head))) {
                    this[ContinuationLike_scheduler][SchedulerLike_schedule](head);
                }
                this[DisposableLike_dispose](err);
            }
        }
    },
})))();
export default Continuation_create;

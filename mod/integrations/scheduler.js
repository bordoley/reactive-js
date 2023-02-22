/// <reference types="./scheduler.d.ts" />

import { unstable_IdlePriority, unstable_ImmediatePriority, unstable_LowPriority, unstable_NormalPriority, unstable_UserBlockingPriority, unstable_cancelCallback, unstable_now, 
// @ts-ignore-next-line
unstable_requestPaint, unstable_scheduleCallback, unstable_shouldYield, } from "scheduler";
import { createInstanceFactory, include, init, mix, props, } from "../__internal__/mixins.js";
import { none, pipe, pipeLazy, unsafeCast } from "../functions.js";
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../scheduling.js";
import * as Continuation from "../scheduling/Continuation.js";
import * as PriorityScheduler from "../scheduling/PriorityScheduler.js";
import * as Scheduler from "../scheduling/Scheduler.js";
import { getDelay } from "../scheduling/__internal__/Scheduler.options.js";
import * as Disposable from "../util/Disposable.js";
import Disposable_mixin from "../util/Disposable/__internal__/Disposable.mixin.js";
const createPriorityScheduler = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_mixin), function ReactPriorityScheduler(instance) {
        init(Disposable_mixin, instance);
        return instance;
    }, props({
        [SchedulerLike_inContinuation]: false,
    }), {
        get [SchedulerLike_now]() {
            return unstable_now();
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return Scheduler.isInContinuation(this) && unstable_shouldYield();
        },
        [SchedulerLike_requestYield]() {
            unstable_requestPaint();
        },
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            const { priority } = options;
            pipe(this, Disposable.addIgnoringChildErrors(continuation));
            if (Disposable.isDisposed(continuation)) {
                return;
            }
            const callback = () => {
                pipe(callbackNodeDisposable, Disposable.dispose());
                this[SchedulerLike_inContinuation] = true;
                Continuation.run(continuation);
                this[SchedulerLike_inContinuation] = false;
            };
            const callbackNode = unstable_scheduleCallback(priority, callback, delay > 0 ? { delay } : none);
            const callbackNodeDisposable = pipe(Disposable.create(), Disposable.onDisposed(pipeLazy(callbackNode, unstable_cancelCallback)), Disposable.addTo(continuation));
        },
    }));
})();
const createSchedulerFactory = (priority) => () => pipe(createPriorityScheduler(), PriorityScheduler.toScheduler(priority));
export const createSchedulerWithIdlePriority = 
/*@__PURE__*/ createSchedulerFactory(unstable_IdlePriority);
export const createSchedulerWithImmediatePriority = 
/*@__PURE__*/ createSchedulerFactory(unstable_ImmediatePriority);
export const createSchedulerWithNormalPriority = 
/*@__PURE__*/ createSchedulerFactory(unstable_NormalPriority);
export const createSchedulerWithLowPriority = 
/*@__PURE__*/ createSchedulerFactory(unstable_LowPriority);
export const createSchedulerWithUserBlockingPriority = 
/*@__PURE__*/ createSchedulerFactory(unstable_UserBlockingPriority);

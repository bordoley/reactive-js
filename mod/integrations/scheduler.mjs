/// <reference types="./scheduler.d.ts" />
import { unstable_now, unstable_shouldYield, unstable_requestPaint, unstable_scheduleCallback, unstable_cancelCallback, unstable_IdlePriority, unstable_ImmediatePriority, unstable_NormalPriority, unstable_LowPriority, unstable_UserBlockingPriority } from 'scheduler';
import { createInstanceFactory, mix, include, init, props } from '../__internal__/mixins.mjs';
import { unsafeCast, pipe, none, pipeLazy } from '../functions.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../scheduling.mjs';
import { run } from '../scheduling/Continuation.mjs';
import { toScheduler } from '../scheduling/PriorityScheduler.mjs';
import { isInContinuation } from '../scheduling/Scheduler.mjs';
import { getDelay } from '../scheduling/__internal__/Scheduler.options.mjs';
import { addIgnoringChildErrors, isDisposed, dispose, create, onDisposed, addTo } from '../util/Disposable.mjs';
import Disposable_mixin from '../util/__internal__/Disposable/Disposable.mixin.mjs';

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
            return isInContinuation(this) && unstable_shouldYield();
        },
        [SchedulerLike_requestYield]() {
            unstable_requestPaint();
        },
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            const { priority } = options;
            pipe(this, addIgnoringChildErrors(continuation));
            if (isDisposed(continuation)) {
                return;
            }
            const callback = () => {
                pipe(callbackNodeDisposable, dispose());
                this[SchedulerLike_inContinuation] = true;
                run(continuation);
                this[SchedulerLike_inContinuation] = false;
            };
            const callbackNode = unstable_scheduleCallback(priority, callback, delay > 0 ? { delay } : none);
            const callbackNodeDisposable = pipe(create(), onDisposed(pipeLazy(callbackNode, unstable_cancelCallback)), addTo(continuation));
        },
    }));
})();
const createSchedulerFactory = (priority) => () => pipe(createPriorityScheduler(), toScheduler(priority));
const createSchedulerWithIdlePriority = 
/*@__PURE__*/ createSchedulerFactory(unstable_IdlePriority);
const createSchedulerWithImmediatePriority = 
/*@__PURE__*/ createSchedulerFactory(unstable_ImmediatePriority);
const createSchedulerWithNormalPriority = 
/*@__PURE__*/ createSchedulerFactory(unstable_NormalPriority);
const createSchedulerWithLowPriority = 
/*@__PURE__*/ createSchedulerFactory(unstable_LowPriority);
const createSchedulerWithUserBlockingPriority = 
/*@__PURE__*/ createSchedulerFactory(unstable_UserBlockingPriority);

export { createSchedulerWithIdlePriority, createSchedulerWithImmediatePriority, createSchedulerWithLowPriority, createSchedulerWithNormalPriority, createSchedulerWithUserBlockingPriority };

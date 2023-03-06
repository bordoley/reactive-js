/// <reference types="./QueueScheduler.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { max } from "../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { isNone, isSome, none, pipe, unsafeCast, } from "../../functions.js";
import { PauseableSchedulerLike_isPaused, PauseableState_paused, PauseableState_running, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../scheduling.js";
import { DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, QueueLike_count, QueueLike_push, } from "../../util.js";
import Disposable_addIgnoringChildErrors from "../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_disposed from "../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_mixin from "../../util/Disposable/__internal__/Disposable.mixin.js";
import DisposableRef_mixin from "../../util/DisposableRef/__internal__/DisposableRef.mixin.js";
import MutableEnumerator_mixin from "../../util/Enumerator/__internal__/MutableEnumerator.mixin.js";
import PullableQueue_createPriorityQueue from "../../util/PullableQueue/__internal__/PullableQueue.createPriorityQueue.js";
import PullableQueue_peek from "../../util/PullableQueue/__internal__/PullableQueue.peek.js";
import PullableQueue_pull from "../../util/PullableQueue/__internal__/PullableQueue.pull.js";
import { MutableRefLike_current, } from "../../util/__internal__/util.internal.js";
import { Continuation__yield } from "../Continuation/__internal__/Continuation.create.js";
import Continuation_run from "../Continuation/__internal__/Continuation.run.js";
import getCurrentTime from "../Scheduler/__internal__/Scheduler.getCurrentTime.js";
import isInContinuation from "../Scheduler/__internal__/Scheduler.isInContinuation.js";
import schedule from "../Scheduler/__internal__/Scheduler.schedule.js";
import shouldYield from "../Scheduler/__internal__/Scheduler.shouldYield.js";
import { getDelay } from "./Scheduler.options.js";
export const create = 
/*@__PURE__*/ (() => {
    const QueueTask_continuation = Symbol("QueueTask_continuation");
    const QueueTask_dueTime = Symbol("QueueTask_dueTime");
    const QueueTask_priority = Symbol("QueueTask_priority");
    const QueueTask_taskID = Symbol("QueueTask_taskID");
    const delayedComparator = (a, b) => {
        let diff = 0;
        diff = diff !== 0 ? diff : a[QueueTask_dueTime] - b[QueueTask_dueTime];
        diff = diff !== 0 ? diff : a[QueueTask_taskID] - b[QueueTask_taskID];
        return diff;
    };
    const taskComparator = (a, b) => {
        let diff = 0;
        diff = diff !== 0 ? diff : a[QueueTask_priority] - b[QueueTask_priority];
        diff = diff !== 0 ? diff : a[QueueTask_taskID] - b[QueueTask_taskID];
        return diff;
    };
    const peek = (instance) => {
        const { [QueueScheduler_delayed]: delayed, [QueueScheduler_queue]: queue, } = instance;
        const now = getCurrentTime(instance[QueueScheduler_hostScheduler]);
        while (true) {
            const task = PullableQueue_peek(delayed);
            if (isNone(task)) {
                break;
            }
            const taskIsDispose = task[QueueTask_continuation][DisposableLike_isDisposed];
            if (task[QueueTask_dueTime] > now && !taskIsDispose) {
                break;
            }
            PullableQueue_pull(delayed);
            if (!taskIsDispose) {
                queue[QueueLike_push](task);
            }
        }
        let task = none;
        while (true) {
            task = PullableQueue_peek(queue);
            if (isNone(task)) {
                break;
            }
            if (!task[QueueTask_continuation][DisposableLike_isDisposed]) {
                break;
            }
            PullableQueue_pull(queue);
        }
        return task !== null && task !== void 0 ? task : PullableQueue_peek(delayed);
    };
    const priorityShouldYield = (instance, next) => {
        const { [EnumeratorLike_current]: current } = instance;
        return (current !== next &&
            next[QueueTask_dueTime] <=
                getCurrentTime(instance[QueueScheduler_hostScheduler]) &&
            next[QueueTask_priority] > current[QueueTask_priority]);
    };
    const scheduleOnHost = (instance) => {
        var _a;
        const task = peek(instance);
        const continuationActive = !instance[MutableRefLike_current][DisposableLike_isDisposed] &&
            isSome(task) &&
            instance[QueueScheduler_dueTime] <= task[QueueTask_dueTime];
        if (isNone(task) ||
            continuationActive ||
            instance[PauseableSchedulerLike_isPaused]) {
            return;
        }
        const dueTime = task[QueueTask_dueTime];
        const delay = max(dueTime - getCurrentTime(instance[QueueScheduler_hostScheduler]), 0);
        instance[QueueScheduler_dueTime] = dueTime;
        const continuation = (_a = instance[QueueScheduler_hostContinuation]) !== null && _a !== void 0 ? _a : (() => {
            for (let task = peek(instance); isSome(task) && !instance[DisposableLike_isDisposed]; task = peek(instance)) {
                const { [QueueTask_continuation]: continuation, [QueueTask_dueTime]: dueTime, } = task;
                const delay = max(dueTime - getCurrentTime(instance[QueueScheduler_hostScheduler]), 0);
                if (delay === 0) {
                    instance[EnumeratorLike_move]();
                    instance[SchedulerLike_inContinuation] = true;
                    Continuation_run(continuation);
                    instance[SchedulerLike_inContinuation] = false;
                }
                else {
                    instance[QueueScheduler_dueTime] =
                        getCurrentTime(instance[QueueScheduler_hostScheduler]) + delay;
                }
                Continuation__yield(delay);
            }
        });
        instance[QueueScheduler_hostContinuation] = continuation;
        instance[MutableRefLike_current] = pipe(instance[QueueScheduler_hostScheduler], schedule(continuation, { delay }));
    };
    const typedDisposableRefMixin = DisposableRef_mixin();
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const QueueScheduler_delayed = Symbol("QueueScheduler_delayed");
    const QueueScheduler_dueTime = Symbol("QueueScheduler_dueTime");
    const QueueScheduler_hostContinuation = Symbol("QueueScheduler_hostContinuation");
    const QueueScheduler_hostScheduler = Symbol("QueueScheduler_hostScheduler");
    const QueueScheduler_queue = Symbol("QueueScheduler_queue");
    const QueueScheduler_taskIDCounter = Symbol("QueueScheduler_taskIDCounter");
    const QueueScheduler_yieldRequested = Symbol("QueueScheduler_yieldRequested");
    return createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin, typedDisposableRefMixin), function QueueScheduler(instance, host) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(typedDisposableRefMixin, instance, Disposable_disposed);
        instance[QueueScheduler_delayed] =
            PullableQueue_createPriorityQueue(delayedComparator);
        instance[QueueScheduler_queue] =
            PullableQueue_createPriorityQueue(taskComparator);
        instance[QueueScheduler_hostScheduler] = host;
        return instance;
    }, props({
        [SchedulerLike_inContinuation]: false,
        [QueueScheduler_delayed]: none,
        [QueueScheduler_dueTime]: 0,
        [QueueScheduler_hostScheduler]: none,
        [QueueScheduler_hostContinuation]: none,
        [PauseableSchedulerLike_isPaused]: false,
        [QueueScheduler_queue]: none,
        [QueueScheduler_taskIDCounter]: 0,
        [QueueScheduler_yieldRequested]: false,
    }), {
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return getCurrentTime(this[QueueScheduler_hostScheduler]);
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            const { [SchedulerLike_inContinuation]: inContinuation, [QueueScheduler_yieldRequested]: yieldRequested, } = this;
            if (inContinuation) {
                this[QueueScheduler_yieldRequested] = false;
            }
            const next = peek(this);
            return (inContinuation &&
                (yieldRequested ||
                    this[DisposableLike_isDisposed] ||
                    !this[EnumeratorLike_hasCurrent] ||
                    this[PauseableSchedulerLike_isPaused] ||
                    (isSome(next) ? priorityShouldYield(this, next) : false) ||
                    shouldYield(this[QueueScheduler_hostScheduler])));
        },
        get [QueueLike_count]() {
            unsafeCast(this);
            // Intentional. This is a little wierd because though the QueueScheduler
            // technically implements the QueuableLike interface, it doesn't ever
            // actually queue up the actions. It's somewhat of a weird API glitch
            // that enables a uniform Pausable interface between PausableScheduler
            // and Flowable (which does queue and dispatch its pause events).
            return 0;
        },
        [QueueLike_push](req) {
            const nextState = req(this[PauseableSchedulerLike_isPaused]
                ? PauseableState_paused
                : PauseableState_running);
            if (nextState === PauseableState_paused) {
                this[PauseableSchedulerLike_isPaused] = true;
                this[MutableRefLike_current] = Disposable_disposed;
            }
            else {
                this[PauseableSchedulerLike_isPaused] = false;
                scheduleOnHost(this);
            }
        },
        [EnumeratorLike_move]() {
            // First fast forward through disposed tasks.
            peek(this);
            const task = PullableQueue_pull(this[QueueScheduler_queue]);
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
            return this[EnumeratorLike_hasCurrent];
        },
        [SchedulerLike_requestYield]() {
            this[QueueScheduler_yieldRequested] = true;
        },
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            const { priority } = options !== null && options !== void 0 ? options : {};
            pipe(this, Disposable_addIgnoringChildErrors(continuation));
            if (!continuation[DisposableLike_isDisposed]) {
                const now = getCurrentTime(this[QueueScheduler_hostScheduler]);
                const dueTime = max(now + delay, now);
                const task = isInContinuation(this) &&
                    this[EnumeratorLike_hasCurrent] &&
                    this[EnumeratorLike_current][QueueTask_continuation] ===
                        continuation &&
                    delay <= 0
                    ? this[EnumeratorLike_current]
                    : {
                        [QueueTask_taskID]: this[QueueScheduler_taskIDCounter]++,
                        [QueueTask_continuation]: continuation,
                        [QueueTask_dueTime]: dueTime,
                        [QueueTask_priority]: isSome(priority)
                            ? max(priority, 0)
                            : MAX_SAFE_INTEGER,
                    };
                const { [QueueScheduler_delayed]: delayed, [QueueScheduler_queue]: queue, } = this;
                const targetQueue = dueTime > now ? delayed : queue;
                targetQueue[QueueLike_push](task);
                scheduleOnHost(this);
            }
        },
    }));
})();

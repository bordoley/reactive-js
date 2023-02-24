/// <reference types="./QueueScheduler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { MAX_SAFE_INTEGER } from "../../constants.js";
import { isNone, isSome, max, none, pipe, unsafeCast, } from "../../functions.js";
import { EnumeratorLike_current, SourceLike_move, } from "../../ix.js";
import Enumerator_getCurrent from "../../ix/Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "../../ix/Enumerator/__internal__/Enumerator.hasCurrent.js";
import MutableEnumerator_mixin from "../../ix/Enumerator/__internal__/MutableEnumerator.mixin.js";
import Source_move from "../../ix/Source/__internal__/Source.move.js";
import { DispatcherLike_scheduler, PauseableState_paused, PauseableState_running, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../scheduling.js";
import { QueueableLike_count, QueueableLike_push, } from "../../util.js";
import Disposable_addIgnoringChildErrors from "../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_disposed from "../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_isDisposed from "../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../util/Disposable/__internal__/Disposable.mixin.js";
import DisposableRef_mixin from "../../util/DisposableRef/__internal__/DisposableRef.mixin.js";
import PullableQueue_peek from "../../util/PullableQueue/__internal__/PullableQueue.peek.js";
import PullableQueue_priorityQueueMixin from "../../util/PullableQueue/__internal__/PullableQueue.priorityQueueMixin.js";
import PullableQueue_pull from "../../util/PullableQueue/__internal__/PullableQueue.pull.js";
import { MutableRefLike_current, } from "../../util/__internal__/util.internal.js";
import { Continuation__yield } from "../Continuation/__internal__/Continuation.create.js";
import Continuation_run from "../Continuation/__internal__/Continuation.run.js";
import getCurrentTime from "../Scheduler/__internal__/Scheduler.getCurrentTime.js";
import isInContinuation from "../Scheduler/__internal__/Scheduler.isInContinuation.js";
import schedule from "../Scheduler/__internal__/Scheduler.schedule.js";
import shouldYield from "../Scheduler/__internal__/Scheduler.shouldYield.js";
import { getDelay } from "./Scheduler.options.js";
const createPriorityQueue = /*@__PURE__*/ (() => createInstanceFactory(PullableQueue_priorityQueueMixin()))();
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
        const now = getCurrentTime(instance[DispatcherLike_scheduler]);
        while (true) {
            const task = PullableQueue_peek(delayed);
            if (isNone(task)) {
                break;
            }
            const taskIsDispose = Disposable_isDisposed(task[QueueTask_continuation]);
            if (task[QueueTask_dueTime] > now && !taskIsDispose) {
                break;
            }
            PullableQueue_pull(delayed);
            if (!taskIsDispose) {
                queue[QueueableLike_push](task);
            }
        }
        let task = none;
        while (true) {
            task = PullableQueue_peek(queue);
            if (isNone(task)) {
                break;
            }
            if (!Disposable_isDisposed(task[QueueTask_continuation])) {
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
                getCurrentTime(instance[DispatcherLike_scheduler]) &&
            next[QueueTask_priority] > current[QueueTask_priority]);
    };
    const scheduleOnHost = (instance) => {
        var _a;
        const task = peek(instance);
        const continuationActive = !Disposable_isDisposed(instance[MutableRefLike_current]) &&
            isSome(task) &&
            instance[QueueScheduler_dueTime] <= task[QueueTask_dueTime];
        if (isNone(task) ||
            continuationActive ||
            instance[QueueScheduler_isPaused]) {
            return;
        }
        const dueTime = task[QueueTask_dueTime];
        const delay = max(dueTime - getCurrentTime(instance[DispatcherLike_scheduler]), 0);
        instance[QueueScheduler_dueTime] = dueTime;
        const continuation = (_a = instance[QueueScheduler_hostContinuation]) !== null && _a !== void 0 ? _a : (() => {
            for (let task = peek(instance); isSome(task) && !Disposable_isDisposed(instance); task = peek(instance)) {
                const { [QueueTask_continuation]: continuation, [QueueTask_dueTime]: dueTime, } = task;
                const delay = max(dueTime - getCurrentTime(instance[DispatcherLike_scheduler]), 0);
                if (delay === 0) {
                    Source_move(instance);
                    instance[SchedulerLike_inContinuation] = true;
                    Continuation_run(continuation);
                    instance[SchedulerLike_inContinuation] = false;
                }
                else {
                    instance[QueueScheduler_dueTime] =
                        getCurrentTime(instance[DispatcherLike_scheduler]) + delay;
                }
                Continuation__yield(delay);
            }
        });
        instance[QueueScheduler_hostContinuation] = continuation;
        instance[MutableRefLike_current] = pipe(instance[DispatcherLike_scheduler], schedule(continuation, { delay }));
    };
    const typedDisposableRefMixin = DisposableRef_mixin();
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const QueueScheduler_delayed = Symbol("QueueScheduler_delayed");
    const QueueScheduler_dueTime = Symbol("QueueScheduler_dueTime");
    const QueueScheduler_hostContinuation = Symbol("QueueScheduler_hostContinuation");
    const QueueScheduler_isPaused = Symbol("QueueScheduler_isPaused");
    const QueueScheduler_queue = Symbol("QueueScheduler_queue");
    const QueueScheduler_taskIDCounter = Symbol("QueueScheduler_taskIDCounter");
    const QueueScheduler_yieldRequested = Symbol("QueueScheduler_yieldRequested");
    return createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin, typedDisposableRefMixin), function QueueScheduler(instance, host) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(typedDisposableRefMixin, instance, Disposable_disposed);
        instance[QueueScheduler_delayed] =
            createPriorityQueue(delayedComparator);
        instance[QueueScheduler_queue] = createPriorityQueue(taskComparator);
        instance[DispatcherLike_scheduler] = host;
        return instance;
    }, props({
        [SchedulerLike_inContinuation]: false,
        [QueueScheduler_delayed]: none,
        [QueueScheduler_dueTime]: 0,
        [DispatcherLike_scheduler]: none,
        [QueueScheduler_hostContinuation]: none,
        [QueueScheduler_isPaused]: false,
        [QueueScheduler_queue]: none,
        [QueueScheduler_taskIDCounter]: 0,
        [QueueScheduler_yieldRequested]: false,
    }), {
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return getCurrentTime(this[DispatcherLike_scheduler]);
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
                    Disposable_isDisposed(this) ||
                    !Enumerator_hasCurrent(this) ||
                    this[QueueScheduler_isPaused] ||
                    (isSome(next) ? priorityShouldYield(this, next) : false) ||
                    shouldYield(this[DispatcherLike_scheduler])));
        },
        get [QueueableLike_count]() {
            unsafeCast(this);
            // Intentional. This is a little wierd because though the QueueScheduler
            // technically implements the QueuableLike interface, it doesn't ever
            // actually queue up the actions. It's somewhat of a weird API glitch
            // that enables a uniform Pausable interface between PausableScheduler
            // and Flowable (which does queue and dispatch its pause events).
            return 0;
        },
        [QueueableLike_push](req) {
            const nextState = req(this[QueueScheduler_isPaused]
                ? PauseableState_paused
                : PauseableState_running);
            if (nextState === PauseableState_paused) {
                this[QueueScheduler_isPaused] = true;
                this[MutableRefLike_current] = Disposable_disposed;
            }
            else {
                this[QueueScheduler_isPaused] = false;
                scheduleOnHost(this);
            }
        },
        [SourceLike_move]() {
            // First fast forward through disposed tasks.
            peek(this);
            const task = PullableQueue_pull(this[QueueScheduler_queue]);
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
        },
        [SchedulerLike_requestYield]() {
            this[QueueScheduler_yieldRequested] = true;
        },
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            const { priority } = options !== null && options !== void 0 ? options : {};
            pipe(this, Disposable_addIgnoringChildErrors(continuation));
            if (!Disposable_isDisposed(continuation)) {
                const now = getCurrentTime(this[DispatcherLike_scheduler]);
                const dueTime = max(now + delay, now);
                const task = isInContinuation(this) &&
                    Enumerator_hasCurrent(this) &&
                    Enumerator_getCurrent(this)[QueueTask_continuation] ===
                        continuation &&
                    delay <= 0
                    ? Enumerator_getCurrent(this)
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
                targetQueue[QueueableLike_push](task);
                scheduleOnHost(this);
            }
        },
    }));
})();

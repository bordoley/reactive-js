/// <reference types="./QueueScheduler.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../__internal__/mixins.mjs';
import { MAX_SAFE_INTEGER } from '../../constants.mjs';
import { isNone, none, isSome, max, pipe, unsafeCast } from '../../functions.mjs';
import { EnumeratorLike_current, SourceLike_move } from '../../ix.mjs';
import Enumerator_getCurrent from '../../ix/Enumerator/__internal__/Enumerator.getCurrent.mjs';
import Enumerator_hasCurrent from '../../ix/Enumerator/__internal__/Enumerator.hasCurrent.mjs';
import Source_move from '../../ix/Source/__internal__/Source.move.mjs';
import MutableEnumerator_mixin from '../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../scheduling.mjs';
import { PauseableLike_pause, PauseableLike_resume } from '../../util.mjs';
import Disposable_addIgnoringChildErrors from '../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.mjs';
import Disposable_disposed from '../../util/Disposable/__internal__/Disposable.disposed.mjs';
import Disposable_isDisposed from '../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../util/Disposable/__internal__/Disposable.mixin.mjs';
import DisposableRef_mixin from '../../util/__internal__/DisposableRef/__internal__/DisposableRef.mixin.mjs';
import Queue_create from '../../util/__internal__/Queue/Queue.create.mjs';
import Queue_peek from '../../util/__internal__/Queue/Queue.peek.mjs';
import Queue_pop from '../../util/__internal__/Queue/Queue.pop.mjs';
import Queue_push from '../../util/__internal__/Queue/Queue.push.mjs';
import { MutableRefLike_current } from '../../util/__internal__/util.internal.mjs';
import Continuation_run from '../Continuation/__internal__/Continuation.run.mjs';
import Continuation_yield_ from '../Continuation/__internal__/Continuation.yield.mjs';
import Scheduler_getCurrentTime from '../Scheduler/__internal__/Scheduler.getCurrentTime.mjs';
import Scheduler_isInContinuation from '../Scheduler/__internal__/Scheduler.isInContinuation.mjs';
import Scheduler_schedule from '../Scheduler/__internal__/Scheduler.schedule.mjs';
import Scheduler_shouldYield from '../Scheduler/__internal__/Scheduler.shouldYield.mjs';
import { getDelay } from './Scheduler.options.mjs';

const create = 
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
        const now = Scheduler_getCurrentTime(instance[QueueScheduler_host]);
        while (true) {
            const task = Queue_peek(delayed);
            if (isNone(task)) {
                break;
            }
            const taskIsDispose = Disposable_isDisposed(task[QueueTask_continuation]);
            if (task[QueueTask_dueTime] > now && !taskIsDispose) {
                break;
            }
            Queue_pop(delayed);
            if (!taskIsDispose) {
                Queue_push(queue, task);
            }
        }
        let task = none;
        while (true) {
            task = Queue_peek(queue);
            if (isNone(task)) {
                break;
            }
            if (!Disposable_isDisposed(task[QueueTask_continuation])) {
                break;
            }
            Queue_pop(queue);
        }
        return task !== null && task !== void 0 ? task : Queue_peek(delayed);
    };
    const priorityShouldYield = (instance, next) => {
        const { [EnumeratorLike_current]: current } = instance;
        return (current !== next &&
            next[QueueTask_dueTime] <=
                Scheduler_getCurrentTime(instance[QueueScheduler_host]) &&
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
        const delay = max(dueTime - Scheduler_getCurrentTime(instance[QueueScheduler_host]), 0);
        instance[QueueScheduler_dueTime] = dueTime;
        const continuation = (_a = instance[QueueScheduler_hostContinuation]) !== null && _a !== void 0 ? _a : (() => {
            for (let task = peek(instance); isSome(task) && !Disposable_isDisposed(instance); task = peek(instance)) {
                const { [QueueTask_continuation]: continuation, [QueueTask_dueTime]: dueTime, } = task;
                const delay = max(dueTime - Scheduler_getCurrentTime(instance[QueueScheduler_host]), 0);
                if (delay === 0) {
                    Source_move(instance);
                    instance[SchedulerLike_inContinuation] = true;
                    Continuation_run(continuation);
                    instance[SchedulerLike_inContinuation] = false;
                }
                else {
                    instance[QueueScheduler_dueTime] =
                        Scheduler_getCurrentTime(instance[QueueScheduler_host]) + delay;
                }
                Continuation_yield_({ delay });
            }
        });
        instance[QueueScheduler_hostContinuation] = continuation;
        instance[MutableRefLike_current] = pipe(instance[QueueScheduler_host], Scheduler_schedule(continuation, { delay }));
    };
    const typedDisposableRefMixin = DisposableRef_mixin();
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const QueueScheduler_delayed = Symbol("QueueScheduler_delayed");
    const QueueScheduler_dueTime = Symbol("QueueScheduler_dueTime");
    const QueueScheduler_host = Symbol("QueueScheduler_host");
    const QueueScheduler_hostContinuation = Symbol("QueueScheduler_hostContinuation");
    const QueueScheduler_isPaused = Symbol("QueueScheduler_isPaused");
    const QueueScheduler_queue = Symbol("QueueScheduler_queue");
    const QueueScheduler_taskIDCounter = Symbol("QueueScheduler_taskIDCounter");
    const QueueScheduler_yieldRequested = Symbol("QueueScheduler_yieldRequested");
    return createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin, typedDisposableRefMixin), function QueueScheduler(instance, host) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(typedDisposableRefMixin, instance, Disposable_disposed);
        instance[QueueScheduler_delayed] = Queue_create(delayedComparator);
        instance[QueueScheduler_queue] = Queue_create(taskComparator);
        instance[QueueScheduler_host] = host;
        return instance;
    }, props({
        [SchedulerLike_inContinuation]: false,
        [QueueScheduler_delayed]: none,
        [QueueScheduler_dueTime]: 0,
        [QueueScheduler_host]: none,
        [QueueScheduler_hostContinuation]: none,
        [QueueScheduler_isPaused]: false,
        [QueueScheduler_queue]: none,
        [QueueScheduler_taskIDCounter]: 0,
        [QueueScheduler_yieldRequested]: false,
    }), {
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return Scheduler_getCurrentTime(this[QueueScheduler_host]);
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
                    Scheduler_shouldYield(this[QueueScheduler_host])));
        },
        [SourceLike_move]() {
            // First fast forward through disposed tasks.
            peek(this);
            const task = Queue_pop(this[QueueScheduler_queue]);
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
        },
        [SchedulerLike_requestYield]() {
            this[QueueScheduler_yieldRequested] = true;
        },
        [PauseableLike_pause]() {
            this[QueueScheduler_isPaused] = true;
            this[MutableRefLike_current] = Disposable_disposed;
        },
        [PauseableLike_resume]() {
            this[QueueScheduler_isPaused] = false;
            scheduleOnHost(this);
        },
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            const { priority } = options !== null && options !== void 0 ? options : {};
            pipe(this, Disposable_addIgnoringChildErrors(continuation));
            if (!Disposable_isDisposed(continuation)) {
                const now = Scheduler_getCurrentTime(this[QueueScheduler_host]);
                const dueTime = max(now + delay, now);
                const task = Scheduler_isInContinuation(this) &&
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
                Queue_push(targetQueue, task);
                scheduleOnHost(this);
            }
        },
    }));
})();

export { create };

/// <reference types="./QueueScheduler.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../__internal__/mixins.mjs';
import { MAX_SAFE_INTEGER } from '../../constants.mjs';
import { isNone, none, isSome, max, pipe, unsafeCast } from '../../functions.mjs';
import { EnumeratorLike_current, SourceLike_move } from '../../ix.mjs';
import Enumerator_getCurrent from '../../ix/__internal__/Enumerator/Enumerator.getCurrent.mjs';
import Enumerator_hasCurrent from '../../ix/__internal__/Enumerator/Enumerator.hasCurrent.mjs';
import MutableEnumerator_mixin from '../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import Source_move from '../../ix/__internal__/Source/Source.move.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../scheduling.mjs';
import { PauseableLike_pause, PauseableLike_resume } from '../../util.mjs';
import Disposable_addIgnoringChildErrors from '../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors.mjs';
import Disposable_disposed from '../../util/__internal__/Disposable/Disposable.disposed.mjs';
import Disposable_isDisposed from '../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../util/__internal__/Disposable/Disposable.mixin.mjs';
import DisposableRef_mixin from '../../util/__internal__/DisposableRef/DisposableRef.mixin.mjs';
import Queue_create from '../../util/__internal__/Queue/Queue.create.mjs';
import Queue_peek from '../../util/__internal__/Queue/Queue.peek.mjs';
import Queue_pop from '../../util/__internal__/Queue/Queue.pop.mjs';
import Queue_push from '../../util/__internal__/Queue/Queue.push.mjs';
import { MutableRefLike_current } from '../../util/__internal__/util.internal.mjs';
import Continuation_run from './Continuation/Continuation.run.mjs';
import Continuation_yield_ from './Continuation/Continuation.yield.mjs';
import { getDelay } from './Scheduler.options.mjs';
import Scheduler_getCurrentTime from './Scheduler/Scheduler.getCurrentTime.mjs';
import Scheduler_isInContinuation from './Scheduler/Scheduler.isInContinuation.mjs';
import Scheduler_schedule from './Scheduler/Scheduler.schedule.mjs';
import Scheduler_shouldYield from './Scheduler/Scheduler.shouldYield.mjs';

const create = 
/*@__PURE__*/ (() => {
    const delayedComparator = (a, b) => {
        let diff = 0;
        diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
        diff = diff !== 0 ? diff : a.taskID - b.taskID;
        return diff;
    };
    const taskComparator = (a, b) => {
        let diff = 0;
        diff = diff !== 0 ? diff : a.priority - b.priority;
        diff = diff !== 0 ? diff : a.taskID - b.taskID;
        return diff;
    };
    const peek = (instance) => {
        const { delayed, queue } = instance;
        const now = Scheduler_getCurrentTime(instance.host);
        while (true) {
            const task = Queue_peek(delayed);
            if (isNone(task)) {
                break;
            }
            const taskIsDispose = Disposable_isDisposed(task.continuation);
            if (task.dueTime > now && !taskIsDispose) {
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
            if (!Disposable_isDisposed(task.continuation)) {
                break;
            }
            Queue_pop(queue);
        }
        return task !== null && task !== void 0 ? task : Queue_peek(delayed);
    };
    const priorityShouldYield = (instance, next) => {
        const { [EnumeratorLike_current]: current } = instance;
        return (current !== next &&
            next.dueTime <= Scheduler_getCurrentTime(instance.host) &&
            next.priority > current.priority);
    };
    const scheduleOnHost = (instance) => {
        var _a;
        const task = peek(instance);
        const continuationActive = !Disposable_isDisposed(instance[MutableRefLike_current]) &&
            isSome(task) &&
            instance.dueTime <= task.dueTime;
        if (isNone(task) || continuationActive || instance.isPaused) {
            return;
        }
        const dueTime = task.dueTime;
        const delay = max(dueTime - Scheduler_getCurrentTime(instance.host), 0);
        instance.dueTime = dueTime;
        const continuation = (_a = instance.hostContinuation) !== null && _a !== void 0 ? _a : (() => {
            for (let task = peek(instance); isSome(task) && !Disposable_isDisposed(instance); task = peek(instance)) {
                const { continuation, dueTime } = task;
                const delay = max(dueTime - Scheduler_getCurrentTime(instance.host), 0);
                if (delay === 0) {
                    Source_move(instance);
                    instance[SchedulerLike_inContinuation] = true;
                    Continuation_run(continuation);
                    instance[SchedulerLike_inContinuation] = false;
                }
                else {
                    instance.dueTime = Scheduler_getCurrentTime(instance.host) + delay;
                }
                Continuation_yield_({ delay });
            }
        });
        instance.hostContinuation = continuation;
        instance[MutableRefLike_current] = pipe(instance.host, Scheduler_schedule(continuation, { delay }));
    };
    const typedDisposableRefMixin = DisposableRef_mixin();
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    return createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin, typedDisposableRefMixin), function QueueScheduler(instance, host) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(typedDisposableRefMixin, instance, Disposable_disposed);
        instance.delayed = Queue_create(delayedComparator);
        instance.queue = Queue_create(taskComparator);
        instance.host = host;
        return instance;
    }, props({
        [SchedulerLike_inContinuation]: false,
        delayed: none,
        dueTime: 0,
        host: none,
        hostContinuation: none,
        isPaused: false,
        queue: none,
        taskIDCounter: 0,
        yieldRequested: false,
    }), {
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return Scheduler_getCurrentTime(this.host);
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            const { [SchedulerLike_inContinuation]: inContinuation, yieldRequested, } = this;
            if (inContinuation) {
                this.yieldRequested = false;
            }
            const next = peek(this);
            return (inContinuation &&
                (yieldRequested ||
                    Disposable_isDisposed(this) ||
                    !Enumerator_hasCurrent(this) ||
                    this.isPaused ||
                    (isSome(next) ? priorityShouldYield(this, next) : false) ||
                    Scheduler_shouldYield(this.host)));
        },
        [SourceLike_move]() {
            // First fast forward through disposed tasks.
            peek(this);
            const task = Queue_pop(this.queue);
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
        },
        [SchedulerLike_requestYield]() {
            this.yieldRequested = true;
        },
        [PauseableLike_pause]() {
            this.isPaused = true;
            this[MutableRefLike_current] = Disposable_disposed;
        },
        [PauseableLike_resume]() {
            this.isPaused = false;
            scheduleOnHost(this);
        },
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            const { priority } = options !== null && options !== void 0 ? options : {};
            pipe(this, Disposable_addIgnoringChildErrors(continuation));
            if (!Disposable_isDisposed(continuation)) {
                const now = Scheduler_getCurrentTime(this.host);
                const dueTime = max(now + delay, now);
                const task = Scheduler_isInContinuation(this) &&
                    Enumerator_hasCurrent(this) &&
                    Enumerator_getCurrent(this).continuation === continuation &&
                    delay <= 0
                    ? Enumerator_getCurrent(this)
                    : {
                        taskID: this.taskIDCounter++,
                        continuation,
                        dueTime,
                        priority: isSome(priority)
                            ? max(priority, 0)
                            : MAX_SAFE_INTEGER,
                    };
                const { delayed, queue } = this;
                const targetQueue = dueTime > now ? delayed : queue;
                Queue_push(targetQueue, task);
                scheduleOnHost(this);
            }
        },
    }));
})();

export { create };

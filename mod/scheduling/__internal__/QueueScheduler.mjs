/// <reference types="./QueueScheduler.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../__internal__/mixins.mjs';
import { MAX_SAFE_INTEGER } from '../../constants.mjs';
import { isNone, none, isSome, max, pipe, unsafeCast } from '../../functions.mjs';
import { EnumeratorLike_current, SourceLike_move } from '../../ix.mjs';
import Enumerator$getCurrent from '../../ix/__internal__/Enumerator/Enumerator.getCurrent.mjs';
import Enumerator$hasCurrent from '../../ix/__internal__/Enumerator/Enumerator.hasCurrent.mjs';
import MutableEnumerator$mixin from '../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import Source$move from '../../ix/__internal__/Source/Source.move.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../scheduling.mjs';
import { PauseableLike_pause, PauseableLike_resume } from '../../util.mjs';
import Disposable$addIgnoringChildErrors from '../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors.mjs';
import Disposable$disposed from '../../util/__internal__/Disposable/Disposable.disposed.mjs';
import Disposable$isDisposed from '../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../util/__internal__/Disposable/Disposable.mixin.mjs';
import DisposableRef$mixin from '../../util/__internal__/DisposableRef/DisposableRef.mixin.mjs';
import Queue$create from '../../util/__internal__/Queue/Queue.create.mjs';
import Queue$peek from '../../util/__internal__/Queue/Queue.peek.mjs';
import Queue$pop from '../../util/__internal__/Queue/Queue.pop.mjs';
import Queue$push from '../../util/__internal__/Queue/Queue.push.mjs';
import { MutableRefLike_current } from '../../util/__internal__/util.internal.mjs';
import Continuation$run from './Continuation/Continuation.run.mjs';
import Continuation$yield_ from './Continuation/Continuation.yield.mjs';
import { getDelay } from './Scheduler.options.mjs';
import Scheduler$getCurrentTime from './Scheduler/Scheduler.getCurrentTime.mjs';
import Scheduler$isInContinuation from './Scheduler/Scheduler.isInContinuation.mjs';
import Scheduler$schedule from './Scheduler/Scheduler.schedule.mjs';
import Scheduler$shouldYield from './Scheduler/Scheduler.shouldYield.mjs';

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
        const now = Scheduler$getCurrentTime(instance.host);
        while (true) {
            const task = Queue$peek(delayed);
            if (isNone(task)) {
                break;
            }
            const taskIsDispose = Disposable$isDisposed(task.continuation);
            if (task.dueTime > now && !taskIsDispose) {
                break;
            }
            Queue$pop(delayed);
            if (!taskIsDispose) {
                Queue$push(queue, task);
            }
        }
        let task = none;
        while (true) {
            task = Queue$peek(queue);
            if (isNone(task)) {
                break;
            }
            if (!Disposable$isDisposed(task.continuation)) {
                break;
            }
            Queue$pop(queue);
        }
        return task !== null && task !== void 0 ? task : Queue$peek(delayed);
    };
    const priorityShouldYield = (instance, next) => {
        const { [EnumeratorLike_current]: current } = instance;
        return (current !== next &&
            next.dueTime <= Scheduler$getCurrentTime(instance.host) &&
            next.priority > current.priority);
    };
    const scheduleOnHost = (instance) => {
        var _a;
        const task = peek(instance);
        const continuationActive = !Disposable$isDisposed(instance[MutableRefLike_current]) &&
            isSome(task) &&
            instance.dueTime <= task.dueTime;
        if (isNone(task) || continuationActive || instance.isPaused) {
            return;
        }
        const dueTime = task.dueTime;
        const delay = max(dueTime - Scheduler$getCurrentTime(instance.host), 0);
        instance.dueTime = dueTime;
        const continuation = (_a = instance.hostContinuation) !== null && _a !== void 0 ? _a : (() => {
            for (let task = peek(instance); isSome(task) && !Disposable$isDisposed(instance); task = peek(instance)) {
                const { continuation, dueTime } = task;
                const delay = max(dueTime - Scheduler$getCurrentTime(instance.host), 0);
                if (delay === 0) {
                    Source$move(instance);
                    instance[SchedulerLike_inContinuation] = true;
                    Continuation$run(continuation);
                    instance[SchedulerLike_inContinuation] = false;
                }
                else {
                    instance.dueTime = Scheduler$getCurrentTime(instance.host) + delay;
                }
                Continuation$yield_({ delay });
            }
        });
        instance.hostContinuation = continuation;
        instance[MutableRefLike_current] = pipe(instance.host, Scheduler$schedule(continuation, { delay }));
    };
    const typedDisposableRefMixin = DisposableRef$mixin();
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin();
    return createInstanceFactory(mix(include(Disposable$mixin, typedMutableEnumeratorMixin, typedDisposableRefMixin), function QueueScheduler(instance, host) {
        init(Disposable$mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(typedDisposableRefMixin, instance, Disposable$disposed);
        instance.delayed = Queue$create(delayedComparator);
        instance.queue = Queue$create(taskComparator);
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
            return Scheduler$getCurrentTime(this.host);
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
                    Disposable$isDisposed(this) ||
                    !Enumerator$hasCurrent(this) ||
                    this.isPaused ||
                    (isSome(next) ? priorityShouldYield(this, next) : false) ||
                    Scheduler$shouldYield(this.host)));
        },
        [SourceLike_move]() {
            // First fast forward through disposed tasks.
            peek(this);
            const task = Queue$pop(this.queue);
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
        },
        [SchedulerLike_requestYield]() {
            this.yieldRequested = true;
        },
        [PauseableLike_pause]() {
            this.isPaused = true;
            this[MutableRefLike_current] = Disposable$disposed;
        },
        [PauseableLike_resume]() {
            this.isPaused = false;
            scheduleOnHost(this);
        },
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            const { priority } = options !== null && options !== void 0 ? options : {};
            pipe(this, Disposable$addIgnoringChildErrors(continuation));
            if (!Disposable$isDisposed(continuation)) {
                const now = Scheduler$getCurrentTime(this.host);
                const dueTime = max(now + delay, now);
                const task = Scheduler$isInContinuation(this) &&
                    Enumerator$hasCurrent(this) &&
                    Enumerator$getCurrent(this).continuation === continuation &&
                    delay <= 0
                    ? Enumerator$getCurrent(this)
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
                Queue$push(targetQueue, task);
                scheduleOnHost(this);
            }
        },
    }));
})();

export { create };

/// <reference types="./QueueSchedulerLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../../__internal__/constants.mjs';
import { createInstanceFactory, mix, include, init, props } from '../../__internal__/mixins.mjs';
import { getDelay } from '../../__internal__/scheduling/SchedulerLike.options.mjs';
import { isNone, none, isSome, max, pipe, unsafeCast } from '../../functions.mjs';
import { EnumeratorLike_current, SourceLike_move } from '../../ix.mjs';
import EnumeratorLike__getCurrent from '../../ix/__internal__/EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumeratorLike__hasCurrent from '../../ix/__internal__/EnumeratorLike/EnumeratorLike.hasCurrent.mjs';
import MutableEnumeratorLike__mixin from '../../ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import SourceLike__move from '../../ix/__internal__/SourceLike/SourceLike.move.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../scheduling.mjs';
import { PauseableLike_pause, PauseableLike_resume } from '../../util.mjs';
import DisposableLike__addIgnoringChildErrors from '../../util/__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors.mjs';
import DisposableLike__disposed from '../../util/__internal__/DisposableLike/DisposableLike.disposed.mjs';
import DisposableLike__isDisposed from '../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableRefLike__mixin from '../../util/__internal__/DisposableRefLike/DisposableRefLike.mixin.mjs';
import QueueLike__create from '../../util/__internal__/QueueLike/QueueLike.create.mjs';
import QueueLike__peek from '../../util/__internal__/QueueLike/QueueLike.peek.mjs';
import QueueLike__pop from '../../util/__internal__/QueueLike/QueueLike.pop.mjs';
import QueueLike__push from '../../util/__internal__/QueueLike/QueueLike.push.mjs';
import { MutableRefLike_current } from '../../util/__internal__/util.internal.mjs';
import ContinuationLike__run from './ContinuationLike/ContinuationLike.run.mjs';
import ContinuationLike__yield_ from './ContinuationLike/ContinuationLike.yield.mjs';
import SchedulerLike__getCurrentTime from './SchedulerLike/SchedulerLike.getCurrentTime.mjs';
import SchedulerLike__isInContinuation from './SchedulerLike/SchedulerLike.isInContinuation.mjs';
import SchedulerLike__schedule from './SchedulerLike/SchedulerLike.schedule.mjs';
import SchedulerLike__shouldYield from './SchedulerLike/SchedulerLike.shouldYield.mjs';

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
        const now = SchedulerLike__getCurrentTime(instance.host);
        while (true) {
            const task = QueueLike__peek(delayed);
            if (isNone(task)) {
                break;
            }
            const taskIsDispose = DisposableLike__isDisposed(task.continuation);
            if (task.dueTime > now && !taskIsDispose) {
                break;
            }
            QueueLike__pop(delayed);
            if (!taskIsDispose) {
                QueueLike__push(queue, task);
            }
        }
        let task = none;
        while (true) {
            task = QueueLike__peek(queue);
            if (isNone(task)) {
                break;
            }
            if (!DisposableLike__isDisposed(task.continuation)) {
                break;
            }
            QueueLike__pop(queue);
        }
        return task !== null && task !== void 0 ? task : QueueLike__peek(delayed);
    };
    const priorityShouldYield = (instance, next) => {
        const { [EnumeratorLike_current]: current } = instance;
        return (current !== next &&
            next.dueTime <= SchedulerLike__getCurrentTime(instance.host) &&
            next.priority > current.priority);
    };
    const scheduleOnHost = (instance) => {
        var _a;
        const task = peek(instance);
        const continuationActive = !DisposableLike__isDisposed(instance[MutableRefLike_current]) &&
            isSome(task) &&
            instance.dueTime <= task.dueTime;
        if (isNone(task) || continuationActive || instance.isPaused) {
            return;
        }
        const dueTime = task.dueTime;
        const delay = max(dueTime - SchedulerLike__getCurrentTime(instance.host), 0);
        instance.dueTime = dueTime;
        const continuation = (_a = instance.hostContinuation) !== null && _a !== void 0 ? _a : (() => {
            for (let task = peek(instance); isSome(task) && !DisposableLike__isDisposed(instance); task = peek(instance)) {
                const { continuation, dueTime } = task;
                const delay = max(dueTime - SchedulerLike__getCurrentTime(instance.host), 0);
                if (delay === 0) {
                    SourceLike__move(instance);
                    instance[SchedulerLike_inContinuation] = true;
                    ContinuationLike__run(continuation);
                    instance[SchedulerLike_inContinuation] = false;
                }
                else {
                    instance.dueTime = SchedulerLike__getCurrentTime(instance.host) + delay;
                }
                ContinuationLike__yield_({ delay });
            }
        });
        instance.hostContinuation = continuation;
        instance[MutableRefLike_current] = pipe(instance.host, SchedulerLike__schedule(continuation, { delay }));
    };
    const typedDisposableRefMixin = DisposableRefLike__mixin();
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    return createInstanceFactory(mix(include(DisposableLike__mixin, typedMutableEnumeratorMixin, typedDisposableRefMixin), function QueueScheduler(instance, host) {
        init(DisposableLike__mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(typedDisposableRefMixin, instance, DisposableLike__disposed);
        instance.delayed = QueueLike__create(delayedComparator);
        instance.queue = QueueLike__create(taskComparator);
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
            return SchedulerLike__getCurrentTime(this.host);
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
                    DisposableLike__isDisposed(this) ||
                    !EnumeratorLike__hasCurrent(this) ||
                    this.isPaused ||
                    (isSome(next) ? priorityShouldYield(this, next) : false) ||
                    SchedulerLike__shouldYield(this.host)));
        },
        [SourceLike_move]() {
            // First fast forward through disposed tasks.
            peek(this);
            const task = QueueLike__pop(this.queue);
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
        },
        [SchedulerLike_requestYield]() {
            this.yieldRequested = true;
        },
        [PauseableLike_pause]() {
            this.isPaused = true;
            this[MutableRefLike_current] = DisposableLike__disposed;
        },
        [PauseableLike_resume]() {
            this.isPaused = false;
            scheduleOnHost(this);
        },
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            const { priority } = options !== null && options !== void 0 ? options : {};
            pipe(this, DisposableLike__addIgnoringChildErrors(continuation));
            if (!DisposableLike__isDisposed(continuation)) {
                const now = SchedulerLike__getCurrentTime(this.host);
                const dueTime = max(now + delay, now);
                const task = SchedulerLike__isInContinuation(this) &&
                    EnumeratorLike__hasCurrent(this) &&
                    EnumeratorLike__getCurrent(this).continuation ===
                        continuation &&
                    delay <= 0
                    ? EnumeratorLike__getCurrent(this)
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
                QueueLike__push(targetQueue, task);
                scheduleOnHost(this);
            }
        },
    }));
})();

export { create };

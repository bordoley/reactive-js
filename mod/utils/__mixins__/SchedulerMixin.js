/// <reference types="./SchedulerMixin.d.ts" />

import * as CurrentTime from "../../__internal__/CurrentTime.js";
import { __DEV__ } from "../../__internal__/constants.js";
import { include, init, mix, mixInstanceFactory, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { isNone, isSome, none, pipe, raiseIf, } from "../../functions.js";
import { abs, clampPositiveInteger, floor } from "../../math.js";
import { CollectionEnumeratorLike_count, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_moveNext, QueueLike_enqueue, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import * as Iterator from "../__internal__/Iterator.js";
import DelegatingDisposableMixin from "./DelegatingDisposableMixin.js";
import DisposableMixin from "./DisposableMixin.js";
import QueueMixin from "./QueueMixin.js";
export const SchedulerContinuationLike_run = Symbol("SchedulerContinuationLike_run");
export const SchedulerContinuationLike_dueTime = Symbol("SchedulerContinuationLike_dueTime");
export const SchedulerContinuationLike_id = Symbol("SchedulerContinuationLike_id");
export const SchedulerContinuation = {
    compare: (a, b) => {
        const diff = a[SchedulerContinuationLike_dueTime] -
            b[SchedulerContinuationLike_dueTime];
        return floor(abs(diff)) !== 0
            ? diff
            : a[SchedulerContinuationLike_id] - b[SchedulerContinuationLike_id];
    },
};
export const SchedulerMixinHostLike_shouldYield = Symbol("SchedulerMixinHostLike_shouldYield");
export const SchedulerMixinHostLike_schedule = Symbol("SchedulerMixinHostLike_schedule");
const SchedulerMixin = 
/*@__PURE__*/ (() => {
    const QueueSchedulerContinuationLike_parent = Symbol("QueueSchedulerContinuationLike_parent");
    const QueueSchedulerContinuationLike_isReschedulingChildren = Symbol("QueueSchedulerContinuationLike_isReschedulingChildren");
    const SchedulerMixinLike_schedule = Symbol("SchedulerMixinLike_schedule");
    const SchedulerMixinLike_taskIDCounter = Symbol("SchedulerMixinLike_taskIDCounter");
    const SchedulerMixinLike_currentContinuation = Symbol("SchedulerMixinLike_currentContinuation");
    const SchedulerMixinLike_startTime = Symbol("SchedulerMixinLike_startTime");
    const SchedulerMixinLike_yieldRequested = Symbol("SchedulerMixinLike_yieldRequested");
    const createQueueContinuation = (() => {
        const QueueContinuation_delegate = Symbol("QueueContinuation_delegate");
        const QueueContinuation_scheduler = Symbol("QueueContinuation_scheduler");
        const findNearestNonDisposedParent = (continuation) => {
            let parent = continuation[QueueSchedulerContinuationLike_parent];
            while (isSome(parent) && parent[DisposableLike_isDisposed]) {
                parent = parent[QueueSchedulerContinuationLike_parent];
            }
            return parent;
        };
        const rescheduleContinuation = (continuation) => {
            const scheduler = continuation[QueueContinuation_scheduler];
            const parent = findNearestNonDisposedParent(continuation);
            if (isSome(parent)) {
                parent[QueueLike_enqueue](continuation);
            }
            else {
                continuation[SchedulerContinuationLike_dueTime] =
                    scheduler[SchedulerLike_now];
                scheduler[SchedulerMixinLike_schedule](continuation);
            }
        };
        const rescheduleChildrenOnParentOrScheduler = (continuation) => {
            continuation[QueueSchedulerContinuationLike_isReschedulingChildren] =
                true;
            const scheduler = continuation[QueueContinuation_scheduler];
            const parent = findNearestNonDisposedParent(continuation);
            while (continuation[EnumeratorLike_moveNext]()) {
                const head = continuation[EnumeratorLike_current];
                if (head[DisposableLike_isDisposed]) {
                    // continue
                }
                else if (isSome(parent)) {
                    parent[QueueLike_enqueue](head);
                }
                else {
                    scheduler[SchedulerMixinLike_schedule](head);
                }
            }
            continuation[QueueSchedulerContinuationLike_isReschedulingChildren] =
                false;
        };
        function onContinuationDisposed() {
            rescheduleChildrenOnParentOrScheduler(this);
            // A continuation could be disposed and yet retained
            // by a scheduler in a queue so free all references
            // to avoid retaining memory.
            this[QueueSchedulerContinuationLike_parent] = none;
            this[QueueContinuation_scheduler] =
                none;
        }
        return mixInstanceFactory(include(DelegatingDisposableMixin, QueueMixin()), function QueueContinuation(scheduler, delegate, dueTime) {
            const delegateEnumerator = pipe(delegate, Iterator.toEnumerator());
            init(DelegatingDisposableMixin, this, delegateEnumerator);
            init(QueueMixin(), this, none);
            this[QueueContinuation_delegate] = delegateEnumerator;
            this[SchedulerContinuationLike_dueTime] = dueTime;
            this[SchedulerContinuationLike_id] = ++scheduler[SchedulerMixinLike_taskIDCounter];
            this[QueueContinuation_scheduler] = scheduler;
            pipe(this, DisposableContainer.onDisposed(onContinuationDisposed));
            return this;
        }, props({
            [QueueSchedulerContinuationLike_parent]: none,
            [QueueSchedulerContinuationLike_isReschedulingChildren]: false,
            [QueueContinuation_scheduler]: none,
            [QueueContinuation_delegate]: none,
            [SchedulerContinuationLike_dueTime]: 0,
            [SchedulerContinuationLike_id]: 0,
        }), proto({
            [SchedulerContinuationLike_run]() {
                if (this[DisposableLike_isDisposed]) {
                    return;
                }
                const scheduler = this[QueueContinuation_scheduler];
                const oldCurrentContinuation = scheduler[SchedulerMixinLike_currentContinuation];
                scheduler[SchedulerMixinLike_currentContinuation] = this;
                // A QueueSchedulerContinuationLike may run inner continuations that will
                // set the currentContinuation to themselves, but we don't want to
                // reset the startTime or yieldRequested flags in this case since these
                // should be honored for the duration of the time that the synchronous
                // parent continuation is active.
                if (isNone(oldCurrentContinuation)) {
                    scheduler[SchedulerMixinLike_startTime] =
                        scheduler[SchedulerLike_now];
                    scheduler[SchedulerMixinLike_yieldRequested] = false;
                }
                // Run any inner continuations first.
                while (this[EnumeratorLike_moveNext]()) {
                    const head = this[EnumeratorLike_current];
                    head[QueueSchedulerContinuationLike_parent] = this;
                    head[SchedulerContinuationLike_run]();
                    head[QueueSchedulerContinuationLike_parent] = none;
                    if (scheduler[SchedulerLike_shouldYield] &&
                        !this[DisposableLike_isDisposed]) {
                        rescheduleContinuation(this);
                        scheduler[SchedulerMixinLike_currentContinuation] =
                            oldCurrentContinuation;
                        return;
                    }
                }
                const delegate = this[QueueContinuation_delegate];
                if (delegate[EnumeratorLike_moveNext]()) {
                    const next = delegate[EnumeratorLike_current];
                    // Reschedule the continuation if yielded
                    if ((next?.ms ?? 0) > 0) {
                        // Bump the taskID so that the yielded with delay continuation is run
                        // at a lower relative priority to other previously scheduled continuations
                        // with the same due time.
                        this[SchedulerContinuationLike_id] = ++scheduler[SchedulerMixinLike_taskIDCounter];
                        this[SchedulerContinuationLike_dueTime] =
                            scheduler[SchedulerLike_now] + (next?.ms ?? 0);
                        rescheduleChildrenOnParentOrScheduler(this);
                        scheduler[SchedulerMixinLike_schedule](this);
                    }
                    else {
                        rescheduleContinuation(this);
                    }
                }
                scheduler[SchedulerMixinLike_currentContinuation] =
                    oldCurrentContinuation;
            },
        }));
    })();
    return mix(include(DisposableMixin), function SchedulerMixin() {
        init(DisposableMixin, this);
        return this;
    }, props({
        [SchedulerMixinLike_currentContinuation]: none,
        [SchedulerMixinLike_yieldRequested]: false,
        [SchedulerMixinLike_startTime]: 0,
        [SchedulerMixinLike_taskIDCounter]: 0,
    }), proto({
        [SchedulerLike_maxYieldInterval]: 5,
        get [SchedulerLike_now]() {
            return CurrentTime.now();
        },
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            const currentContinuation = this[SchedulerMixinLike_currentContinuation];
            return isSome(currentContinuation);
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            if (__DEV__) {
                const inContinuation = this[SchedulerLike_inContinuation];
                raiseIf(!inContinuation, "shouldYield may only be called from within a scheduler continuation");
            }
            const isDisposed = this[DisposableLike_isDisposed];
            const yieldRequested = this[SchedulerMixinLike_yieldRequested];
            const exceededMaxYieldInterval = this[SchedulerLike_now] >
                this[SchedulerMixinLike_startTime] +
                    this[SchedulerLike_maxYieldInterval];
            const currentContinuationHasScheduledChildren = this[SchedulerMixinLike_currentContinuation][CollectionEnumeratorLike_count] > 0;
            return (isDisposed ||
                yieldRequested ||
                exceededMaxYieldInterval ||
                currentContinuationHasScheduledChildren ||
                this[SchedulerMixinHostLike_shouldYield]);
        },
        [SchedulerLike_requestYield]() {
            this[SchedulerMixinLike_yieldRequested] = true;
        },
        [SchedulerMixinLike_schedule](continuation) {
            const activeContinuation = this[SchedulerMixinLike_currentContinuation];
            const now = this[SchedulerLike_now];
            const dueTime = continuation[SchedulerContinuationLike_dueTime];
            if (dueTime > now ||
                isNone(activeContinuation) ||
                activeContinuation[DisposableLike_isDisposed] ||
                // Occurs when the continuation is rescheduling itself
                // and there is no non-disposed parent to enqueue itself onto.
                activeContinuation === continuation ||
                // Occurs when an active continuation is rescheduling its
                // children because it has been rescheduled in the future.
                activeContinuation[QueueSchedulerContinuationLike_isReschedulingChildren]) {
                this[SchedulerMixinHostLike_schedule](continuation);
            }
            else {
                activeContinuation[QueueLike_enqueue](continuation);
            }
        },
        [SchedulerLike_schedule](effect, options) {
            if (this[DisposableLike_isDisposed]) {
                return Disposable.disposed;
            }
            const dueTime = this[SchedulerLike_now] + clampPositiveInteger(options?.delay ?? 0);
            const continuation = pipe(createQueueContinuation(this, effect(this), dueTime), Disposable.addToContainer(this));
            this[SchedulerMixinLike_schedule](continuation);
            return continuation;
        },
    }));
})();
export default SchedulerMixin;

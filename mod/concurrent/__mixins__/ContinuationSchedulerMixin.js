/// <reference types="./ContinuationSchedulerMixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { createInstanceFactory, getPrototype, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { CollectionLike_count } from "../../collections.js";
import { ContinuationContextLike_yield, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../concurrent.js";
import { call, error, isNone, isSome, newInstance, none, pipe, pipeLazy, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_dequeue, QueueableLike_enqueue, } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import IndexedQueueMixin from "../../utils/__mixins__/IndexedQueueMixin.js";
export const ContinuationLike_run = Symbol("ContinuationLike_run");
export const ContinuationSchedulerImplementationLike_shouldYield = Symbol("ContinuationSchedulerImplementationLike_shouldYield");
export const ContinuationSchedulerImplementationLike_scheduleContinuation = Symbol("ContinuationSchedulerImplementationLike_scheduleContinuation");
const ContinuationSchedulerMixin = /*@__PURE__*/ (() => {
    const ContinuationSchedulerMixinLike_currentContinuation = Symbol("ContinuationSchedulerMixinLike_currentContinuation");
    const ContinuationSchedulerMixinLike_yieldRequested = Symbol("ContinuationSchedulerMixinLike_yieldRequested");
    const ContinuationSchedulerMixinLike_startTime = Symbol("ContinuationSchedulerMixinLike_startTime");
    const ContinuationSchedulerMixinLike_schedule = Symbol("ContinuationSchedulerMixinLike_schedule");
    const QueueableContinuationLike_parent = Symbol("QueueableContinuationLike_parent");
    const QueueableContinuationLike_activeChild = Symbol("QueueableContinuationLike_activeChild");
    const QueueableContinuationLike_effect = Symbol("QueueableContinuationLike_effect");
    const QueueableContinuationLike_scheduler = Symbol("QueueableContinuationLike_scheduler");
    const createContinuation = (() => {
        class ContinuationYieldError {
            delay;
            constructor(delay) {
                this.delay = delay;
            }
        }
        const indexedQueueProtoype = getPrototype(IndexedQueueMixin());
        const findNearestNonDisposedParent = (continuation) => {
            let parent = continuation[QueueableContinuationLike_parent];
            while (isSome(parent) && parent[DisposableLike_isDisposed]) {
                parent = parent[QueueableContinuationLike_parent];
            }
            return parent;
        };
        const rescheduleContinuation = (continuation) => {
            const scheduler = continuation[QueueableContinuationLike_scheduler];
            const parent = findNearestNonDisposedParent(continuation);
            if (isSome(parent)) {
                parent[QueueableLike_enqueue](continuation);
            }
            else {
                scheduler[ContinuationSchedulerMixinLike_schedule](continuation);
            }
        };
        const rescheduleChildrenOnParentOrScheduler = (continuation) => {
            const scheduler = continuation[QueueableContinuationLike_scheduler];
            const parent = findNearestNonDisposedParent(continuation);
            if (isSome(parent)) {
                let head = none;
                while (((head = continuation[QueueLike_dequeue]()), isSome(head))) {
                    if (!head[DisposableLike_isDisposed]) {
                        parent[QueueableLike_enqueue](head);
                    }
                }
            }
            else {
                let head = none;
                while (((head = continuation[QueueLike_dequeue]()), isSome(head))) {
                    if (!head[DisposableLike_isDisposed]) {
                        scheduler[ContinuationSchedulerMixinLike_schedule](head);
                    }
                }
            }
        };
        const runContinuation = (thiz) => {
            const scheduler = thiz[QueueableContinuationLike_scheduler];
            if (thiz[DisposableLike_isDisposed]) {
                rescheduleChildrenOnParentOrScheduler(thiz);
                return;
            }
            // Run any inner continuations first.
            let head = none;
            while (((head = thiz[QueueLike_dequeue]()), isSome(head))) {
                thiz[QueueableContinuationLike_activeChild] = head;
                runContinuation(head);
                thiz[QueueableContinuationLike_activeChild] = none;
                if (thiz[DisposableLike_isDisposed]) {
                    rescheduleChildrenOnParentOrScheduler(thiz);
                    return;
                }
                else if (scheduler[SchedulerLike_shouldYield]) {
                    rescheduleContinuation(thiz);
                    return;
                }
            }
            let err = none;
            let yieldError = none;
            thiz[QueueableContinuationLike_activeChild] = thiz;
            try {
                thiz[QueueableContinuationLike_effect](thiz);
            }
            catch (e) {
                if (e instanceof ContinuationYieldError) {
                    yieldError = e;
                }
                else {
                    err = error(e);
                }
            }
            thiz[QueueableContinuationLike_activeChild] = none;
            if (isSome(yieldError) && !thiz[DisposableLike_isDisposed]) {
                if (yieldError.delay > 0) {
                    rescheduleChildrenOnParentOrScheduler(thiz);
                    scheduler[ContinuationSchedulerMixinLike_schedule](thiz, yieldError);
                }
                else {
                    rescheduleContinuation(thiz);
                }
            }
            else {
                thiz[DisposableLike_dispose](err);
                rescheduleChildrenOnParentOrScheduler(thiz);
            }
        };
        return createInstanceFactory(mix(include(DisposableMixin, IndexedQueueMixin()), function Continuation(instance, scheduler, effect) {
            init(DisposableMixin, instance);
            init(IndexedQueueMixin(), instance, MAX_SAFE_INTEGER, "overflow");
            instance[QueueableContinuationLike_scheduler] = scheduler;
            instance[QueueableContinuationLike_effect] = effect;
            pipe(instance, Disposable.onDisposed(pipeLazy(instance, rescheduleChildrenOnParentOrScheduler)));
            return instance;
        }, props({
            [QueueableContinuationLike_activeChild]: none,
            [QueueableContinuationLike_parent]: none,
            [QueueableContinuationLike_scheduler]: none,
            [QueueableContinuationLike_effect]: none,
        }), {
            [ContinuationLike_run]() {
                const scheduler = this[QueueableContinuationLike_scheduler];
                scheduler[ContinuationSchedulerMixinLike_startTime] =
                    this[SchedulerLike_now];
                scheduler[ContinuationSchedulerMixinLike_currentContinuation] =
                    this;
                scheduler[ContinuationSchedulerMixinLike_yieldRequested] = false;
                runContinuation(this);
                scheduler[ContinuationSchedulerMixinLike_yieldRequested] = false;
                scheduler[ContinuationSchedulerMixinLike_currentContinuation] =
                    none;
            },
            [QueueableLike_enqueue](continuation) {
                continuation[QueueableContinuationLike_parent] = this;
                return call(indexedQueueProtoype[QueueableLike_enqueue], this, continuation);
            },
            [ContinuationContextLike_yield](delay = 0) {
                const scheduler = this[QueueableContinuationLike_scheduler];
                const shouldYield = delay > 0 || scheduler[SchedulerLike_shouldYield];
                const currentContinuation = scheduler[ContinuationSchedulerMixinLike_currentContinuation];
                if (shouldYield && isSome(currentContinuation)) {
                    throw newInstance(ContinuationYieldError, delay);
                }
            },
        }));
    })();
    const getActiveContinuation = (instance) => {
        let parent = instance[ContinuationSchedulerMixinLike_currentContinuation];
        let activeChild = parent?.[QueueableContinuationLike_activeChild];
        while (isSome(activeChild) && activeChild !== parent) {
            parent = activeChild;
            activeChild = parent[QueueableContinuationLike_activeChild];
        }
        return parent;
    };
    return mix(include(DisposableMixin), function ContinuationSchedulerMixin(instance, maxYieldInterval) {
        init(DisposableMixin, instance);
        instance[SchedulerLike_maxYieldInterval] =
            clampPositiveInteger(maxYieldInterval);
        return instance;
    }, props({
        [SchedulerLike_maxYieldInterval]: MAX_SAFE_INTEGER,
        [ContinuationSchedulerMixinLike_currentContinuation]: none,
        [ContinuationSchedulerMixinLike_yieldRequested]: false,
        [ContinuationSchedulerMixinLike_startTime]: 0,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            const currentContinuation = this[ContinuationSchedulerMixinLike_currentContinuation];
            return isSome(currentContinuation);
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            const inContinuation = this[SchedulerLike_inContinuation];
            const isDisposed = this[DisposableLike_isDisposed];
            const yieldRequested = this[ContinuationSchedulerMixinLike_yieldRequested];
            return (inContinuation &&
                (isDisposed ||
                    yieldRequested ||
                    //exceededMaxYieldInterval
                    this[SchedulerLike_now] >
                        this[ContinuationSchedulerMixinLike_startTime] +
                            this[SchedulerLike_maxYieldInterval] ||
                    (getActiveContinuation(this)?.[CollectionLike_count] ?? 0) > 0 ||
                    this[ContinuationSchedulerImplementationLike_shouldYield]));
        },
        [SchedulerLike_requestYield]() {
            this[ContinuationSchedulerMixinLike_yieldRequested] = true;
        },
        [ContinuationSchedulerMixinLike_schedule](continuation, options) {
            const delay = clampPositiveInteger(options?.delay ?? 0);
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            const activeContinuation = getActiveContinuation(this);
            if (delay > 0 ||
                isNone(activeContinuation) ||
                activeContinuation[DisposableLike_isDisposed] ||
                // Occurs when the continuation is rescheduling itself
                // and there is no non-disposed parent to enqueue itself onto.
                activeContinuation === continuation ||
                // Occurs when an active continuation is rescheduling its
                // children because it will be disposed.
                continuation[QueueableContinuationLike_parent] === activeContinuation) {
                continuation[QueueableContinuationLike_parent] = none;
                this[ContinuationSchedulerImplementationLike_scheduleContinuation](continuation, delay);
            }
            else {
                activeContinuation[QueueableLike_enqueue](continuation);
            }
        },
        [SchedulerLike_schedule](effect, options) {
            const continuation = pipe(createContinuation(this, effect), Disposable.addTo(this, { ignoreChildErrors: true }));
            this[ContinuationSchedulerMixinLike_schedule](continuation, options);
            return continuation;
        },
    });
})();
export default ContinuationSchedulerMixin;

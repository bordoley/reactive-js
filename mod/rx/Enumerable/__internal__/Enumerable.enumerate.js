/// <reference types="./Enumerable.enumerate.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { isSome, pipe, unsafeCast } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Observer_assertState from "../../../rx/Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../../rx/Observer/__internal__/Observer.mixin.js";
import Observer_sourceFrom from "../../../rx/Observer/__internal__/Observer.sourceFrom.js";
import { ContinuationLike_run, ContinuationLike_scheduler, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../scheduling.js";
import { Continuation__getCurrentContinuation } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, QueueLike_count, QueueLike_push, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import MutableEnumerator_mixin from "../../../util/Enumerator/__internal__/MutableEnumerator.mixin.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import { MutableEnumeratorLike_reset, PullableQueueLike_pull, } from "../../../util/__internal__/util.internal.js";
const Enumerable_enumerate = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const typedObserverMixin = Observer_mixin();
    const createEnumeratorScheduler = createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin, IndexedQueue_fifoQueueMixin(), typedObserverMixin), function EnumeratorScheduler(instance) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(IndexedQueue_fifoQueueMixin(), instance);
        init(typedObserverMixin, instance, instance);
        return instance;
    }, props({
        [SchedulerLike_inContinuation]: false,
    }), {
        [SchedulerLike_now]: 0,
        get [SchedulerLike_shouldYield]() {
            var _a;
            unsafeCast(this);
            const currentContinuation = Continuation__getCurrentContinuation();
            const currentContinuationHasChildren = (currentContinuation === null || currentContinuation === void 0 ? void 0 : currentContinuation[ContinuationLike_scheduler]) === this &&
                ((_a = currentContinuation === null || currentContinuation === void 0 ? void 0 : currentContinuation[QueueLike_count]) !== null && _a !== void 0 ? _a : 0) > 0;
            return (this[SchedulerLike_inContinuation] &&
                (this[EnumeratorLike_hasCurrent] || currentContinuationHasChildren));
        },
        [SchedulerLike_requestYield]() {
            // No-Op: We yield whenever the continuation is running.
        },
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            while (!this[EnumeratorLike_hasCurrent]) {
                const continuation = this[PullableQueueLike_pull]();
                if (isSome(continuation)) {
                    this[SchedulerLike_inContinuation] = true;
                    continuation[ContinuationLike_run]();
                    this[SchedulerLike_inContinuation] = false;
                }
                else {
                    this[DisposableLike_dispose]();
                    break;
                }
            }
            return this[EnumeratorLike_hasCurrent];
        },
        [SchedulerLike_schedule](continuation, _) {
            pipe(this, Disposable_add(continuation));
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            const currentContinuation = Continuation__getCurrentContinuation();
            if (isSome(currentContinuation) &&
                currentContinuation[ContinuationLike_scheduler] === this &&
                !currentContinuation[DisposableLike_isDisposed]) {
                currentContinuation[QueueLike_push](continuation);
            }
            else {
                this[QueueLike_push](continuation);
            }
        },
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            this[EnumeratorLike_current] = next;
        },
    }));
    return () => (enumerable) => pipe(createEnumeratorScheduler(), Observer_sourceFrom(enumerable));
})();
export default Enumerable_enumerate;

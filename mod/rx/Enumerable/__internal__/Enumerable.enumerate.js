/// <reference types="./Enumerable.enumerate.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { isSome, none, pipe, unsafeCast } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Observer_assertState from "../../../rx/Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../../rx/Observer/__internal__/Observer.mixin.js";
import Observer_sourceFrom from "../../../rx/Observer/__internal__/Observer.sourceFrom.js";
import { ContinuationLike_run, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, QueueLike_push, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import MutableEnumerator_mixin from "../../../util/Enumerator/__internal__/MutableEnumerator.mixin.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import { PullableQueueLike_pull, } from "../../../util/__internal__/util.internal.js";
const Enumerable_enumerate = /*@__PURE__*/ (() => {
    // FIXMe: Can we merge these into a single mixin
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const typedObserverMixin = Observer_mixin();
    const createEnumeratorScheduler = createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin, IndexedQueue_fifoQueueMixin()), function EnumeratorScheduler(instance) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(IndexedQueue_fifoQueueMixin(), instance);
        return instance;
    }, props({
        [SchedulerLike_inContinuation]: false,
    }), {
        [SchedulerLike_now]: 0,
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[SchedulerLike_inContinuation];
        },
        [SchedulerLike_requestYield]() {
            // No-Op: We yield whenever the continuation is running.
        },
        [EnumeratorLike_move]() {
            if (!this[DisposableLike_isDisposed]) {
                const continuation = this[PullableQueueLike_pull]();
                if (isSome(continuation)) {
                    this[SchedulerLike_inContinuation] = true;
                    continuation[ContinuationLike_run]();
                    this[SchedulerLike_inContinuation] = false;
                }
                else {
                    this[DisposableLike_dispose]();
                }
            }
            return this[EnumeratorLike_hasCurrent];
        },
        [SchedulerLike_schedule](continuation, _) {
            pipe(this, Disposable_add(continuation));
            if (!continuation[DisposableLike_isDisposed]) {
                this[QueueLike_push](continuation);
            }
        },
    }));
    const createEnumeratorObserver = createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin), function EnumeratorObserver(instance, enumerator) {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, enumerator);
        instance.enumerator = enumerator;
        return instance;
    }, props({
        enumerator: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            this.enumerator[EnumeratorLike_current] = next;
        },
    }));
    return () => (enumerable) => {
        const scheduler = createEnumeratorScheduler();
        pipe(createEnumeratorObserver(scheduler), Disposable_addTo(scheduler), Observer_sourceFrom(enumerable));
        return scheduler;
    };
})();
export default Enumerable_enumerate;

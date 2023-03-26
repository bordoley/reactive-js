/// <reference types="./Enumerable.enumerate.d.ts" />

import { MAX_SAFE_INTEGER, __DEV__ } from "../../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EnumerableEnumerator_continuationQueue } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, } from "../../../__internal__/util.internal.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "../../../containers/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { isSome, none, pipe, raiseWithDebugMessage, returns, unsafeCast, } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObserverLike_notify, } from "../../../rx.js";
import Observer_assertState from "../../../rx/Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../../rx/Observer/__internal__/Observer.mixin.js";
import Observer_sourceFrom from "../../../rx/Observer/__internal__/Observer.sourceFrom.js";
import { SchedulerLike_now } from "../../../scheduling.js";
import { ContinuationLike_continuationScheduler, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "../../../scheduling/Scheduler/__internal__/Scheduler.mixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
const Enumerable_enumerate = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const typedObserverMixin = Observer_mixin();
    const createEnumeratorScheduler = createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin, typedObserverMixin, PriorityScheduler_mixin), function EnumeratorScheduler(instance) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(PriorityScheduler_mixin, instance, 0);
        init(typedObserverMixin, instance, instance, MAX_SAFE_INTEGER);
        instance[EnumerableEnumerator_continuationQueue] =
            IndexedQueue_createFifoQueue();
        // FIXME: Cast needed to coalesce the type of[ContainerLike_type] field
        return instance;
    }, props({
        [EnumerableEnumerator_continuationQueue]: none,
    }), {
        [SchedulerLike_now]: 0,
        get [PrioritySchedulerImplementationLike_shouldYield]() {
            unsafeCast(this);
            return this[EnumeratorLike_hasCurrent];
        },
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            while (!this[EnumeratorLike_hasCurrent]) {
                const continuation = this[EnumerableEnumerator_continuationQueue][QueueLike_dequeue]();
                if (isSome(continuation)) {
                    this[PrioritySchedulerImplementationLike_runContinuation](continuation);
                }
                else {
                    this[DisposableLike_dispose]();
                    break;
                }
            }
            return this[EnumeratorLike_hasCurrent];
        },
        [ContinuationSchedulerLike_schedule](continuation, delay) {
            if (delay > 0) {
                raiseWithDebugMessage("Enumerable scheduling continuation with delay");
            }
            pipe(this, Disposable_add(continuation));
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            continuation[ContinuationLike_continuationScheduler] = this;
            this[EnumerableEnumerator_continuationQueue][QueueableLike_enqueue](continuation);
        },
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            this[EnumeratorLike_current] = next;
        },
    }));
    return returns((enumerable) => {
        if (__DEV__ && !enumerable[ObservableLike_isEnumerable]) {
            raiseWithDebugMessage("Enumerable.enumerate() invoked with a non-enumerable ObservableLike");
        }
        return pipe(createEnumeratorScheduler(), Observer_sourceFrom(enumerable));
    });
})();
export default Enumerable_enumerate;

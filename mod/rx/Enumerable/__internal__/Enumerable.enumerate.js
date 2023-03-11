/// <reference types="./Enumerable.enumerate.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { PullableQueueLike_pull, } from "../../../__internal__/util.internal.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "../../../containers/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { isSome, pipe, returns, unsafeCast } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Observer_assertState from "../../../rx/Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../../rx/Observer/__internal__/Observer.mixin.js";
import Observer_sourceFrom from "../../../rx/Observer/__internal__/Observer.sourceFrom.js";
import { SchedulerLike_now } from "../../../scheduling.js";
import { ContinuationLike_continuationScheduler, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "../../../scheduling/PriorityScheduler/__internal__/PriorityScheduler.mixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_push, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
const Enumerable_enumerate = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const typedObserverMixin = Observer_mixin();
    const createEnumeratorScheduler = createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin, IndexedQueue_fifoQueueMixin(), typedObserverMixin, PriorityScheduler_mixin), function EnumeratorScheduler(instance) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(IndexedQueue_fifoQueueMixin(), instance);
        init(PriorityScheduler_mixin, instance);
        init(typedObserverMixin, instance, instance);
        // FIXME: Cast needed to coalesce the type of[ContainerLike_type] field
        return instance;
    }, props({}), {
        [SchedulerLike_now]: 0,
        get [PrioritySchedulerImplementationLike_shouldYield]() {
            unsafeCast(this);
            return this[EnumeratorLike_hasCurrent];
        },
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            while (!this[EnumeratorLike_hasCurrent]) {
                const continuation = this[PullableQueueLike_pull]();
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
        [ContinuationSchedulerLike_schedule](continuation, _delay) {
            pipe(this, Disposable_add(continuation));
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            continuation[ContinuationLike_continuationScheduler] = this;
            this[QueueLike_push](continuation);
        },
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            this[EnumeratorLike_current] = next;
        },
    }));
    return returns((enumerable) => pipe(createEnumeratorScheduler(), Observer_sourceFrom(enumerable)));
})();
export default Enumerable_enumerate;

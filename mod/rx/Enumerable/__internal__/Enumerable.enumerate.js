/// <reference types="./Enumerable.enumerate.d.ts" />

import { MAX_SAFE_INTEGER, __DEV__ } from "../../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __EnumerableEnumerator_continuationQueue } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, } from "../../../__internal__/util.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "../../../containers/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { isSome, none, pipe, raiseWithDebugMessage, returns, unsafeCast, } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObserverLike_notify, } from "../../../rx.js";
import Observer_assertState from "../../../rx/Observer/__internal__/Observer.assertState.js";
import Observer_sourceFrom from "../../../rx/Observer/__internal__/Observer.sourceFrom.js";
import { BufferLike_capacity, DisposableLike_dispose, QueueableLike_backpressureStrategy, QueueableLike_enqueue, SchedulerLike_now, } from "../../../util.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";
import { SchedulerImplementationLike_runContinuation, SchedulerImplementationLike_scheduleContinuation, SchedulerImplementationLike_shouldYield, SchedulerImplementation_mixin, } from "../../../util/Scheduler/__internal__/SchedulerImplementation.mixin.js";
import Observer_baseMixin from "../../Observer/__internal__/Observer.baseMixin.js";
const Enumerable_enumerate = /*@__PURE__*/ (() => {
    const createEnumeratorScheduler = createInstanceFactory(mix(include(MutableEnumerator_mixin(), Observer_baseMixin(), SchedulerImplementation_mixin), function EnumeratorScheduler(instance) {
        init(MutableEnumerator_mixin(), instance);
        init(SchedulerImplementation_mixin, instance, 0);
        init(Observer_baseMixin(), instance, {
            [QueueableLike_backpressureStrategy]: "overflow",
            [BufferLike_capacity]: MAX_SAFE_INTEGER,
        });
        instance[__EnumerableEnumerator_continuationQueue] =
            Queue_createIndexedQueue(MAX_SAFE_INTEGER, "overflow");
        // FIXME: Cast needed to coalesce the type of[Container_type] field
        return instance;
    }, props({
        [__EnumerableEnumerator_continuationQueue]: none,
    }), {
        [SchedulerLike_now]: 0,
        get [SchedulerImplementationLike_shouldYield]() {
            unsafeCast(this);
            return this[EnumeratorLike_hasCurrent];
        },
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            while (!this[EnumeratorLike_hasCurrent]) {
                const continuation = this[__EnumerableEnumerator_continuationQueue][QueueLike_dequeue]();
                if (isSome(continuation)) {
                    this[SchedulerImplementationLike_runContinuation](continuation);
                }
                else {
                    this[DisposableLike_dispose]();
                    break;
                }
            }
            return this[EnumeratorLike_hasCurrent];
        },
        [SchedulerImplementationLike_scheduleContinuation](continuation, delay) {
            if (delay > 0) {
                raiseWithDebugMessage("Enumerable scheduling continuation with delay");
            }
            this[__EnumerableEnumerator_continuationQueue][QueueableLike_enqueue](continuation);
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

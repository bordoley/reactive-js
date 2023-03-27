/// <reference types="./Subject.create.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DisposableLike_dispose, EnumeratorLike_current, EnumeratorLike_move, Subject_observers, } from "../../../__internal__/symbols.js";
import { IndexedLike_get, QueueLike_count, QueueLike_dequeue, } from "../../../__internal__/util.internal.js";
import Iterable_enumerate from "../../../containers/Iterable/__internal__/Iterable.enumerate.js";
import { isSome, newInstance, none, pipe, unsafeCast, } from "../../../functions.js";
import { DispatcherLike_complete, MulticastObservableLike_observerCount, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, SubjectLike_publish, } from "../../../rx.js";
import { DisposableLike_isDisposed, QueueableLike_capacity, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";
const Subject_create = 
/*@__PURE__*/ (() => {
    const createSubjectInstance = createInstanceFactory(mix(include(Disposable_mixin, IndexedQueue_fifoQueueMixin()), function Subject(instance, replay) {
        init(Disposable_mixin, instance);
        init(IndexedQueue_fifoQueueMixin(), instance, replay);
        instance[Subject_observers] = newInstance(Set);
        pipe(instance, Disposable_onDisposed(e => {
            const enumerator = pipe(instance[Subject_observers], Iterable_enumerate());
            while (enumerator[EnumeratorLike_move]()) {
                const observer = enumerator[EnumeratorLike_current];
                if (isSome(e)) {
                    observer[DisposableLike_dispose](e);
                }
                else {
                    observer[DispatcherLike_complete]();
                }
            }
        }));
        return instance;
    }, props({
        [Subject_observers]: none,
    }), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[Subject_observers].size;
        },
        [SubjectLike_publish](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            const replay = this[QueueableLike_capacity];
            if (replay > 0 && !this[QueueableLike_enqueue](next)) {
                this[QueueLike_dequeue]();
            }
            for (const observer of this[Subject_observers]) {
                observer[QueueableLike_enqueue](next);
            }
        },
        [ObservableLike_observe](observer) {
            if (!this[DisposableLike_isDisposed]) {
                const { [Subject_observers]: observers } = this;
                observers.add(observer);
                pipe(observer, Disposable_onDisposed(_ => {
                    observers.delete(observer);
                }));
            }
            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            const count = this[QueueLike_count];
            for (let i = 0; i < count; i++) {
                const next = this[IndexedLike_get](i);
                observer[QueueableLike_enqueue](next);
            }
        },
    }));
    return (options) => {
        var _a;
        const replay = clampPositiveInteger((_a = options === null || options === void 0 ? void 0 : options.replay) !== null && _a !== void 0 ? _a : 0);
        return createSubjectInstance(replay);
    };
})();
export default Subject_create;

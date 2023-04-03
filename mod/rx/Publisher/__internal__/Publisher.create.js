/// <reference types="./Publisher.create.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DisposableLike_dispose, EnumeratorLike_current, EnumeratorLike_move, Publisher_observers, } from "../../../__internal__/symbols.js";
import Iterable_enumerate from "../../../containers/Iterable/__internal__/Iterable.enumerate.js";
import { isSome, newInstance, none, pipe, unsafeCast, } from "../../../functions.js";
import { DispatcherLike_complete, MulticastObservableLike_observerCount, MulticastObservableLike_replayBuffer, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, PublisherLike_publish, } from "../../../rx.js";
import { CollectionLike_count, DisposableLike_isDisposed, KeyedCollectionLike_get, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
const Publisher_create = /*@__PURE__*/ (() => {
    const createPublisherInstance = createInstanceFactory(mix(include(Disposable_mixin), function Publisher(instance, replay) {
        init(Disposable_mixin, instance);
        instance[Publisher_observers] = newInstance(Set);
        instance[MulticastObservableLike_replayBuffer] =
            IndexedQueue_createFifoQueue(replay, "drop-oldest");
        pipe(instance, Disposable_onDisposed(e => {
            const enumerator = pipe(instance[Publisher_observers], Iterable_enumerate());
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
        [Publisher_observers]: none,
        [MulticastObservableLike_replayBuffer]: none,
    }), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[Publisher_observers].size;
        },
        [PublisherLike_publish](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            this[MulticastObservableLike_replayBuffer][QueueableLike_enqueue](next);
            for (const observer of this[Publisher_observers]) {
                observer[QueueableLike_enqueue](next);
            }
        },
        [ObservableLike_observe](observer) {
            if (!this[DisposableLike_isDisposed]) {
                const { [Publisher_observers]: observers } = this;
                observers.add(observer);
                pipe(observer, Disposable_onDisposed(_ => {
                    observers.delete(observer);
                }));
            }
            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            const buffer = this[MulticastObservableLike_replayBuffer];
            const count = buffer[CollectionLike_count];
            for (let i = 0; i < count; i++) {
                const next = buffer[KeyedCollectionLike_get](i);
                observer[QueueableLike_enqueue](next);
            }
        },
    }));
    return (options) => {
        const replay = clampPositiveInteger(options?.replay ?? 0);
        return createPublisherInstance(replay);
    };
})();
export default Publisher_create;

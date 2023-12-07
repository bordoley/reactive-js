/// <reference types="./ReplayPublisher.create.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { CollectionLike_count, KeyedLike_get } from "../../../collections.js";
import { DispatcherLike_complete, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, ReplayObservableLike_buffer, ReplayPublisherLike_observerCount, } from "../../../concurrent.js";
import { EventListenerLike_isErrorSafe } from "../../../events.js";
import { error, isSome, newInstance, none, pipe } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, QueueableLike_enqueue, SinkLike_notify, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Queue_createIndexedQueue from "../../../utils/Queue/__internal__/Queue.createIndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
const ReplayPublisher_create = 
/*@__PURE__*/ (() => {
    const ReplayPublisher_observers = Symbol("ReplayPublisher_observers");
    const createReplayPublisherInstance = createInstanceFactory(mix(include(DisposableMixin), function ReplayPublisher(instance, replay) {
        init(DisposableMixin, instance);
        instance[ReplayPublisher_observers] =
            newInstance(Set);
        instance[ReplayObservableLike_buffer] = Queue_createIndexedQueue(replay, "drop-oldest");
        pipe(instance, Disposable.onDisposed(e => {
            for (const observer of instance[ReplayPublisher_observers]) {
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
        [ReplayPublisher_observers]: none,
        [ReplayObservableLike_buffer]: none,
    }), {
        [EventListenerLike_isErrorSafe]: true,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isPure]: true,
        [ObservableLike_isRunnable]: false,
        get [ReplayPublisherLike_observerCount]() {
            unsafeCast(this);
            return this[ReplayPublisher_observers].size;
        },
        [SinkLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            this[ReplayObservableLike_buffer][QueueableLike_enqueue](next);
            for (const observer of this[ReplayPublisher_observers]) {
                try {
                    observer[QueueableLike_enqueue](next);
                }
                catch (e) {
                    observer[DisposableLike_dispose](error(e));
                }
            }
        },
        [ObservableLike_observe](observer) {
            const { [ReplayPublisher_observers]: observers } = this;
            if (isSome(this[DisposableLike_error])) {
                observer[DisposableLike_dispose](this[DisposableLike_error]);
            }
            if (observers.has(observer)) {
                return;
            }
            observers.add(observer);
            pipe(observer, Disposable.onDisposed(_ => {
                observers.delete(observer);
            }));
            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            const buffer = this[ReplayObservableLike_buffer];
            const count = buffer[CollectionLike_count];
            for (let i = 0; i < count; i++) {
                const next = buffer[KeyedLike_get](i);
                observer[QueueableLike_enqueue](next);
            }
            if (this[DisposableLike_isDisposed]) {
                observer[DispatcherLike_complete]();
            }
        },
    }));
    return (options) => {
        const replay = clampPositiveInteger(options?.replay ?? 0);
        return createReplayPublisherInstance(replay);
    };
})();
export default ReplayPublisher_create;

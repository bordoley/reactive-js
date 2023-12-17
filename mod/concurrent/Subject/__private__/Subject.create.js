/// <reference types="./Subject.create.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { CollectionLike_count, KeyedLike_get } from "../../../collections.js";
import { DispatcherLike_complete, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, ReplayObservableLike_buffer, SubjectLike_observerCount, } from "../../../concurrent.js";
import { EventListenerLike_isErrorSafe, SinkLike_notify, } from "../../../events.js";
import { error, isSome, newInstance, none, pipe } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
const Subject_create = /*@__PURE__*/ (() => {
    const Subject_observers = Symbol("Subject_observers");
    const createSubjectInstance = createInstanceFactory(mix(include(DisposableMixin), function Subject(instance, replay) {
        init(DisposableMixin, instance);
        instance[Subject_observers] = newInstance(Set);
        instance[ReplayObservableLike_buffer] = IndexedQueue.create({
            capacity: replay,
            backpressureStrategy: "drop-oldest",
        });
        pipe(instance, Disposable.onDisposed(e => {
            for (const observer of instance[Subject_observers]) {
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
        [ReplayObservableLike_buffer]: none,
    }), {
        [EventListenerLike_isErrorSafe]: true,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isPure]: true,
        [ObservableLike_isRunnable]: false,
        get [SubjectLike_observerCount]() {
            unsafeCast(this);
            return this[Subject_observers].size;
        },
        [SinkLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            this[ReplayObservableLike_buffer][QueueableLike_enqueue](next);
            for (const observer of this[Subject_observers]) {
                try {
                    observer[QueueableLike_enqueue](next);
                }
                catch (e) {
                    observer[DisposableLike_dispose](error(e));
                }
            }
        },
        [ObservableLike_observe](observer) {
            const { [Subject_observers]: observers } = this;
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
        return createSubjectInstance(replay);
    };
})();
export default Subject_create;

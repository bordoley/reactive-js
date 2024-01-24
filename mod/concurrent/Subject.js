/// <reference types="./Subject.d.ts" />

import { Set, Set_add, Set_delete, Set_has, Set_size, } from "../__internal__/constants.js";
import { clampPositiveInteger } from "../__internal__/math.js";
import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { DispatcherLike_complete, ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../concurrent.js";
import { EventListenerLike_isErrorSafe, EventListenerLike_notify, } from "../events.js";
import { error, isSome, newInstance, none, pipe } from "../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, DropOldestBackpressureStrategy, IndexedQueueLike_get, QueueLike_count, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../utils.js";
import * as Disposable from "../utils/Disposable.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import IndexedQueueMixin from "../utils/__mixins__/IndexedQueueMixin.js";
export const create = /*@__PURE__*/ (() => {
    const Subject_autoDispose = Symbol("Subject_autoDispose");
    const Subject_observers = Symbol("Subject_observers");
    return mixInstanceFactory(include(DisposableMixin, IndexedQueueMixin()), function Subject(instance, options) {
        const replay = clampPositiveInteger(options?.replay ?? 0);
        init(DisposableMixin, instance);
        init(IndexedQueueMixin(), instance, {
            [QueueableLike_backpressureStrategy]: DropOldestBackpressureStrategy,
            [QueueableLike_capacity]: replay,
        });
        instance[Subject_observers] = newInstance(Set);
        instance[Subject_autoDispose] = options?.autoDispose ?? false;
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
        [Subject_autoDispose]: false,
        [Subject_observers]: none,
    }), {
        [EventListenerLike_isErrorSafe]: true,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isMulticasted]: true,
        [ObservableLike_isPure]: true,
        [ObservableLike_isRunnable]: false,
        [EventListenerLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            this[QueueableLike_enqueue](next);
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
            if (observers[Set_has](observer)) {
                return;
            }
            observers[Set_add](observer);
            pipe(observer, Disposable.onDisposed(_ => {
                observers[Set_delete](observer);
                if (this[Subject_autoDispose] &&
                    this[Subject_observers][Set_size] === 0) {
                    this[DisposableLike_dispose]();
                }
            }));
            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            const count = this[QueueLike_count];
            for (let i = 0; i < count; i++) {
                const next = this[IndexedQueueLike_get](i);
                observer[QueueableLike_enqueue](next);
            }
            if (this[DisposableLike_isDisposed]) {
                observer[DispatcherLike_complete]();
            }
        },
    });
})();

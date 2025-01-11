/// <reference types="./Subject.d.ts" />

import { Set, Set_add, Set_delete, Set_has, Set_size, } from "../__internal__/constants.js";
import { clampPositiveInteger } from "../__internal__/math.js";
import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { DispatcherLike_complete, ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../concurrent.js";
import { EventListenerLike_notify } from "../events.js";
import { error, isSome, newInstance, none, pipe } from "../functions.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import IndexedQueueMixin from "../utils/__mixins__/IndexedQueueMixin.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, DropOldestBackpressureStrategy, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../utils.js";
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
        pipe(instance, DisposableContainer.onDisposed(e => {
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
            const observers = this[Subject_observers];
            if (isSome(this[DisposableLike_error])) {
                observer[DisposableLike_dispose](this[DisposableLike_error]);
            }
            if (observers[Set_has](observer)) {
                return;
            }
            observers[Set_add](observer);
            pipe(observer, DisposableContainer.onDisposed(_ => {
                observers[Set_delete](observer);
                if (this[Subject_autoDispose] &&
                    this[Subject_observers][Set_size] === 0) {
                    this[DisposableLike_dispose]();
                }
            }));
            for (const next of this) {
                observer[QueueableLike_enqueue](next);
            }
            if (this[DisposableLike_isDisposed]) {
                observer[DispatcherLike_complete]();
            }
        },
    });
})();

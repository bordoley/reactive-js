/// <reference types="./Subject.d.ts" />

import { Set, Set_add, Set_delete, Set_has, Set_size, } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, ObservableLike_observe, } from "../computations.js";
import { error, isNone, isSome, newInstance, none, pipe, } from "../functions.js";
import { clampPositiveInteger } from "../math.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import QueueMixin from "../utils/__mixins__/QueueMixin.js";
import { DispatcherLike_complete, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, DropOldestBackpressureStrategy, EventListenerLike_notify, ObserverLike_notify, QueueableLike_enqueue, SchedulerLike_inContinuation, } from "../utils.js";
import * as Iterable from "./Iterable.js";
export const create = /*@__PURE__*/ (() => {
    const Subject_observers = Symbol("Subject_observers");
    const Subject_onObserverDisposed = Symbol("Subject_onObserverDisposed");
    function onSubjectDisposed(e) {
        const maybeObservers = this[Subject_observers];
        const observers = maybeObservers instanceof Set
            ? maybeObservers
            : isSome(maybeObservers)
                ? [maybeObservers]
                : [];
        for (const observer of observers) {
            if (isSome(e)) {
                observer[DisposableLike_dispose](e);
            }
            else {
                observer[DispatcherLike_complete]();
            }
        }
        this[Subject_observers] = none;
    }
    return mixInstanceFactory(include(DisposableMixin, QueueMixin()), function Subject(options) {
        const replay = clampPositiveInteger(options?.replay ?? 0);
        init(DisposableMixin, this);
        init(QueueMixin(), this, {
            backpressureStrategy: DropOldestBackpressureStrategy,
            capacity: replay,
        });
        this[Subject_observers] = newInstance(Set);
        const autoDispose = options?.autoDispose ?? false;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[Subject_onObserverDisposed] = function onObserverDisposed() {
            const maybeObservers = instance[Subject_observers];
            if (maybeObservers instanceof Set) {
                maybeObservers[Set_delete](this);
            }
            else if (maybeObservers === this) {
                instance[Subject_observers] = none;
            }
            if (maybeObservers instanceof Set && maybeObservers[Set_size] == 1) {
                instance[Subject_observers] =
                    Iterable.first()(maybeObservers);
            }
            if (autoDispose && isNone(instance[Subject_observers])) {
                instance[DisposableLike_dispose]();
                instance[Subject_observers] = none;
            }
        };
        pipe(this, DisposableContainer.onDisposed(onSubjectDisposed));
        return this;
    }, props({
        [Subject_observers]: none,
        [Subject_onObserverDisposed]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [EventListenerLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            this[QueueableLike_enqueue](next);
            const maybeObservers = this[Subject_observers];
            const observers = maybeObservers instanceof Set
                ? maybeObservers
                : isSome(maybeObservers)
                    ? [maybeObservers]
                    : [];
            for (const observer of observers) {
                try {
                    if (observer[SchedulerLike_inContinuation]) {
                        observer[ObserverLike_notify](next);
                    }
                    else {
                        observer[QueueableLike_enqueue](next);
                    }
                }
                catch (e) {
                    observer[DisposableLike_dispose](error(e));
                }
            }
        },
        [ObservableLike_observe](observer) {
            const maybeObservers = this[Subject_observers];
            if ((maybeObservers instanceof Set &&
                maybeObservers[Set_has](observer)) ||
                maybeObservers === observer) {
                return;
            }
            if (isSome(this[DisposableLike_error])) {
                observer[DisposableLike_dispose](this[DisposableLike_error]);
                return;
            }
            if (maybeObservers instanceof Set) {
                maybeObservers[Set_add](observer);
            }
            else if (isSome(maybeObservers)) {
                const listeners = (this[Subject_observers] =
                    newInstance(Set));
                listeners[Set_add](maybeObservers);
                listeners[Set_add](observer);
            }
            else {
                this[Subject_observers] = observer;
            }
            pipe(observer, DisposableContainer.onDisposed(this[Subject_onObserverDisposed]));
            for (const next of this) {
                observer[QueueableLike_enqueue](next);
            }
            if (this[DisposableLike_isDisposed]) {
                observer[DispatcherLike_complete]();
            }
        },
    });
})();

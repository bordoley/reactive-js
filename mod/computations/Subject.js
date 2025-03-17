/// <reference types="./Subject.d.ts" />

import { Set, Set_add, Set_delete, Set_has, Set_size, } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, super_, } from "../__internal__/mixins.js";
import { BroadcasterLike_connect, ComputationLike_isDeferred, ComputationLike_isSynchronous, } from "../computations.js";
import { call, error, isNone, isSome, newInstance, none, pipe, } from "../functions.js";
import { clampPositiveInteger } from "../math.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import QueueingConsumerMixin from "../utils/__mixins__/QueueingConsumerMixin.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, DropOldestBackpressureStrategy, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../utils.js";
import * as Iterable from "./Iterable.js";
export const create = /*@__PURE__*/ (() => {
    const Subject_sinks = Symbol("Subject_sinks");
    const Subject_onSinkDisposed = Symbol("Subject_onSinkDisposed");
    function onSubjectDisposed(e) {
        const maybeSinks = this[Subject_sinks];
        const sinks = maybeSinks instanceof Set
            ? maybeSinks
            : isSome(maybeSinks)
                ? [maybeSinks]
                : [];
        for (const sink of sinks) {
            if (isSome(e)) {
                sink[DisposableLike_dispose](e);
            }
            else {
                sink[SinkLike_complete]();
            }
        }
        this[Subject_sinks] = none;
    }
    return mixInstanceFactory(include(DisposableMixin, QueueingConsumerMixin()), function Subject(options) {
        const replay = clampPositiveInteger(options?.replay ?? 0);
        init(DisposableMixin, this);
        init(QueueingConsumerMixin(), this, {
            backpressureStrategy: DropOldestBackpressureStrategy,
            capacity: replay,
        });
        this[Subject_sinks] = newInstance(Set);
        const autoDispose = options?.autoDispose ?? false;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[Subject_onSinkDisposed] = function onSinkDisposed() {
            const maybeSinks = instance[Subject_sinks];
            if (maybeSinks instanceof Set) {
                maybeSinks[Set_delete](this);
            }
            else if (maybeSinks === this) {
                instance[Subject_sinks] = none;
            }
            if (maybeSinks instanceof Set && maybeSinks[Set_size] == 1) {
                instance[Subject_sinks] = Iterable.first()(maybeSinks);
            }
            if (autoDispose && isNone(instance[Subject_sinks])) {
                instance[DisposableLike_dispose]();
                instance[Subject_sinks] = none;
            }
        };
        pipe(this, DisposableContainer.onDisposed(onSubjectDisposed));
        return this;
    }, props({
        [Subject_sinks]: none,
        [Subject_onSinkDisposed]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [EventListenerLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            super_(QueueingConsumerMixin(), this, EventListenerLike_notify, next);
            const maybeSinks = this[Subject_sinks];
            const sinks = maybeSinks instanceof Set
                ? maybeSinks
                : isSome(maybeSinks)
                    ? [maybeSinks]
                    : [];
            for (const sink of sinks) {
                if (sink[SinkLike_isCompleted]) {
                    // be sure to remove completed sinks
                    // ideally we would get notified when an sink
                    // is completed but this api does not yet exist.
                    call(this[Subject_onSinkDisposed], sink);
                    continue;
                }
                try {
                    sink[EventListenerLike_notify](next);
                }
                catch (e) {
                    sink[DisposableLike_dispose](error(e));
                }
            }
        },
        [BroadcasterLike_connect](sink) {
            const maybeSinks = this[Subject_sinks];
            if ((maybeSinks instanceof Set && maybeSinks[Set_has](sink)) ||
                maybeSinks === sink) {
                return;
            }
            if (isSome(this[DisposableLike_error])) {
                sink[DisposableLike_dispose](this[DisposableLike_error]);
                return;
            }
            if (!this[DisposableLike_isDisposed]) {
                if (maybeSinks instanceof Set) {
                    maybeSinks[Set_add](sink);
                }
                else if (isSome(maybeSinks)) {
                    const listeners = (this[Subject_sinks] =
                        newInstance(Set));
                    listeners[Set_add](maybeSinks);
                    listeners[Set_add](sink);
                }
                else {
                    this[Subject_sinks] = sink;
                }
                pipe(sink, DisposableContainer.onDisposed(this[Subject_onSinkDisposed]));
            }
            for (const next of this) {
                sink[EventListenerLike_notify](next);
            }
            if (this[DisposableLike_isDisposed]) {
                sink[SinkLike_complete]();
            }
        },
    });
})();

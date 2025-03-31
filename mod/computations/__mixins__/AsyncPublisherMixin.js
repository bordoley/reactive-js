/// <reference types="./AsyncPublisherMixin.d.ts" />

import { Set_add, Set_delete, Set_has, Set_size, } from "../../__internal__/constants.js";
import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, SourceLike_subscribe, } from "../../computations.js";
import { call, error, isNone, isSome, newInstance, none, pipe, returns, } from "../../functions.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import QueueMixin from "../../utils/__mixins__/QueueMixin.js";
import { DisposableContainerLike_add, DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, QueueLike_enqueue, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
const AsyncPublisherMixin = /*@__PURE__*/ (() => {
    const AsyncPublisher_EventListeners = Symbol("AsyncPublisher_EventListeners");
    const AsyncPublisher_onSinkDisposed = Symbol("AsyncPublisher_onSinkDisposed");
    const AsyncPublisher_isDispatchingEvents = Symbol("AsyncPublisher_isDispatchingEvents");
    async function dispatch() {
        const isRunning = this[AsyncPublisher_isDispatchingEvents];
        if (isRunning) {
            return;
        }
        this[AsyncPublisher_isDispatchingEvents] = true;
        await Promise.resolve();
        while (!this[DisposableLike_isDisposed] &&
            this[EnumeratorLike_moveNext]()) {
            const next = this[EnumeratorLike_current];
            const maybeEventListeners = this[AsyncPublisher_EventListeners];
            const eventListeners = maybeEventListeners instanceof Set
                ? maybeEventListeners
                : isSome(maybeEventListeners)
                    ? [maybeEventListeners]
                    : [];
            for (const eventListener of eventListeners) {
                try {
                    eventListener[EventListenerLike_notify](next);
                }
                catch (e) {
                    eventListener[DisposableLike_dispose](error(e));
                }
            }
            await Promise.resolve();
        }
        if (!this[DisposableLike_isDisposed] && this[SinkLike_isCompleted]) {
            const maybeEventListeners = this[AsyncPublisher_EventListeners];
            const EventListeners = maybeEventListeners instanceof Set
                ? maybeEventListeners
                : isSome(maybeEventListeners)
                    ? [maybeEventListeners]
                    : [];
            for (const EventListener of EventListeners) {
                EventListener[DisposableLike_dispose]();
            }
            this[DisposableLike_dispose]();
        }
        this[AsyncPublisher_isDispatchingEvents] = false;
    }
    function onPublisherDisposed(e) {
        this[SinkLike_isCompleted] = true;
        const maybeEventListeners = this[AsyncPublisher_EventListeners];
        const EventListeners = maybeEventListeners instanceof Set
            ? maybeEventListeners
            : isSome(maybeEventListeners)
                ? [maybeEventListeners]
                : [];
        for (const EventListener of EventListeners) {
            EventListener[DisposableLike_dispose](e);
        }
    }
    return returns(mix(include(DisposableMixin, QueueMixin()), function AsyncPublisherMixin(options) {
        init(DisposableMixin, this);
        init(QueueMixin(), this, {} /* Maybe take in queue options*/);
        const autoDispose = options?.autoDispose ?? false;
        pipe(this, DisposableContainer.onDisposed(onPublisherDisposed));
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[AsyncPublisher_onSinkDisposed] = function onSinkDisposed() {
            const maybeEventListeners = instance[AsyncPublisher_EventListeners];
            if (maybeEventListeners instanceof Set) {
                maybeEventListeners[Set_delete](this);
            }
            else if (maybeEventListeners === this) {
                instance[AsyncPublisher_EventListeners] = none;
            }
            if (maybeEventListeners instanceof Set &&
                maybeEventListeners[Set_size] == 1) {
                for (const listener of maybeEventListeners) {
                    instance[AsyncPublisher_EventListeners] = listener;
                }
            }
            if (autoDispose && isNone(instance[AsyncPublisher_EventListeners])) {
                instance[DisposableLike_dispose]();
            }
        };
        return this;
    }, props({
        [SinkLike_isCompleted]: false,
        [AsyncPublisher_EventListeners]: none,
        [AsyncPublisher_onSinkDisposed]: none,
        [AsyncPublisher_isDispatchingEvents]: false,
    }), proto({
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ComputationLike_isPure]: true,
        [EventListenerLike_notify](next) {
            if (this[SinkLike_isCompleted]) {
                return;
            }
            this[QueueLike_enqueue](next);
            call(dispatch, this);
        },
        [SinkLike_complete]() {
            if (this[SinkLike_isCompleted]) {
                return;
            }
            this[SinkLike_isCompleted] = true;
            call(dispatch, this);
        },
        [SourceLike_subscribe](eventListener) {
            const maybeEventListeners = this[AsyncPublisher_EventListeners];
            this[DisposableContainerLike_add](eventListener);
            if (this[DisposableLike_isDisposed] ||
                eventListener === this ||
                (maybeEventListeners instanceof Set &&
                    maybeEventListeners[Set_has](eventListener)) ||
                maybeEventListeners === eventListener) {
                return;
            }
            if (maybeEventListeners instanceof Set) {
                maybeEventListeners[Set_add](eventListener);
            }
            else if (isSome(maybeEventListeners)) {
                const EventListeners = (this[AsyncPublisher_EventListeners] =
                    newInstance(Set));
                EventListeners[Set_add](maybeEventListeners);
                EventListeners[Set_add](eventListener);
            }
            else {
                this[AsyncPublisher_EventListeners] = eventListener;
            }
            pipe(eventListener, DisposableContainer.onDisposed(this[AsyncPublisher_onSinkDisposed]));
        },
    })));
})();
export default AsyncPublisherMixin;

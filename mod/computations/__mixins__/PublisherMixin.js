/// <reference types="./PublisherMixin.d.ts" />

import { Set_add, Set_delete, Set_has, Set_size, } from "../../__internal__/constants.js";
import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, SourceLike_subscribe, } from "../../computations.js";
import { error, isNone, isSome, newInstance, none, pipe, returns, } from "../../functions.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Iterable from "../Iterable.js";
const PublisherMixin = /*@__PURE__*/ (() => {
    const Publisher_EventListeners = Symbol("Publisher_EventListeners");
    const Publisher_onSinkDisposed = Symbol("Publisher_onSinkDisposed");
    function onPublisherDisposed(e) {
        const maybeEventListeners = this[Publisher_EventListeners];
        const EventListeners = maybeEventListeners instanceof Set
            ? maybeEventListeners
            : isSome(maybeEventListeners)
                ? [maybeEventListeners]
                : [];
        if (isSome(e)) {
            for (const EventListener of EventListeners) {
                EventListener[DisposableLike_dispose](e);
            }
        }
        this[Publisher_EventListeners] = none;
        this[SinkLike_isCompleted] = true;
    }
    return returns(mix(include(DisposableMixin), function PublisherMixin(options) {
        init(DisposableMixin, this);
        const autoDispose = options?.autoDispose ?? false;
        pipe(this, DisposableContainer.onDisposed(onPublisherDisposed));
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[Publisher_onSinkDisposed] = function onSinkDisposed() {
            const maybeEventListeners = instance[Publisher_EventListeners];
            if (maybeEventListeners instanceof Set) {
                maybeEventListeners[Set_delete](this);
            }
            else if (maybeEventListeners === this) {
                instance[Publisher_EventListeners] = none;
            }
            if (maybeEventListeners instanceof Set &&
                maybeEventListeners[Set_size] == 1) {
                instance[Publisher_EventListeners] =
                    Iterable.first()(maybeEventListeners);
            }
            if (autoDispose && isNone(instance[Publisher_EventListeners])) {
                instance[DisposableLike_dispose]();
            }
        };
        return this;
    }, props({
        [SinkLike_isCompleted]: false,
        [Publisher_EventListeners]: none,
        [Publisher_onSinkDisposed]: none,
    }), proto({
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [EventListenerLike_notify](next) {
            if (this[SinkLike_isCompleted]) {
                return;
            }
            const maybeEventListeners = this[Publisher_EventListeners];
            const EventListeners = maybeEventListeners instanceof Set
                ? maybeEventListeners
                : isSome(maybeEventListeners)
                    ? [maybeEventListeners]
                    : [];
            for (const EventListener of EventListeners) {
                try {
                    EventListener[EventListenerLike_notify](next);
                }
                catch (e) {
                    EventListener[DisposableLike_dispose](error(e));
                }
            }
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkLike_isCompleted];
            this[SinkLike_isCompleted] = true;
            if (isCompleted) {
                return;
            }
            const maybeEventListeners = this[Publisher_EventListeners];
            const EventListeners = maybeEventListeners instanceof Set
                ? maybeEventListeners
                : isSome(maybeEventListeners)
                    ? [maybeEventListeners]
                    : [];
            for (const EventListener of EventListeners) {
                EventListener[DisposableLike_dispose]();
            }
            this[DisposableLike_dispose]();
        },
        [SourceLike_subscribe](EventListener) {
            const maybeEventListeners = this[Publisher_EventListeners];
            if (this[DisposableLike_isDisposed] ||
                EventListener === this ||
                (maybeEventListeners instanceof Set &&
                    maybeEventListeners[Set_has](EventListener)) ||
                maybeEventListeners === EventListener) {
                return;
            }
            if (maybeEventListeners instanceof Set) {
                maybeEventListeners[Set_add](EventListener);
            }
            else if (isSome(maybeEventListeners)) {
                const EventListeners = (this[Publisher_EventListeners] =
                    newInstance(Set));
                EventListeners[Set_add](maybeEventListeners);
                EventListeners[Set_add](EventListener);
            }
            else {
                this[Publisher_EventListeners] = EventListener;
            }
            pipe(EventListener, DisposableContainer.onDisposed(this[Publisher_onSinkDisposed]));
        },
    })));
})();
export default PublisherMixin;

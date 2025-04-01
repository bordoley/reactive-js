/// <reference types="./PublisherMixin.d.ts" />

import { Set_add, Set_delete, Set_has, Set_size, } from "../../__internal__/constants.js";
import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, EventSourceLike_subscribe, } from "../../computations.js";
import { error, isNone, isSome, newInstance, none, pipe, returns, } from "../../functions.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import { DisposableContainerLike_add, DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, } from "../../utils.js";
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
        for (const EventListener of EventListeners) {
            EventListener[DisposableLike_dispose](e);
        }
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
                for (const listener of maybeEventListeners) {
                    instance[Publisher_EventListeners] = listener;
                }
            }
            if (autoDispose && isNone(instance[Publisher_EventListeners])) {
                instance[DisposableLike_dispose]();
            }
        };
        return this;
    }, props({
        [Publisher_EventListeners]: none,
        [Publisher_onSinkDisposed]: none,
    }), proto({
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ComputationLike_isPure]: true,
        [EventListenerLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            // FIXME: Maybe we should invoke listeners asynchronously
            // by awaiting a promise
            const maybeEventListeners = this[Publisher_EventListeners];
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
        },
        [EventSourceLike_subscribe](eventListener) {
            const maybeEventListeners = this[Publisher_EventListeners];
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
                const EventListeners = (this[Publisher_EventListeners] =
                    newInstance(Set));
                EventListeners[Set_add](maybeEventListeners);
                EventListeners[Set_add](eventListener);
            }
            else {
                this[Publisher_EventListeners] = eventListener;
            }
            pipe(eventListener, DisposableContainer.onDisposed(this[Publisher_onSinkDisposed]));
        },
    })));
})();
export default PublisherMixin;

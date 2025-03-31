/// <reference types="./EventListener.d.ts" />

import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
export const create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DisposableMixin), function EventListener(notify) {
        init(DisposableMixin, this);
        this[EventListenerLike_notify] = notify;
        return this;
    }, props({
        [EventListenerLike_notify]: none,
    }));
})();
export const toSink = 
/*@__PURE__*/ (() => {
    const EventListenerToSink_eventListener = Symbol("EventListenerToSink_eventListener");
    return returns(mixInstanceFactory(include(DelegatingDisposableMixin), function EventListenerToSink(listener) {
        init(DelegatingDisposableMixin, this, listener);
        this[EventListenerToSink_eventListener] = listener;
        return this;
    }, props({
        [EventListenerToSink_eventListener]: none,
    }), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[EventListenerToSink_eventListener][DisposableLike_isDisposed];
        },
        [EventListenerLike_notify](next) {
            this[EventListenerToSink_eventListener][EventListenerLike_notify](next);
        },
        [SinkLike_complete]() {
            this[EventListenerToSink_eventListener][DisposableLike_dispose]();
        },
    })));
})();

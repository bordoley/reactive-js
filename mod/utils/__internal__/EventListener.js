/// <reference types="./EventListener.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { EventListenerLike_notify, } from "../../utils.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "../__mixins__/DisposeOnCompleteSinkMixin.js";
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
    return returns(mixInstanceFactory(include(DelegatingDisposableMixin, DisposeOnCompleteSinkMixin()), function EventListenerToSink(listener) {
        init(DelegatingDisposableMixin, this, listener);
        init(DisposeOnCompleteSinkMixin(), this);
        this[EventListenerToSink_eventListener] = listener;
        return this;
    }, props({
        [EventListenerToSink_eventListener]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            this[EventListenerToSink_eventListener][EventListenerLike_notify](next);
        },
    })));
})();

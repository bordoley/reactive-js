/// <reference types="./EventSource.addEventHandler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EventListenerLike_isErrorSafe, EventSourceLike_addEventListener, SinkLike_notify, } from "../../../events.js";
import { none } from "../../../functions.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
const EventListener_createInternal = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(DisposableMixin), function EventListener(instance, notify) {
        init(DisposableMixin, instance);
        instance[SinkLike_notify] = notify;
        return instance;
    }, props({
        [SinkLike_notify]: none,
    }), {
        [EventListenerLike_isErrorSafe]: false,
    }));
})();
const EventSource_addEventHandler = (handler) => (source) => {
    const eventListener = EventListener_createInternal(handler);
    source[EventSourceLike_addEventListener](eventListener);
    return eventListener;
};
export default EventSource_addEventHandler;

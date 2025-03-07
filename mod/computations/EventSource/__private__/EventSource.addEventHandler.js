/// <reference types="./EventSource.addEventHandler.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { EventListenerLike_notify, EventSourceLike_addEventListener, } from "../../../computations.js";
import { none } from "../../../functions.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
const EventListener_createInternal = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DisposableMixin), function EventListener(instance, notify) {
        init(DisposableMixin, instance);
        instance[EventListenerLike_notify] = notify;
        return instance;
    }, props({
        [EventListenerLike_notify]: none,
    }));
})();
const EventSource_addEventHandler = (handler) => (source) => {
    const eventListener = EventListener_createInternal(handler);
    source[EventSourceLike_addEventListener](eventListener);
    return eventListener;
};
export default EventSource_addEventHandler;

/// <reference types="./EventSource.addEventHandler.d.ts" />

import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import { EventListenerLike_isErrorSafe, EventSourceLike_addEventListener, SinkLike_notify, } from "../../types.js";
const EventListener_createInternal = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_mixin), function EventListener(instance, notify, isErrorSafe) {
        init(Disposable_mixin, instance);
        instance[SinkLike_notify] = notify;
        instance[EventListenerLike_isErrorSafe] = isErrorSafe;
        return instance;
    }, props({
        [SinkLike_notify]: none,
        [EventListenerLike_isErrorSafe]: false,
    }), {}));
})();
const EventSource_addEventHandler = (handler) => (source) => {
    const eventListener = EventListener_createInternal(handler, false);
    source[EventSourceLike_addEventListener](eventListener);
    return eventListener;
};
export default EventSource_addEventHandler;

/// <reference types="./EventSource.map.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { EventListenerLike_notify, } from "../../../events.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_map = /*@__PURE__*/ (() => {
    const MapEventListener_selector = Symbol("MapEventListener_selector");
    const MapEventListener_delegate = Symbol("MapEventListener_delegate");
    const createMapEventListener = (() => mixInstanceFactory(include(DelegatingDisposableMixin()), function MapEventListener(instance, delegate, selector) {
        init(DelegatingDisposableMixin(), instance, delegate);
        instance[MapEventListener_selector] = selector;
        instance[MapEventListener_delegate] = delegate;
        return instance;
    }, props({
        [MapEventListener_selector]: none,
        [MapEventListener_delegate]: none,
    }), {
        [EventListenerLike_notify](next) {
            const mapped = this[MapEventListener_selector](next);
            this[MapEventListener_delegate][EventListenerLike_notify](mapped);
        },
    }))();
    return (selector) => pipe((createMapEventListener), partial(selector), EventSource_lift);
})();
export default EventSource_map;

/// <reference types="./EventSource.map.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { EventListenerLike_notify } from "../../../utils.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_map = /*@__PURE__*/ (() => {
    const MapEventListener_selector = Symbol("MapEventListener_selector");
    const MapEventListener_delegate = Symbol("MapEventListener_delegate");
    const createMapEventListener = (() => mixInstanceFactory(include(DelegatingDisposableMixin), function MapEventListener(delegate, selector) {
        init(DelegatingDisposableMixin, this, delegate);
        this[MapEventListener_selector] = selector;
        this[MapEventListener_delegate] = delegate;
        return this;
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

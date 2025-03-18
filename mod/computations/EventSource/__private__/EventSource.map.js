/// <reference types="./EventSource.map.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import MapMixin from "../../../utils/__mixins__/EventListeners/MapMixin.js";
import LiftedEventListenerMixin from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_map = /*@__PURE__*/ (() => {
    const createMapEventListener = mixInstanceFactory(include(LiftedEventListenerMixin(), MapMixin()), function MapEventListener(delegate, selector) {
        init(LiftedEventListenerMixin(), this, delegate, none);
        init(MapMixin(), this, selector);
        return this;
    });
    return (selector) => pipe(createMapEventListener, partial(selector), EventSource_lift);
})();
export default EventSource_map;

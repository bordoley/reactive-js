/// <reference types="./EventSource.map.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { EventListenerLike_isErrorSafe, } from "../../../rx.js";
import MapSinkMixin from "../../__mixins__/MapSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_map = /*@__PURE__*/ (() => {
    const createMapEventListener = (() => createInstanceFactory(mix(include(MapSinkMixin()), function MapEventListener(instance, delegate, selector) {
        init(MapSinkMixin(), instance, delegate, selector);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return (selector) => pipe(createMapEventListener, partial(selector), EventSource_lift);
})();
export default EventSource_map;

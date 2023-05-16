/// <reference types="./EventSource.map.d.ts" />

import Sink_mapMixin from "../../Sink/__internal__/Sink.mapMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { partial, pipe } from "../../functions.js";
import { EventListenerLike_isErrorSafe, } from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_map = /*@__PURE__*/ (() => {
    const createMapEventListener = (() => createInstanceFactory(mix(include(Sink_mapMixin()), function MapEventListener(instance, delegate, selector) {
        init(Sink_mapMixin(), instance, delegate, selector);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return (selector) => pipe(createMapEventListener, partial(selector), EventSource_lift);
})();
export default EventSource_map;

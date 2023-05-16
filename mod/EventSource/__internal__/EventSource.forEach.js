/// <reference types="./EventSource.forEach.d.ts" />

import Sink_forEachMixin from "../../Sink/__internal__/Sink.forEachMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { partial, pipe } from "../../functions.js";
import { EventListenerLike_isErrorSafe, } from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_forEach = 
/*@__PURE__*/ (() => {
    const createForEachEventListener = (() => createInstanceFactory(mix(include(Sink_forEachMixin()), function ForEachEventListener(instance, delegate, effect) {
        init(Sink_forEachMixin(), instance, delegate, effect);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return (effect) => pipe(createForEachEventListener, partial(effect), EventSource_lift);
})();
export default EventSource_forEach;

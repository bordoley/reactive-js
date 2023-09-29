/// <reference types="./EventSource.takeWhile.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { EventListenerLike_isErrorSafe, } from "../../../rx.js";
import Sink_takeWhileMixin from "../../Sink/__internal__/Sink.takeWhileMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_takeWhile = 
/*@__PURE__*/ (() => {
    const createTakeWhileEventListener = (() => createInstanceFactory(mix(include(Sink_takeWhileMixin()), function TakeWhileEventListener(instance, delegate, predicate, inclusive) {
        init(Sink_takeWhileMixin(), instance, delegate, predicate, inclusive);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return (predicate, options = {}) => pipe((createTakeWhileEventListener), partial(predicate, options.inclusive), EventSource_lift);
})();
export default EventSource_takeWhile;

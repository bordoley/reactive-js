/// <reference types="./EventSource.takeFirst.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { EventListenerLike_isErrorSafe, } from "../../../rx.js";
import Sink_takeFirstMixin from "../../Sink/__internal__/Sink.takeFirstMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_takeFirst = 
/*@__PURE__*/ (() => {
    const createTakeFirstEventListener = (() => createInstanceFactory(mix(include(Sink_takeFirstMixin()), function TakeFirstEventListener(instance, delegate, count) {
        init(Sink_takeFirstMixin(), instance, delegate, count);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return (options = {}) => {
        const count = clampPositiveInteger(options.count ?? 1);
        return pipe((createTakeFirstEventListener), partial(count), EventSource_lift);
    };
})();
export default EventSource_takeFirst;

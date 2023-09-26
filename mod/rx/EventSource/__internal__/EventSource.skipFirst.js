/// <reference types="./EventSource.skipFirst.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { EventListenerLike_isErrorSafe, } from "../../../rx.js";
import Sink_skipFirstMixin from "../../Sink/__internal__/Sink.skipFirstMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_skipFirst = 
/*@__PURE__*/ (() => {
    const createSkipFirstEventListener = (() => createInstanceFactory(mix(include(Sink_skipFirstMixin()), function SkipFirstEventListener(instance, delegate, count) {
        init(Sink_skipFirstMixin(), instance, delegate, count);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return (options = {}) => {
        const count = clampPositiveInteger(options.count ?? 1);
        return pipe((createSkipFirstEventListener), partial(count), EventSource_lift);
    };
})();
export default EventSource_skipFirst;

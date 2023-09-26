/// <reference types="./EventSource.scan.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { EventListenerLike_isErrorSafe, } from "../../../rx.js";
import Sink_scanMixin from "../../Sink/__internal__/Sink.scanMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_scan = /*@__PURE__*/ (() => {
    const createScanEventListener = (() => createInstanceFactory(mix(include(Sink_scanMixin()), function ScanEventListener(instance, delegate, reducer, initialValue) {
        init(Sink_scanMixin(), instance, delegate, reducer, initialValue);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return (reducer, initialValue) => pipe((createScanEventListener), partial(reducer, initialValue), EventSource_lift);
})();
export default EventSource_scan;

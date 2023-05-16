/// <reference types="./EventSource.keep.d.ts" />

import Sink_keepMixin from "../../Sink/__internal__/Sink.keepMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { partial, pipe } from "../../functions.js";
import { EventListenerLike_isErrorSafe, } from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_keep = /*@__PURE__*/ (() => {
    const createKeepEventListener = (() => createInstanceFactory(mix(include(Sink_keepMixin()), function KeepEventListener(instance, delegate, predicate) {
        init(Sink_keepMixin(), instance, delegate, predicate);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return (predicate) => pipe(createKeepEventListener, partial(predicate), EventSource_lift);
})();
export default EventSource_keep;

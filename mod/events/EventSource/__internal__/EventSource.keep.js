/// <reference types="./EventSource.keep.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EventListenerLike_isErrorSafe, } from "../../../events.js";
import { partial, pipe } from "../../../functions.js";
import KeepSinkMixin from "../../../utils/__mixins__/KeepSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_keep = /*@__PURE__*/ (() => {
    const createKeepEventListener = (() => createInstanceFactory(mix(include(KeepSinkMixin()), function KeepEventListener(instance, delegate, predicate) {
        init(KeepSinkMixin(), instance, delegate, predicate);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return (predicate) => pipe(createKeepEventListener, partial(predicate), EventSource_lift);
})();
export default EventSource_keep;

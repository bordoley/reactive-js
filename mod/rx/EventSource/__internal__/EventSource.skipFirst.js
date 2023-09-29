/// <reference types="./EventSource.skipFirst.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { EventListenerLike_isErrorSafe, } from "../../../rx.js";
import SkipFirstSinkMixin from "../../__mixins__/SkipFirstSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_skipFirst = 
/*@__PURE__*/ (() => {
    const createSkipFirstEventListener = (() => createInstanceFactory(mix(include(SkipFirstSinkMixin()), function SkipFirstEventListener(instance, delegate, count) {
        init(SkipFirstSinkMixin(), instance, delegate, count);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return (options = {}) => pipe((createSkipFirstEventListener), partial(options.count), EventSource_lift);
})();
export default EventSource_skipFirst;

/// <reference types="./EventSource.takeFirst.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EventListenerLike_isErrorSafe, } from "../../../events.js";
import { partial, pipe } from "../../../functions.js";
import TakeFirstSinkMixin from "../../../utils/__mixins__/TakeFirstSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_takeFirst = 
/*@__PURE__*/ (() => {
    const createTakeFirstEventListener = (() => createInstanceFactory(mix(include(TakeFirstSinkMixin()), function TakeFirstEventListener(instance, delegate, count) {
        init(TakeFirstSinkMixin(), instance, delegate, count);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return (options = {}) => pipe((createTakeFirstEventListener), partial(options.count), EventSource_lift);
})();
export default EventSource_takeFirst;

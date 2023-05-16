/// <reference types="./EventSource.distinctUntilChanged.d.ts" />

import Sink_distinctUntilChangedMixin from "../../Sink/__internal__/Sink.distinctUntilChangedMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { partial, pipe, strictEquality } from "../../functions.js";
import { EventListenerLike_isErrorSafe, } from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const createDistinctUntilChangedEventListener = (() => createInstanceFactory(mix(include(Sink_distinctUntilChangedMixin()), function distinctUntilChangedEventListener(instance, delegate, equality) {
        init(Sink_distinctUntilChangedMixin(), instance, delegate, equality);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return (options = {}) => {
        const { equality = strictEquality } = options ?? {};
        return pipe((createDistinctUntilChangedEventListener), partial(equality), EventSource_lift);
    };
})();
export default EventSource_distinctUntilChanged;

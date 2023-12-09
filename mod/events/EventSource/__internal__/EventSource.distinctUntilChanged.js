/// <reference types="./EventSource.distinctUntilChanged.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EventListenerLike_isErrorSafe, } from "../../../events.js";
import { partial, pipe, strictEquality } from "../../../functions.js";
import DistinctUntilChangedSinkMixin from "../../__mixins__/DistinctUntilChangedSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const createDistinctUntilChangedEventListener = (() => createInstanceFactory(mix(include(DistinctUntilChangedSinkMixin()), function distinctUntilChangedEventListener(instance, delegate, equality) {
        init(DistinctUntilChangedSinkMixin(), instance, delegate, equality);
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

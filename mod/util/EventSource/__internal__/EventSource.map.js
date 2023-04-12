/// <reference types="./EventSource.map.d.ts" />

import { alwaysTrue } from "../../../functions.js";
import { EventSourceLike_addListener } from "../../../util.js";
import EventPublisher_createWithPredicateAndSelector from "../../EventPublisher/__internal__/EventPublisher.createWithPredicateAndSelector.js";
const EventSource_map = (f, options) => (eventSource) => {
    const publisher = EventPublisher_createWithPredicateAndSelector(alwaysTrue, f, options);
    eventSource[EventSourceLike_addListener](publisher);
    return publisher;
};
export default EventSource_map;

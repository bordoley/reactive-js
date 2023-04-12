/// <reference types="./EventSource.keep.d.ts" />

import { identity } from "../../../functions.js";
import { EventSourceLike_addListener } from "../../../util.js";
import EventPublisher_createWithPredicateAndSelector from "../../EventPublisher/__internal__/EventPublisher.createWithPredicateAndSelector.js";
const EventSource_keep = (predicate, options) => (eventSource) => {
    const publisher = EventPublisher_createWithPredicateAndSelector(predicate, identity, options);
    eventSource[EventSourceLike_addListener](publisher);
    return publisher;
};
export default EventSource_keep;

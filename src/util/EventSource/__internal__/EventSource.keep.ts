import { Keep } from "../../../containers.js";
import { Predicate, identity } from "../../../functions.js";
import { EventSourceLike, EventSourceLike_addListener } from "../../../util.js";
import EventPublisher_createWithPredicateAndSelector from "../../EventPublisher/__internal__/EventPublisher.createWithPredicateAndSelector.js";

const EventSource_keep: Keep<EventSourceLike, { replay?: number }>["keep"] =
  <T>(predicate: Predicate<T>, options?: { replay?: number }) =>
  (eventSource: EventSourceLike<T>): EventSourceLike<T> => {
    const publisher = EventPublisher_createWithPredicateAndSelector<T, T>(
      predicate,
      identity,
      options,
    );

    eventSource[EventSourceLike_addListener](publisher);

    return publisher;
  };

export default EventSource_keep;

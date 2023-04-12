import { Map } from "../../../containers.js";
import { Function1, alwaysTrue } from "../../../functions.js";
import { EventSourceLike, EventSourceLike_addListener } from "../../../util.js";
import EventPublisher_createWithPredicateAndSelector from "../../EventPublisher/__internal__/EventPublisher.createWithPredicateAndSelector.js";

const EventSource_map: Map<EventSourceLike, { replay?: number }>["map"] =
  <TA, TB>(f: Function1<TA, TB>, options?: { replay?: number }) =>
  (eventSource: EventSourceLike<TA>): EventSourceLike<TB> => {
    const publisher = EventPublisher_createWithPredicateAndSelector<TA, TB>(
      alwaysTrue,
      f,
      options,
    );

    eventSource[EventSourceLike_addListener](publisher);

    return publisher;
  };

export default EventSource_map;

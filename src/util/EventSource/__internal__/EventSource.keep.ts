import { Keep } from "../../../containers.js";
import { Predicate, pipe } from "../../../functions.js";
import {
  BufferLike_capacity,
  EventListenerLike_notify,
  EventSourceLike,
  EventSourceLike_addListener,
  ReplayableLike_buffer,
} from "../../../util.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import EventListener_create from "../../EventListener/__internal__/EventListener.create.js";
import EventPublisher_create from "../../EventPublisher/__internal__/EventPublisher.create.js";

const EventSource_keep: Keep<EventSourceLike>["keep"] =
  <T>(predicate: Predicate<T>) =>
  (eventSource: EventSourceLike<T>): EventSourceLike<T> => {
    // FIXME: Add an internal constructor for publisher that takes a predicate
    // and avoid the extra disposable allocations.
    const publisher = EventPublisher_create<T>({
      replay: eventSource[ReplayableLike_buffer][BufferLike_capacity],
    });

    const listener = EventListener_create((ev: T) => {
      if (predicate(ev)) {
        publisher[EventListenerLike_notify](ev);
      }
    });

    eventSource[EventSourceLike_addListener](listener);

    return pipe(publisher, Disposable_add(listener));
  };

export default EventSource_keep;

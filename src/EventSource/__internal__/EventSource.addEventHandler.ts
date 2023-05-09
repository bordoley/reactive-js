import EventListener_create from "../../EventListener/__internal__/EventListener.create.js";
import { Function1, SideEffect1 } from "../../functions.js";
import {
  DisposableLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../types.js";

const EventSource_addEventHandler =
  <T>(handler: SideEffect1<T>): Function1<EventSourceLike<T>, DisposableLike> =>
  source => {
    const eventListener = EventListener_create<T>(handler);
    source[EventSourceLike_addEventListener](eventListener);
    return eventListener;
  };

export default EventSource_addEventHandler;

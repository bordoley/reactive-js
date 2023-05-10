import EventListener_create from "../../EventListener/__internal__/EventListener.create.js";
import type * as EventSource from "../../EventSource.js";
import { SideEffect1 } from "../../functions.js";
import {
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../types.js";

const EventSource_addEventHandler: EventSource.Signature["addEventHandler"] =
  <T>(handler: SideEffect1<T>) =>
  (source: EventSourceLike<T>) => {
    const eventListener = EventListener_create<T>(handler);
    source[EventSourceLike_addEventListener](eventListener);
    return eventListener;
  };

export default EventSource_addEventHandler;

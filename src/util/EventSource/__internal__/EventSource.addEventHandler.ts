import { Function1, SideEffect1 } from "../../../functions.js";
import {
  DisposableLike,
  EventEmitterLike_addEventListener,
  EventSourceLike,
} from "../../../util.js";
import EventListener_create from "../../EventListener/__internal__/EventListener.create.js";

const EventSource_addEventHandler =
  <T>(handler: SideEffect1<T>): Function1<EventSourceLike<T>, DisposableLike> =>
  source => {
    const eventListener = EventListener_create<T>(handler);
    source[EventEmitterLike_addEventListener](eventListener);
    return eventListener;
  };

export default EventSource_addEventHandler;

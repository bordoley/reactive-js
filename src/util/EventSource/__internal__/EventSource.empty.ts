import { Empty } from "../../../containers.js";
import {
  DisposableLike_dispose,
  EventEmitterLike_addListener,
  EventListenerLike,
  EventSourceLike,
} from "../../../util.js";

const _empty: EventSourceLike = {
  [EventEmitterLike_addListener]: function (
    listener: EventListenerLike<unknown>,
  ): void {
    listener[DisposableLike_dispose]();
  },
};

const EventSource_empty: Empty<EventSourceLike>["empty"] = <
  T,
>(): EventSourceLike<T> => _empty as EventSourceLike<T>;

export default EventSource_empty;

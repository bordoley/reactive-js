import { Empty } from "../../../containers.js";
import {
  DisposableLike_dispose,
  EventListenerLike,
  EventSourceContainer,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../util.js";

const _empty: EventSourceLike = {
  [EventSourceLike_addEventListener]: function (
    listener: EventListenerLike<unknown>,
  ): void {
    listener[DisposableLike_dispose]();
  },
};

const EventSource_empty: Empty<EventSourceContainer>["empty"] = <
  T,
>(): EventSourceLike<T> => _empty as EventSourceLike<T>;

export default EventSource_empty;

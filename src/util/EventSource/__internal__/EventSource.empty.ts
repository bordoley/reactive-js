import { Empty } from "../../../containers.js";
import {
  DisposableLike_dispose,
  EventEmitterLike_addListener,
  EventListenerLike,
  EventSourceLike,
  ReplayableLike_buffer,
} from "../../../util.js";
import IndexedBufferCollection_empty from "../../IndexedBufferCollection/__internal__/IndexedBufferCollection.empty.js";

const _empty: EventSourceLike = {
  [EventEmitterLike_addListener]: function (
    listener: EventListenerLike<unknown>,
  ): void {
    listener[DisposableLike_dispose]();
  },
  [ReplayableLike_buffer]: /*@__PURE__*/ IndexedBufferCollection_empty(),
};

const EventSource_empty: Empty<EventSourceLike>["empty"] = <
  T,
>(): EventSourceLike<T> => _empty as EventSourceLike<T>;

export default EventSource_empty;

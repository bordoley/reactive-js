import { EventSourceLike, SinkLike_notify } from "../../../events.js";
import { Function1 } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";

const EventSource_fromIterable: <T>() => Function1<
  Iterable<T>,
  EventSourceLike<T>
> =
  <T>() =>
  (arr: Iterable<T>) =>
    EventSource_create<T>(listener => {
      for (const v of arr) {
        listener[SinkLike_notify](v);
      }
      listener[DisposableLike_dispose]();
    });

export default EventSource_fromIterable;

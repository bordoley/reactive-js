import EventSource_create from "../../EventSource/__internal__/EventSource.create.js";
import { Function1 } from "../../functions.js";
import {
  DisposableLike_dispose,
  EventSourceLike,
  SinkLike_notify,
} from "../../types.js";

const Iterable_toEventSource: <T>() => Function1<
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

export default Iterable_toEventSource;

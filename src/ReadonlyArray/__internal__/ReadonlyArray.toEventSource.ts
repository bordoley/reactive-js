import EventSource_create from "../../EventSource/__internal__/EventSource.create.js";
import { Function1 } from "../../functions.js";
import {
  DisposableLike_dispose,
  EventSourceLike,
  SinkLike_notify,
} from "../../types.js";

const ReadonlyArray_toEventSource: <T>() => Function1<
  ReadonlyArray<T>,
  EventSourceLike<T>
> =
  <T>() =>
  (arr: ReadonlyArray<T>) =>
    EventSource_create<T>(listener => {
      for (let i = 0; i < arr.length; i++) {
        listener[SinkLike_notify](arr[i]);
      }
      listener[DisposableLike_dispose]();
    });

export default ReadonlyArray_toEventSource;

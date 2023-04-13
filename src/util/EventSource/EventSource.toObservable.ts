import { pipe } from "../../functions.js";
import { ToObservable } from "../../rx.js";
import Observable_create from "../../rx/Observable/__internal__/Observable.create.js";
import {
  EventSourceLike,
  EventSourceLike_addListener,
  QueueableLike_enqueue,
} from "../../util.js";
import Disposable_add from "../Disposable/__internal__/Disposable.add.js";
import EventListener_create from "../EventListener/__internal__/EventListener.create.js";

const EventSource_toObservable: ToObservable<EventSourceLike>["toObservable"] =
  <T>() =>
  (eventSource: EventSourceLike<T>) =>
    Observable_create<T>(observer => {
      const listener = EventListener_create<T>(ev => {
        observer[QueueableLike_enqueue](ev);
      });

      pipe(observer, Disposable_add(listener));

      eventSource[EventSourceLike_addListener](listener);
    });

export default EventSource_toObservable;

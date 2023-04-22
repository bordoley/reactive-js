import { bindMethod, pipe } from "../../../functions.js";
import { DispatcherLike_complete, ToObservable } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import {
  EventSourceLike,
  EventSourceLike_addListener,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import EventListener_create from "../../EventListener/__internal__/EventListener.create.js";

const EventSource_toObservable: ToObservable<EventSourceLike>["toObservable"] =
  <T>() =>
  (eventSource: EventSourceLike<T>) =>
    Observable_create<T>(observer => {
      const listener = pipe(
        EventListener_create<T>(bindMethod(observer, QueueableLike_enqueue)),
        Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)),
        Disposable_addTo(observer),
      );

      eventSource[EventSourceLike_addListener](listener);
    });

export default EventSource_toObservable;

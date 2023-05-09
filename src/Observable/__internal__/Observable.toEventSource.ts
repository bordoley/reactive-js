import Disposable_bindTo from "../../Disposable/__internal__/Disposable.bindTo.js";
import EventSource_create from "../../EventSource/__internal__/EventSource.create.js";
import { ObservableContainer } from "../../containers.js";
import { Function1, bindMethod, pipe } from "../../functions.js";
import {
  EventListenerLike_notify,
  EventSourceLike,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_toEventSource =
  <T>(
    scheduler: SchedulerLike,
    options: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    } = {},
  ): Function1<ObservableLike<T>, EventSourceLike<T>> =>
  obs =>
    EventSource_create(listener =>
      pipe(
        obs,
        Observable_forEach<ObservableContainer.Type, T>(
          bindMethod(listener, EventListenerLike_notify),
        ),
        Observable_subscribe(scheduler, options),
        Disposable_bindTo(listener),
      ),
    );

export default Observable_toEventSource;

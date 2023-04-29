import { Function1, bindMethod, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import {
  EventListenerLike_notify,
  EventSourceLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../util.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import EventSource_create from "../../../util/EventSource/__internal__/EventSource.create.js";
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
    EventSource_create(publisher =>
      pipe(
        obs,
        Observable_forEach<ObservableLike, T>(
          bindMethod(publisher, EventListenerLike_notify),
        ),
        Observable_subscribe(scheduler, options),
        Disposable_bindTo(publisher),
      ),
    );

export default Observable_toEventSource;

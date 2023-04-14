import { Function1, bindMethod, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  DisposableLike,
  EventListenerLike_notify,
  EventSourceLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_toEventSource =
  <T>(
    scheduler: SchedulerLike,
    options: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly replay?: number;
    } = {},
  ): Function1<ObservableLike<T>, EventSourceLike<T> & DisposableLike> =>
  obs => {
    const eventPublisher = EventPublisher_create<T>(options);

    pipe(
      obs,
      Observable_forEach<ObservableLike, T>(
        bindMethod(eventPublisher, EventListenerLike_notify),
      ),
      Observable_subscribe(scheduler, options),
      Disposable_bindTo(eventPublisher),
    );

    return eventPublisher;
  };

export default Observable_toEventSource;

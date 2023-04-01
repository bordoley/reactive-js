import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  Factory,
  Function1,
  Optional,
  bindMethod,
  isFunction,
  pipe,
} from "../../../functions.js";
import {
  MulticastObservableLike,
  ObservableLike,
  PublisherLike,
  PublisherLike_publish,
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithCapacityAndBackpressureStrategy from "./Observable.subscribeWithCapacityAndBackpressureStrategy.js";

const Observable_multicastImpl =
  <T>(
    publisherFactory: Function1<
      Optional<{
        replay?: number;
      }>,
      PublisherLike<T>
    >,
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike>,
    options: {
      readonly replay?: number;
      readonly capacity?: number;
      backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    } = {},
  ): Function1<ObservableLike<T>, MulticastObservableLike<T>> =>
  observable => {
    const {
      backpressureStrategy = "overflow",
      capacity = MAX_SAFE_INTEGER,
      replay = 0,
    } = options;
    const publisher = publisherFactory({ replay });

    const scheduler = isFunction(schedulerOrFactory)
      ? pipe(schedulerOrFactory(), Disposable_addTo(publisher))
      : schedulerOrFactory;

    pipe(
      observable,
      Observable_forEach<ObservableLike, T>(
        bindMethod(publisher, PublisherLike_publish),
      ),
      Observable_subscribeWithCapacityAndBackpressureStrategy(
        scheduler,
        capacity,
        backpressureStrategy,
      ),
      Disposable_bindTo(publisher),
    );

    return publisher;
  };

export default Observable_multicastImpl;

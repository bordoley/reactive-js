import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  DeferredObservableLike,
  ReplayObservableLike,
  ReplayPublisherLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
  SchedulerLike,
} from "../../../concurrent.js";
import {
  Factory,
  Function1,
  Optional,
  bindMethod,
  isFunction,
  pipe,
} from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_multicastImpl =
  <T>(
    publisherFactory: Function1<
      Optional<{
        replay?: number;
      }>,
      ReplayPublisherLike<T>
    >,
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options: {
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    } = {},
  ): Function1<
    | RunnableLike<T>
    | RunnableWithSideEffectsLike<T>
    | DeferredObservableLike<T>,
    ReplayObservableLike<T> & DisposableLike
  > =>
  observable => {
    const {
      backpressureStrategy = "overflow",
      capacity = MAX_SAFE_INTEGER,
      replay = 0,
    } = options;
    const publisher = publisherFactory({ replay });

    const scheduler = isFunction(schedulerOrFactory)
      ? pipe(schedulerOrFactory(), Disposable.addTo(publisher))
      : schedulerOrFactory;

    pipe(
      observable,
      Observable_forEach(bindMethod(publisher, SinkLike_notify)),
      Observable_subscribeWithConfig(scheduler, {
        [QueueableLike_capacity]: capacity,
        [QueueableLike_backpressureStrategy]: backpressureStrategy,
      }),
      Disposable.bindTo(publisher),
    );

    return publisher;
  };

export default Observable_multicastImpl;

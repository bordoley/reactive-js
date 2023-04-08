import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory } from "../../../__internal__/mixins.js";
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
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  BufferLike_capacity,
  EventListenerLike_notify,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import MulticastObservable_delegatingMixin from "../../MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const createMulticastObservable: <T>(
  delegate: PublisherLike<T>,
  scheduler: SchedulerLike,
) => MulticastObservableLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(MulticastObservable_delegatingMixin<T>()))();

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
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
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
        bindMethod(publisher, EventListenerLike_notify),
      ),
      Observable_subscribeWithConfig(scheduler, {
        [BufferLike_capacity]: capacity,
        [QueueableLike_backpressureStrategy]: backpressureStrategy,
      }),
      Disposable_bindTo(publisher),
    );

    return createMulticastObservable<T>(publisher, scheduler);
  };

export default Observable_multicastImpl;

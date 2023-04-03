import { Factory, bindMethod, isFunction, pipe } from "../../../functions.js";
import { DispatcherLike_complete, ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  BufferLike_capacity,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_create from "./Observable.create.js";
import Observable_enqueue from "./Observable.enqueue.js";
import Observable_subscribeWithCapacityAndBackpressureStrategy from "./Observable.subscribeWithCapacityAndBackpressureStrategy.js";

const Observable_subscribeOn =
  <T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) =>
  (observable: ObservableLike<T>): ObservableLike<T> =>
    // FIXME: type test for VTS
    Observable_create<T>(observer => {
      const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
        : schedulerOrFactory;

      pipe(
        observable,
        Observable_enqueue<ObservableLike, T>(observer),
        Observable_subscribeWithCapacityAndBackpressureStrategy(
          scheduler,
          options?.capacity ?? observer[BufferLike_capacity],
          options?.backpressureStrategy ??
            observer[QueueableLike_backpressureStrategy],
        ),
        Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)),
        Disposable_addTo(observer),
      );
    });

export default Observable_subscribeOn;

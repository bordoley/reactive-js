import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import MulticastObservable_create from "../../MulticastObservable/__internal__/MulticastObservable.create.js";
import type * as Observable from "../../Observable.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import { Factory, isFunction, pipe } from "../../functions.js";
import {
  DisposableLike,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  SchedulerLike,
} from "../../types.js";
import Observable_dispatchTo from "./Observable.dispatchTo.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_subscribeOn: Observable.Signature["subscribeOn"] = (<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) =>
  (observable: ObservableLike<T>): ObservableLike<T> => {
    const create = Observable_isDeferred(observable)
      ? Observable_create
      : MulticastObservable_create;

    return create<T>(observer => {
      const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
        : schedulerOrFactory;

      pipe(
        observable,
        Observable_dispatchTo(observer),
        Observable_subscribeWithConfig(scheduler, {
          [QueueableLike_capacity]:
            options?.capacity ?? observer[QueueableLike_capacity],
          [QueueableLike_backpressureStrategy]:
            options?.backpressureStrategy ??
            observer[QueueableLike_backpressureStrategy],
        }),
        Disposable_addTo(observer),
      );
    });
  }) as Observable.Signature["subscribeOn"];
export default Observable_subscribeOn;

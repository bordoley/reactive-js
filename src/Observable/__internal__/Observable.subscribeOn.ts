import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import type * as Observable from "../../Observable.js";
import SharedObservable_create from "../../SharedObservable/__internal__/SharedObservable.create.js";
import { Factory, isFunction, pipe } from "../../functions.js";
import {
  BufferLike_capacity,
  DisposableLike,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";
import Observable_dispatchTo from "./Observable.dispatchTo.js";
import Observable_isDeferredObservable from "./Observable.isDeferredObservable.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_subscribeOn: Observable.Signature["subscribeOn"] = (<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) =>
  (observable: ObservableLike<T>): ObservableLike<T> => {
    const create = Observable_isDeferredObservable(observable)
      ? DeferredObservable_create
      : SharedObservable_create;

    return create<T>(observer => {
      const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
        : schedulerOrFactory;

      pipe(
        observable,
        Observable_dispatchTo(observer),
        Observable_subscribeWithConfig(scheduler, {
          [BufferLike_capacity]:
            options?.capacity ?? observer[BufferLike_capacity],
          [QueueableLike_backpressureStrategy]:
            options?.backpressureStrategy ??
            observer[QueueableLike_backpressureStrategy],
        }),
        Disposable_addTo(observer),
      );
    });
  }) as Observable.Signature["subscribeOn"];
export default Observable_subscribeOn;

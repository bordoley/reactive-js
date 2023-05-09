import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import { ObservableContainer } from "../../containers.js";
import { Factory, Function1, isFunction, pipe } from "../../functions.js";
import {
  BufferLike_capacity,
  DeferredObservableLike,
  DisposableLike,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
  SharedObservableLike,
} from "../../types.js";
import Observable_create from "./Observable.create.js";
import Observable_dispatchTo from "./Observable.dispatchTo.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

interface ObservableSubscribeOn {
  subscribeOn<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<DeferredObservableLike<T>, DeferredObservableLike<T>>;

  subscribeOn<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<SharedObservableLike<T>, SharedObservableLike<T>>;

  subscribeOn<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, ObservableLike<T>>;
}
// FIXME: improve return type.
const Observable_subscribeOn: ObservableSubscribeOn["subscribeOn"] = (<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) =>
  (observable: ObservableLike<T>): ObservableLike<T> => {
    // FIXME: type test for VTS
    const create = Observable_isDeferred(observable)
      ? DeferredObservable_create
      : Observable_create;

    return create<T>(observer => {
      const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
        : schedulerOrFactory;

      pipe(
        observable,
        Observable_dispatchTo<ObservableContainer.Type, T>(observer),
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
  }) as ObservableSubscribeOn["subscribeOn"];
export default Observable_subscribeOn;

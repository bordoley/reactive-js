import {
  Factory,
  Function1,
  Optional,
  isNone,
  none,
  pipe,
} from "../../../functions.js";
import {
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_observe,
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Publisher_createRefCounted from "../../Publisher/__internal__/Publisher.createRefCounted.js";
import Observable_create from "./Observable.create.js";
import Observable_multicast from "./Observable.multicast.js";

const Observable_share =
  <T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike>,
    options?: {
      readonly replay?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, ObservableLike<T>> =>
  (source: ObservableLike<T>) => {
    let multicasted: Optional<MulticastObservableLike<T>> = none;

    // FIXME: Type test scheduler for VTS
    return Observable_create<T>(observer => {
      if (isNone(multicasted)) {
        multicasted = pipe(
          source,
          Observable_multicast<T>(schedulerOrFactory, {
            ...options,
            publisherFactory: Publisher_createRefCounted,
          }),
          Disposable_onDisposed(() => {
            multicasted = none;
          }),
        );
      }

      multicasted[ObservableLike_observe](observer);
    });
  };

export default Observable_share;

import {
  DeferredObservableLike,
  ObservableLike,
  SchedulerLike,
} from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observable_create from "./Observable.create.js";
import Observable_dispatchTo from "./Observable.dispatchTo.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_subscribeOn: Observable.Signature["subscribeOn"] = (<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) =>
  (observable: ObservableLike<T>): DeferredObservableLike<T> =>
    Observable_create<T>(observer =>
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
        Disposable.addTo(observer),
      ),
    )) as Observable.Signature["subscribeOn"];
export default Observable_subscribeOn;

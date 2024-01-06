import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isMulticasted,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
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
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_dispatchTo from "./Observable.dispatchTo.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_subscribeOn: Observable.Signature["subscribeOn"] = (<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) =>
  (observable: ObservableLike<T>) =>
    Observable_createWithConfig<T>(
      observer =>
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
      {
        [ObservableLike_isDeferred]: observable[ObservableLike_isDeferred],
        [ObservableLike_isMulticasted]:
          observable[ObservableLike_isMulticasted],
        [ObservableLike_isPure]: observable[ObservableLike_isPure],
        [ObservableLike_isRunnable]: false,
      },
    )) as Observable.Signature["subscribeOn"];
export default Observable_subscribeOn;

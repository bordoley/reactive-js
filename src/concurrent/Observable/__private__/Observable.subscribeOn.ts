import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { ObservableLike, SchedulerLike } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  BackpressureStrategy,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_dispatchTo from "./Observable.dispatchTo.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_subscribeOn: Observable.Signature["subscribeOn"] = (<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
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
        [ComputationLike_isDeferred]: observable[ComputationLike_isDeferred],
        [ComputationLike_isPure]: observable[ComputationLike_isPure],
        [ComputationLike_isSynchronous]: false,
      },
    )) as Observable.Signature["subscribeOn"];
export default Observable_subscribeOn;

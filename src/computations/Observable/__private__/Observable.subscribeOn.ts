import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
} from "../../../computations.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  BackpressureStrategy,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  SchedulerLike,
  SinkLike_complete,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_enqueue from "./Observable.enqueue.js";
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
          Observable_enqueue(observer),
          Observable_subscribeWithConfig(scheduler, {
            [QueueableLike_capacity]:
              options?.capacity ?? observer[QueueableLike_capacity],
            [QueueableLike_backpressureStrategy]:
              options?.backpressureStrategy ??
              observer[QueueableLike_backpressureStrategy],
          }),
          Disposable.addTo(observer),
          DisposableContainer.onComplete(
            bindMethod(observer, SinkLike_complete),
          ),
        ),
      {
        [ComputationLike_isPure]: observable[ComputationLike_isPure],
        [ComputationLike_isSynchronous]: false,
      },
    )) as Observable.Signature["subscribeOn"];
export default Observable_subscribeOn;

import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
} from "../../../concurrent.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_createMergeAllObserverOperator from "../../Observer/__private__/Observer.createMergeAllObserverOperator.js";
import Observable_lift from "./Observable.lift.js";

const Observable_mergeAll: Observable.Signature["mergeAll"] = ((options?: {
  readonly [ObservableLike_isDeferred]?: boolean;
  readonly [ObservableLike_isPure]?: boolean;
  readonly [ObservableLike_isRunnable]?: boolean;
  readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  readonly capacity?: number;
  readonly concurrency?: number;
}) =>
  Observable_lift({
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
    ...(options ?? {}),
  })(
    Observer_createMergeAllObserverOperator(options),
  )) as Observable.Signature["mergeAll"];

export default Observable_mergeAll;

import {
  MergeAll,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../rx.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Observable_lift from "./Observable.lift.js";

const Observable_mergeAll: MergeAll<
  ObservableLike,
  {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly maxConcurrency?: number;
  }
>["mergeAll"] = /*@__PURE__*/ (() =>
  HigherOrderObservable_mergeAll<ObservableLike>(
    Observable_lift({
      [ObservableLike_isEnumerable]: false,
      [ObservableLike_isRunnable]: false,
    }),
  ) as MergeAll<
    ObservableLike,
    {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly maxConcurrency?: number;
    }
  >["mergeAll"])();

export default Observable_mergeAll;

import { ConcatAll } from "../../../containers.js";
import { EnumerableLike } from "../../../rx.js";
import HigherOrderObservable_mergeAll from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_mergeAll: ConcatAll<
  EnumerableLike,
  {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
  }
>["concatAll"] = /*@__PURE__*/ HigherOrderObservable_mergeAll<EnumerableLike>(
  Enumerable_lift,
) as ConcatAll<
  EnumerableLike,
  {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
  }
>["concatAll"];

export default Enumerable_mergeAll;

import { MergeAll, RunnableLike } from "../../../rx.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_mergeAll: MergeAll<
  RunnableLike,
  {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
  }
>["mergeAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<RunnableLike>(Runnable_lift);

export default Runnable_mergeAll;

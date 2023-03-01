import { MergeAll, RunnableLike } from "../../../rx.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_mergeAll: MergeAll<
  RunnableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["mergeAll"] = /*@__PURE__*/ HigherOrderObservable_mergeAll<RunnableLike>(
  Runnable_lift,
) as MergeAll<
  RunnableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["mergeAll"];

export default Runnable_mergeAll;

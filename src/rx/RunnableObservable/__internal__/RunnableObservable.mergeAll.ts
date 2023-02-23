import { MergeAll, RunnableObservableLike } from "../../../rx.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import RunnableObservable_lift from "./RunnableObservable.lift.js";

const RunnableObservable_mergeAll: MergeAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["mergeAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<RunnableObservableLike>(
    RunnableObservable_lift,
  ) as MergeAll<
    RunnableObservableLike,
    {
      readonly maxBufferSize?: number;
      readonly maxConcurrency?: number;
    }
  >["mergeAll"];

export default RunnableObservable_mergeAll;

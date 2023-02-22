import { ConcatAll } from "../../../containers.js";
import { RunnableObservableLike } from "../../../rx.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import RunnableObservable_lift from "./RunnableObservable.lift.js";

const RunnableObservable_mergeAll: ConcatAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<RunnableObservableLike>(
    RunnableObservable_lift,
  ) as ConcatAll<
    RunnableObservableLike,
    {
      readonly maxBufferSize?: number;
      readonly maxConcurrency?: number;
    }
  >["concatAll"];

export default RunnableObservable_mergeAll;

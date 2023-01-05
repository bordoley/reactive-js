import { ConcatAll } from "../../../containers";
import { RunnableObservableLike } from "../../../rx";
import HigherOrderObservableLike__mergeAll from "../HigherOrderObservableLike/HigherOrderObservableLike.mergeAll";
import RunnableObservableLike__lift from "./RunnableObservableLike.lift";

const RunnableObservableLike__mergeAll: ConcatAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = /*@__PURE__*/ HigherOrderObservableLike__mergeAll<RunnableObservableLike>(
  RunnableObservableLike__lift,
) as ConcatAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"];

export default RunnableObservableLike__mergeAll;

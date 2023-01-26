import { ConcatAll } from "../../../containers";
import { RunnableObservableLike } from "../../../rx";
import HigherOrderObservable$mergeAll from "../HigherOrderObservable/HigherOrderObservable.mergeAll";
import RunnableObservable$lift from "./RunnableObservable.lift";

const RunnableObservable$mergeAll: ConcatAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable$mergeAll<RunnableObservableLike>(
    RunnableObservable$lift,
  ) as ConcatAll<
    RunnableObservableLike,
    {
      readonly maxBufferSize?: number;
      readonly maxConcurrency?: number;
    }
  >["concatAll"];

export default RunnableObservable$mergeAll;

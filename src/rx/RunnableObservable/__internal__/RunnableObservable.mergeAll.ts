import { ConcatAll } from "../../../containers";
import { RunnableObservableLike } from "../../../rx";
import HigherOrderObservable_mergeAll from "../../__internal__/HigherOrderObservable/HigherOrderObservable.mergeAll";
import RunnableObservable_lift from "./RunnableObservable.lift";

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

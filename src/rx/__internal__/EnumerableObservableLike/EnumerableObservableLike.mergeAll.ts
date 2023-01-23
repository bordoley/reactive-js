import { ConcatAll } from "../../../containers";
import { EnumerableObservableLike } from "../../../rx";
import HigherOrderObservableLike__mergeAll from "../HigherOrderObservableLike/HigherOrderObservableLike.mergeAll";
import EnumerableObservableLike__lift from "./EnumerableObservableLike.lift";

const EnumerableObservableLike__mergeAll: ConcatAll<
  EnumerableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservableLike__mergeAll<EnumerableObservableLike>(
    EnumerableObservableLike__lift,
  ) as ConcatAll<
    EnumerableObservableLike,
    {
      readonly maxBufferSize?: number;
      readonly maxConcurrency?: number;
    }
  >["concatAll"];

export default EnumerableObservableLike__mergeAll;

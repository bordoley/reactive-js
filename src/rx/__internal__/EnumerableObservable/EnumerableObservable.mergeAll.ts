import { ConcatAll } from "../../../containers";
import { EnumerableObservableLike } from "../../../rx";
import HigherOrderObservable$mergeAll from "../HigherOrderObservable/HigherOrderObservable.mergeAll";
import EnumerableObservable$lift from "./EnumerableObservable.lift";

const EnumerableObservable$mergeAll: ConcatAll<
  EnumerableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable$mergeAll<EnumerableObservableLike>(
    EnumerableObservable$lift,
  ) as ConcatAll<
    EnumerableObservableLike,
    {
      readonly maxBufferSize?: number;
      readonly maxConcurrency?: number;
    }
  >["concatAll"];

export default EnumerableObservable$mergeAll;

import { ConcatAll } from "../../../containers";
import { EnumerableObservableLike } from "../../../rx";
import HigherOrderObservable_mergeAll from "../../__internal__/HigherOrderObservable/HigherOrderObservable.mergeAll";
import EnumerableObservable_lift from "./EnumerableObservable.lift";

const EnumerableObservable_mergeAll: ConcatAll<
  EnumerableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<EnumerableObservableLike>(
    EnumerableObservable_lift,
  ) as ConcatAll<
    EnumerableObservableLike,
    {
      readonly maxBufferSize?: number;
      readonly maxConcurrency?: number;
    }
  >["concatAll"];

export default EnumerableObservable_mergeAll;

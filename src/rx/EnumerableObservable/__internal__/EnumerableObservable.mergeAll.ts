import { ConcatAll } from "../../../containers.js";
import { EnumerableObservableLike } from "../../../rx.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import EnumerableObservable_lift from "./EnumerableObservable.lift.js";

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

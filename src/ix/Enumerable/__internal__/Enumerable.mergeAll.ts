import { ConcatAll } from "../../../containers.js";
import { EnumerableLike } from "../../../ix.js";
import HigherOrderObservable_mergeAll from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_mergeAll: ConcatAll<
  EnumerableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = /*@__PURE__*/ HigherOrderObservable_mergeAll<EnumerableLike>(
  Enumerable_lift,
) as ConcatAll<
  EnumerableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"];

export default Enumerable_mergeAll;

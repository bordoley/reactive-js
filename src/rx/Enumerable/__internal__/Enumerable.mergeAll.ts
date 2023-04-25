import { EnumerableLike, MergeAll } from "../../../rx.js";
import HigherOrderObservable_mergeAll from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_mergeAll: MergeAll<
  EnumerableLike
>["mergeAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<EnumerableLike>(Enumerable_lift);

export default Enumerable_mergeAll;

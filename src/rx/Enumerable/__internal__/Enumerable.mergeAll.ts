import { EnumerableContainerLike, MergeAll } from "../../../rx.js";
import HigherOrderObservable_mergeAll from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_mergeAll: MergeAll<EnumerableContainerLike>["mergeAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<EnumerableContainerLike>(
    Enumerable_lift,
  );

export default Enumerable_mergeAll;

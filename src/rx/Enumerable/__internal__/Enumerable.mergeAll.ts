import { EnumerableContainer, Reactive } from "../../../rx.js";
import HigherOrderObservable_mergeAll from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_mergeAll: Reactive.MergeAll<EnumerableContainer>["mergeAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<EnumerableContainer>(
    Enumerable_lift,
  );

export default Enumerable_mergeAll;

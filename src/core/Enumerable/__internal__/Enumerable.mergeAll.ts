import { EnumerableContainer, ReactiveContainer } from "../../../core.js";
import HigherOrderObservable_mergeAll from "../../../core/HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_mergeAll: ReactiveContainer.TypeClass<EnumerableContainer>["mergeAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<EnumerableContainer>(
    Enumerable_lift,
  );

export default Enumerable_mergeAll;

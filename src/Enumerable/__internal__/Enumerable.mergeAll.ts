import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import { EnumerableContainer } from "../../containers.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_mergeAll: EnumerableContainer.TypeClass["mergeAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<EnumerableContainer.Type>(
    Enumerable_lift,
  );

export default Enumerable_mergeAll;

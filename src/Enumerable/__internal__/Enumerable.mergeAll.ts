import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import { EnumerableContainer, ObservableContainers } from "../../containers.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_mergeAll: ObservableContainers.TypeClass<EnumerableContainer>["mergeAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<EnumerableContainer>(
    Enumerable_lift,
  );

export default Enumerable_mergeAll;

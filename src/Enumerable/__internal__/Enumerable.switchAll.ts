import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import { DeferredContainers, EnumerableContainer } from "../../containers.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_switchAll: DeferredContainers.TypeClass<EnumerableContainer>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<EnumerableContainer>(
    Enumerable_lift,
  );

export default Enumerable_switchAll;

import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import { EnumerableContainer } from "../../containers.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_switchAll: EnumerableContainer.TypeClass["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<EnumerableContainer.Type>(
    Enumerable_lift,
  );

export default Enumerable_switchAll;

import { Container, EnumerableContainer } from "../../../core.js";
import HigherOrderObservable_switchAll from "../../../core/HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_switchAll: Container.ConcatAll<EnumerableContainer>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<EnumerableContainer>(
    Enumerable_lift,
  );

export default Enumerable_switchAll;

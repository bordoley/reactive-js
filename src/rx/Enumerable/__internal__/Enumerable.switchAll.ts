import { ConcatAll } from "../../../containers.js";
import { EnumerableContainer } from "../../../rx.js";
import HigherOrderObservable_switchAll from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_switchAll: ConcatAll<EnumerableContainer>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<EnumerableContainer>(
    Enumerable_lift,
  );

export default Enumerable_switchAll;

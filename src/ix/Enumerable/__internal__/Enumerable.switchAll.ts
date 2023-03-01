import { ConcatAll } from "../../../containers.js";
import { EnumerableLike } from "../../../ix.js";
import HigherOrderObservable_switchAll from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_switchAll: ConcatAll<EnumerableLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<EnumerableLike>(
    Enumerable_lift,
  );

export default Enumerable_switchAll;

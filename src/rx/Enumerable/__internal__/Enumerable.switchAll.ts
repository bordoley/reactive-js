import { ConcatAll } from "../../../containers.js";
import { EnumerableContainerLike } from "../../../rx.js";
import HigherOrderObservable_switchAll from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_switchAll: ConcatAll<EnumerableContainerLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<EnumerableContainerLike>(
    Enumerable_lift,
  );

export default Enumerable_switchAll;

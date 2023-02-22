import { ConcatAll } from "../../../containers.js";
import { EnumerableObservableLike } from "../../../rx.js";
import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import EnumerableObservable_lift from "./EnumerableObservable.lift.js";

const EnumerableObservable_switchAll: ConcatAll<EnumerableObservableLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<EnumerableObservableLike>(
    EnumerableObservable_lift,
  );

export default EnumerableObservable_switchAll;

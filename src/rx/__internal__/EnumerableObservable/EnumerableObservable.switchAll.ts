import { ConcatAll } from "../../../containers";
import { EnumerableObservableLike } from "../../../rx";
import HigherOrderObservable_switchAll from "../HigherOrderObservable/HigherOrderObservable.switchAll";
import EnumerableObservable_lift from "./EnumerableObservable.lift";

const EnumerableObservable_switchAll: ConcatAll<EnumerableObservableLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<EnumerableObservableLike>(
    EnumerableObservable_lift,
  );

export default EnumerableObservable_switchAll;

import { ConcatAll } from "../../../containers";
import { EnumerableObservableLike } from "../../../rx";
import HigherOrderObservableLike__switchAll from "../HigherOrderObservableLike/HigherOrderObservableLike.switchAll";
import EnumerableObservableLike__lift from "./EnumerableObservableLike.lift";

const EnumerableObservableLike__switchAll: ConcatAll<EnumerableObservableLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservableLike__switchAll<EnumerableObservableLike>(
    EnumerableObservableLike__lift,
  );

export default EnumerableObservableLike__switchAll;

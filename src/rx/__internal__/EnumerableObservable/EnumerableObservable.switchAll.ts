import { ConcatAll } from "../../../containers";
import { EnumerableObservableLike } from "../../../rx";
import HigherOrderObservable$switchAll from "../HigherOrderObservable/HigherOrderObservable.switchAll";
import EnumerableObservable$lift from "./EnumerableObservable.lift";

const EnumerableObservable$switchAll: ConcatAll<EnumerableObservableLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable$switchAll<EnumerableObservableLike>(
    EnumerableObservable$lift,
  );

export default EnumerableObservable$switchAll;

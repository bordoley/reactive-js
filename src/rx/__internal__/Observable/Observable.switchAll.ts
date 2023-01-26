import { ConcatAll } from "../../../containers";
import { ObservableLike } from "../../../rx";
import HigherOrderObservable$switchAll from "../HigherOrderObservable/HigherOrderObservable.switchAll";
import Observable$lift from "./Observable.lift";

const Observable$switchAll: ConcatAll<ObservableLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable$switchAll<ObservableLike>(
    Observable$lift(),
  );

export default Observable$switchAll;

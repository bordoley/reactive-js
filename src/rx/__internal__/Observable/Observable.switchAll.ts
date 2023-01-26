import { ConcatAll } from "../../../containers";
import { ObservableLike } from "../../../rx";
import HigherOrderObservable_switchAll from "../HigherOrderObservable/HigherOrderObservable.switchAll";
import Observable_lift from "./Observable.lift";

const Observable_switchAll: ConcatAll<ObservableLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<ObservableLike>(
    Observable_lift(),
  );

export default Observable_switchAll;

import { ConcatAll } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import HigherOrderObservable_switchAll from "../../__internal__/HigherOrderObservable/HigherOrderObservable.switchAll.js";
import Observable_lift from "./Observable.lift.js";

const Observable_switchAll: ConcatAll<ObservableLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<ObservableLike>(
    Observable_lift(),
  );

export default Observable_switchAll;

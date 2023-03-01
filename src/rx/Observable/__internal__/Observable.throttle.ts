import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { ObservableLike } from "../../../rx.js";
import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import Observable_lift from "./Observable.lift.js";

const Observable_throttle = /*@__PURE__*/ (<T>() =>
  HigherOrderObservable_throttle<ObservableLike, T>(
    ReadonlyArray_toObservable,
    Observable_lift(false, false),
  ))();

export default Observable_throttle;

import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import { ObservableLike } from "../../../rx.js";
import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import Observable_lift from "./Observable.lift.js";

const Observable_throttle = /*@__PURE__*/ (<T>() =>
  HigherOrderObservable_throttle<ObservableLike, T>(
    ReadonlyArray_toRunnableObservable,
    Observable_lift(false, false),
  ))();

export default Observable_throttle;

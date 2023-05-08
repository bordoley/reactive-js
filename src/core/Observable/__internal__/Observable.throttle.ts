import {
  ObservableContainer,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../core.js";
import ReadonlyArray_toObservable from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import Observable_lift from "./Observable.lift.js";

const Observable_throttle = /*@__PURE__*/ (<T>() =>
  HigherOrderObservable_throttle<ObservableContainer, T>(
    ReadonlyArray_toObservable,
    Observable_lift({
      [ObservableLike_isEnumerable]: false,
      [ObservableLike_isRunnable]: false,
    }),
  ))();

export default Observable_throttle;

import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable";
import { ObservableLike } from "../../../rx";
import HigherOrderObservable_throttle from "../../__internal__/HigherOrderObservable/HigherOrderObservable.throttle";
import Observable_lift from "./Observable.lift";

const Observable_throttle = /*@__PURE__*/ (<T>() =>
  HigherOrderObservable_throttle<ObservableLike, T>(
    ReadonlyArray_toRunnableObservable,
    Observable_lift(false, false),
  ))();

export default Observable_throttle;

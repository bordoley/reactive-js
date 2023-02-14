import { ObservableLike } from "../../../rx";
import HigherOrderObservable_throttle from "../../__internal__/HigherOrderObservable/HigherOrderObservable.throttle";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray";
import Observable_lift from "./Observable.lift";

const Observable_throttle = /*@__PURE__*/ (<T>() =>
  HigherOrderObservable_throttle<ObservableLike, T>(
    Observable_fromReadonlyArray,
    Observable_lift(false, false),
  ))();

export default Observable_throttle;

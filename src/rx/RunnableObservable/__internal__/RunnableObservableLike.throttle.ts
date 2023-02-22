import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import { RunnableObservableLike, Throttle } from "../../../rx.js";
import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import RunnableObservable_lift from "./RunnableObservable.lift.js";

const RunnableObservable_throttle: Throttle<RunnableObservableLike>["throttle"] =
  /*@__PURE__*/ (<T>() =>
    HigherOrderObservable_throttle<RunnableObservableLike, T>(
      ReadonlyArray_toRunnableObservable,
      RunnableObservable_lift,
    ))();

export default RunnableObservable_throttle;

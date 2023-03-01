import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { RunnableLike, Throttle } from "../../../rx.js";
import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_throttle: Throttle<RunnableLike>["throttle"] = /*@__PURE__*/ (<
  T,
>() =>
  HigherOrderObservable_throttle<RunnableLike, T>(
    ReadonlyArray_toRunnable,
    Runnable_lift,
  ))();

export default Runnable_throttle;

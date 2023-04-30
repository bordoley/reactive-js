import ReadonlyArray_toObservable from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { RunnableContainerLike, Throttle } from "../../../rx.js";
import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_throttle: Throttle<RunnableContainerLike>["throttle"] =
  /*@__PURE__*/ (<T>() =>
    HigherOrderObservable_throttle<RunnableContainerLike, T>(
      ReadonlyArray_toObservable,
      Runnable_lift,
    ))();

export default Runnable_throttle;

import { ReactiveContainer, RunnableContainer } from "../../../core.js";
import ReadonlyArray_toObservable from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_throttle: ReactiveContainer.TypeClass<RunnableContainer>["throttle"] =
  /*@__PURE__*/ (<T>() =>
    HigherOrderObservable_throttle<RunnableContainer, T>(
      ReadonlyArray_toObservable,
      Runnable_lift,
    ))();

export default Runnable_throttle;

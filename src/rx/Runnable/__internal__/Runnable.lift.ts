import {
  Lift,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  RunnableLike,
} from "../../../rx.js";
import Observable_lift from "../../Observable/__internal__/Observable.lift.js";

const Runnable_lift: Lift<RunnableLike>["lift"] = /*@__PURE__*/ Observable_lift(
  {
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: true,
  },
) as Lift<RunnableLike>["lift"];

export default Runnable_lift;

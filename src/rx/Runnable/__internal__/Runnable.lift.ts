import { Lift } from "../../../__internal__/rx.js";
import {
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  RunnableContainerLike,
} from "../../../rx.js";
import Observable_lift from "../../Observable/__internal__/Observable.lift.js";

const Runnable_lift: Lift<RunnableContainerLike>["lift"] =
  /*@__PURE__*/ Observable_lift({
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: true,
  }) as Lift<RunnableContainerLike>["lift"];

export default Runnable_lift;

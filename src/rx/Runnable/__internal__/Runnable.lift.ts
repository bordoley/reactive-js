import { Lift } from "../../../__internal__/rx.js";
import {
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  RunnableContainer,
} from "../../../rx.js";
import Observable_lift from "../../Observable/__internal__/Observable.lift.js";

const Runnable_lift: Lift<RunnableContainer>["lift"] =
  /*@__PURE__*/ Observable_lift({
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: true,
  }) as Lift<RunnableContainer>["lift"];

export default Runnable_lift;

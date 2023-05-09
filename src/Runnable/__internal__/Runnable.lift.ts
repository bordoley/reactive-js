import Observable_lift from "../../Observable/__internal__/Observable.lift.js";
import { Lift } from "../../__internal__/types.js";
import { RunnableContainer } from "../../containers.js";
import {
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../types.js";

const Runnable_lift: Lift<RunnableContainer>["lift"] =
  /*@__PURE__*/ Observable_lift({
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: true,
  }) as Lift<RunnableContainer>["lift"];

export default Runnable_lift;

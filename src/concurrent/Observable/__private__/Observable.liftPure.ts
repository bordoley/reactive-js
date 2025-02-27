import { ComputationLike_isPure } from "../../../computations.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
} from "../../../concurrent.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";

const Observable_liftPure = /*@__PURE__*/ Observable_lift({
  [ObservableLift_isStateless]: true,
  [ObservableLike_isDeferred]: true,
  [ComputationLike_isPure]: true,
  [ObservableLike_isRunnable]: true,
});

export default Observable_liftPure;

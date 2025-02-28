import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { ObservableLike_isDeferred } from "../../../concurrent.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";

const Observable_liftPure = /*@__PURE__*/ Observable_lift({
  [ObservableLift_isStateless]: true,
  [ObservableLike_isDeferred]: true,
  [ComputationLike_isPure]: true,
  [ComputationLike_isSynchronous]: true,
});

export default Observable_liftPure;

import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { ObservableLike_isDeferred } from "../../../concurrent.js";
import Observable_lift from "./Observable.lift.js";

const Observable_liftWithSideEffects = /*@__PURE__*/ Observable_lift({
  [ObservableLike_isDeferred]: true,
  [ComputationLike_isPure]: false,
  [ComputationLike_isSynchronous]: true,
});

export default Observable_liftWithSideEffects;

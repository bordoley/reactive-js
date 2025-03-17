import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import Observable_lift from "./Observable.lift.js";

const Observable_liftWithSideEffects = /*@__PURE__*/ Observable_lift({
  [ComputationLike_isPure]: false,
  [ComputationLike_isSynchronous]: true,
});

export default Observable_liftWithSideEffects;

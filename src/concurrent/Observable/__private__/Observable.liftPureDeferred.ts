import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import Observable_lift from "./Observable.lift.js";

const Observable_liftPureDeferred = /*@__PURE__*/ Observable_lift({
  [ComputationLike_isDeferred]: true,
  [ComputationLike_isPure]: true,
  [ComputationLike_isSynchronous]: true,
});

export default Observable_liftPureDeferred;

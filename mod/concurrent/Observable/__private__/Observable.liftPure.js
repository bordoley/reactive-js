/// <reference types="./Observable.liftPure.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
const Observable_liftPure = /*@__PURE__*/ Observable_lift({
    [ObservableLift_isStateless]: true,
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
});
export default Observable_liftPure;

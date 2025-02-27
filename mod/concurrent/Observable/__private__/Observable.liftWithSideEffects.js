/// <reference types="./Observable.liftWithSideEffects.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_lift from "./Observable.lift.js";
const Observable_liftWithSideEffects = /*@__PURE__*/ Observable_lift({
    [ObservableLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ObservableLike_isRunnable]: true,
});
export default Observable_liftWithSideEffects;

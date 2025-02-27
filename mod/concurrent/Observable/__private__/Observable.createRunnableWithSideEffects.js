/// <reference types="./Observable.createRunnableWithSideEffects.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_createPureRunnableWithSideEffects = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ObservableLike_isRunnable]: true,
});
export default Observable_createPureRunnableWithSideEffects;

/// <reference types="./Observable.createPureRunnable.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_createPureRunnable = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ComputationLike_isPure]: true,
    [ObservableLike_isRunnable]: true,
});
export default Observable_createPureRunnable;

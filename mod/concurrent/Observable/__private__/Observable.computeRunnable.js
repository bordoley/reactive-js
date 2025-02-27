/// <reference types="./Observable.computeRunnable.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_computeWithConfig from "./Observable.computeWithConfig.js";
const Observable_computeRunnable = (computation, options = {}) => Observable_computeWithConfig(computation, {
    [ObservableLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ObservableLike_isRunnable]: true,
}, options);
export default Observable_computeRunnable;

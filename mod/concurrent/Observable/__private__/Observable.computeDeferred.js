/// <reference types="./Observable.computeDeferred.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_computeWithConfig from "./Observable.computeWithConfig.js";
const Observable_computeDeferred = (computation, options = {}) => Observable_computeWithConfig(computation, {
    [ObservableLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
}, options);
export default Observable_computeDeferred;

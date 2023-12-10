/// <reference types="./Observable.computeDeferred.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_computeWithConfig from "./Observable.computeWithConfig.js";
const Observable_computeDeferred = (computation, options = {}) => Observable_computeWithConfig(computation, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
}, options);
export default Observable_computeDeferred;

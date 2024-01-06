/// <reference types="./Observable.computeRunnable.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_computeWithConfig from "./Observable.computeWithConfig.js";
const Observable_computeRunnable = (computation, options = {}) => Observable_computeWithConfig(computation, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isMulticasted]: false,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: true,
}, options);
export default Observable_computeRunnable;

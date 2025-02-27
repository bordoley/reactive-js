/// <reference types="./Observable.createMulticast.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_createMulticast = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: false,
    [ComputationLike_isPure]: true,
    [ObservableLike_isRunnable]: false,
});
export default Observable_createMulticast;

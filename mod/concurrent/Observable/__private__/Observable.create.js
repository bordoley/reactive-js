/// <reference types="./Observable.create.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
});
export default Observable_create;

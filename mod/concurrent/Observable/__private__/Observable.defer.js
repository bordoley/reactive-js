/// <reference types="./Observable.defer.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import { ObservableLike_isDeferred, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { invoke, pipe } from "../../../functions.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_defer = (factory) => Observable_createWithConfig(observer => {
    pipe(factory(), invoke(ObservableLike_observe, observer));
}, {
    [ObservableLike_isDeferred]: true,
    [ComputationLike_isPure]: true,
    [ObservableLike_isRunnable]: false,
});
export default Observable_defer;

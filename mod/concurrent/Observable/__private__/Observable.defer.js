/// <reference types="./Observable.defer.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { ObservableLike_isDeferred, ObservableLike_observe, } from "../../../concurrent.js";
import { invoke, pipe } from "../../../functions.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_defer = (factory) => Observable_createWithConfig(observer => {
    pipe(factory(), invoke(ObservableLike_observe, observer));
}, {
    [ObservableLike_isDeferred]: true,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
});
export default Observable_defer;

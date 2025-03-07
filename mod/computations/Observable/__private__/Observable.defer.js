/// <reference types="./Observable.defer.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_defer = (factory) => Observable_createWithConfig(observer => {
    pipe(factory(), invoke(ObservableLike_observe, observer));
}, {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
});
export default Observable_defer;

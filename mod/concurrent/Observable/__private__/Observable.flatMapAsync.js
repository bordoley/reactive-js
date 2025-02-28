/// <reference types="./Observable.flatMapAsync.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import Observable_concatMap from "./Observable.concatMap.js";
import Observable_fromAsyncFactory from "./Observable.fromAsyncFactory.js";
const Observable_flatMapAsync = (f) => {
    const mapper = (a) => pipe((abortSignal) => f(a, abortSignal), Observable_fromAsyncFactory());
    return Observable_concatMap(mapper, {
        innerType: {
            [ComputationLike_isDeferred]: true,
            [ComputationLike_isPure]: false,
            [ComputationLike_isSynchronous]: false,
        },
    });
};
export default Observable_flatMapAsync;

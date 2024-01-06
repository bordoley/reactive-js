/// <reference types="./Observable.flatMapAsync.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import Observable_concatMap from "./Observable.concatMap.js";
import Observable_fromAsyncFactory from "./Observable.fromAsyncFactory.js";
const Observable_flatMapAsync = (f) => {
    const mapper = (a) => pipe((abortSignal) => f(a, abortSignal), Observable_fromAsyncFactory());
    return Observable_concatMap(mapper, {
        innerType: {
            [ObservableLike_isDeferred]: true,
            [ObservableLike_isMulticasted]: false,
            [ObservableLike_isPure]: false,
            [ObservableLike_isRunnable]: false,
        },
    });
};
export default Observable_flatMapAsync;

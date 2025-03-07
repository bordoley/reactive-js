/// <reference types="./Observable.flatMapAsync.d.ts" />

import * as Computation from "../../../computations/Computation.js";
import { DeferredComputationWithSideEffects } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import Observable_concatAll from "./Observable.concatAll.js";
import Observable_fromAsyncFactory from "./Observable.fromAsyncFactory.js";
import Observable_map from "./Observable.map.js";
const ObservableModule = {
    map: Observable_map,
    concatAll: Observable_concatAll,
};
const Observable_flatMapAsync = (f) => {
    const mapper = (a) => pipe((abortSignal) => f(a, abortSignal), Observable_fromAsyncFactory());
    return Computation.concatMap(ObservableModule)(mapper, {
        innerType: DeferredComputationWithSideEffects,
    });
};
export default Observable_flatMapAsync;

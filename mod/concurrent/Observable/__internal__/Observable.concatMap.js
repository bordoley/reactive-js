/// <reference types="./Observable.concatMap.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import { none, pipe } from "../../../functions.js";
import Observable_mergeMap from "./Observable.mergeMap.js";
const Observable_concatMap = ((selector, options) => (obs) => pipe(obs, Observable_mergeMap(selector, {
    ...(options ?? {}),
    concurrency: 1,
    backpressureStrategy: none,
    capacity: none,
})));
export default Observable_concatMap;

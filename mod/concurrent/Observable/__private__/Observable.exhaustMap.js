/// <reference types="./Observable.exhaustMap.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import { DropLatestBackpressureStrategy } from "../../../utils.js";
import Observable_mergeMap from "./Observable.mergeMap.js";
const Observable_exhaustMap = ((selector, options) => (obs) => pipe(obs, Observable_mergeMap(selector, {
    ...(options ?? {}),
    capacity: 0,
    backpressureStrategy: DropLatestBackpressureStrategy,
    concurrency: 1,
})));
export default Observable_exhaustMap;

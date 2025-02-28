/// <reference types="./Observable.concatMap.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { none, pipe } from "../../../functions.js";
import Observable_mergeMap from "./Observable.mergeMap.js";
const Observable_concatMap = ((selector, options) => (obs) => pipe(obs, Observable_mergeMap(selector, {
    ...(options ?? {}),
    concurrency: 1,
    backpressureStrategy: none,
    capacity: none,
})));
export default Observable_concatMap;

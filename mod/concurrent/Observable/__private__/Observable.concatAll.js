/// <reference types="./Observable.concatAll.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../../concurrent.js";
import { none } from "../../../functions.js";
import Observable_mergeAll from "./Observable.mergeAll.js";
const Observable_concatAll = ((options) => Observable_mergeAll({
    ...(options ?? {}),
    concurrency: 1,
    backpressureStrategy: none,
    capacity: none,
}));
export default Observable_concatAll;

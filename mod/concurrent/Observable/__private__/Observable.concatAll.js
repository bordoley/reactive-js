/// <reference types="./Observable.concatAll.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { none } from "../../../functions.js";
import Observable_mergeAll from "./Observable.mergeAll.js";
const Observable_concatAll = ((options) => Observable_mergeAll({
    ...(options ?? {}),
    concurrency: 1,
    backpressureStrategy: none,
    capacity: none,
}));
export default Observable_concatAll;

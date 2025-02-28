/// <reference types="./Observable.isRunnable.d.ts" />

import { ComputationLike_isSynchronous } from "../../../computations.js";
import { ObservableLike_isDeferred, } from "../../../concurrent.js";
const Observable_isRunnable = (obs) => (obs[ComputationLike_isSynchronous] ?? true) &&
    obs[ObservableLike_isDeferred];
export default Observable_isRunnable;

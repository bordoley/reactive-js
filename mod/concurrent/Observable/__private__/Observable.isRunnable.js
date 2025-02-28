/// <reference types="./Observable.isRunnable.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isSynchronous, } from "../../../computations.js";
const Observable_isRunnable = (obs) => (obs[ComputationLike_isSynchronous] ?? true) &&
    (obs[ComputationLike_isDeferred] ?? true);
export default Observable_isRunnable;

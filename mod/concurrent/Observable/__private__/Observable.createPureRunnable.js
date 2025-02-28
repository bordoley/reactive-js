/// <reference types="./Observable.createPureRunnable.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_createPureRunnable = (f) => Observable_createWithConfig(f, {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
});
export default Observable_createPureRunnable;

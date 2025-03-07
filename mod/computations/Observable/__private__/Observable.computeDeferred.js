/// <reference types="./Observable.computeDeferred.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import Observable_computeWithConfig from "./Observable.computeWithConfig.js";
const Observable_computeDeferred = (computation, options = {}) => Observable_computeWithConfig(computation, {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
}, options);
export default Observable_computeDeferred;

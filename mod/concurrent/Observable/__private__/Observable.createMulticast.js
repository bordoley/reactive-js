/// <reference types="./Observable.createMulticast.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_createMulticast = (f) => Observable_createWithConfig(f, {
    [ComputationLike_isDeferred]: false,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
});
export default Observable_createMulticast;

/// <reference types="./Observable.create.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_create = (f) => Observable_createWithConfig(f, {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
});
export default Observable_create;

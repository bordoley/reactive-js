/// <reference types="./Observable.createPureSynchronousObservable.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_createPureSynchronousObservable = (f) => Observable_createWithConfig(f, {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
});
export default Observable_createPureSynchronousObservable;

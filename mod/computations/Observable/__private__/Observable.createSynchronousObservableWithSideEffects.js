/// <reference types="./Observable.createSynchronousObservableWithSideEffects.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_createSynchronousObservableWithSideEffects = (f) => Observable_createWithConfig(f, {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
});
export default Observable_createSynchronousObservableWithSideEffects;

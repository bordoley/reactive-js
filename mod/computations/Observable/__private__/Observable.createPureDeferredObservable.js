/// <reference types="./Observable.createPureDeferredObservable.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_createPureDeferredObservable = (f) => Observable_createWithConfig(f, {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
});
export default Observable_createPureDeferredObservable;

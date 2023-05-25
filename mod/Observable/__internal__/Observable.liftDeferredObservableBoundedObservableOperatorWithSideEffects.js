/// <reference types="./Observable.liftDeferredObservableBoundedObservableOperatorWithSideEffects.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../types.js";
import Observable_liftUpperBoundedBy from "./Observable.liftUpperBoundedBy.js";
const Observable_liftDeferredObservableBoundedObservableOperatorWithSideEffects = 
/*@__PURE__*/ Observable_liftUpperBoundedBy({
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
});
export default Observable_liftDeferredObservableBoundedObservableOperatorWithSideEffects;

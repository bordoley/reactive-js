/// <reference types="./Observable.catchError.d.ts" />

import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { ObservableLike_observe, } from "../../../concurrent.js";
import { bind, bindMethod, error, isSome, none, pipe, } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
const Observable_catchError = 
/*@__PURE__*/ (() => {
    const createCatchErrorObserver = (onErrorHandler) => (delegate) => pipe(Observer_createWithDelegate(delegate), DisposableContainer.onComplete(bindMethod(delegate, DisposableLike_dispose)), DisposableContainer.onError(bind(onErrorHandler, delegate)));
    return (errorHandler, options) => {
        function onErrorHandler(err) {
            let action = none;
            try {
                action = errorHandler(err);
            }
            catch (e) {
                this[DisposableLike_dispose](error([error(e), err]));
            }
            if (isSome(action)) {
                action[ObservableLike_observe](this);
            }
            else {
                this[DisposableLike_dispose]();
            }
        }
        return Observable_lift({
            [ObservableLift_isStateless]: false,
            [ComputationLike_isDeferred]: Computation.isDeferred(options?.innerType ?? {}),
            [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
            [ComputationLike_isSynchronous]: Computation.isSynchronous(options?.innerType ?? {}),
        })(createCatchErrorObserver(onErrorHandler));
    };
})();
export default Observable_catchError;

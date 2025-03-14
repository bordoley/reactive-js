/// <reference types="./Observable.catchError.d.ts" />

import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../../computations.js";
import { bind, bindMethod, error, isSome, none, pipe, } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_createWithDelegate from "../../../utils/Observer/__internal__/Observer.createWithDelegate.js";
import { DisposableLike_dispose, SinkLike_complete, } from "../../../utils.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
const Observable_catchError = 
/*@__PURE__*/ (() => {
    const createCatchErrorObserver = (onErrorHandler) => (delegate) => pipe(Observer_createWithDelegate(delegate), DisposableContainer.onComplete(bindMethod(delegate, SinkLike_complete)), DisposableContainer.onError(bind(onErrorHandler, delegate)));
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
                this[SinkLike_complete]();
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

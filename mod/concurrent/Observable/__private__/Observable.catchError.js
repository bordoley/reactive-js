/// <reference types="./Observable.catchError.d.ts" />

import { ObservableLike_observe, } from "../../../concurrent.js";
import { bind, bindMethod, error, isSome, none, pipe, } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const Observable_catchError = 
/*@__PURE__*/ (() => {
    const createCatchErrorObserver = (onErrorHandler) => (delegate) => pipe(Observer_createWithDelegate(delegate), DisposableContainer.onComplete(bindMethod(delegate, DisposableLike_dispose)), DisposableContainer.onError(bind(onErrorHandler, delegate)));
    return (errorHandler) => {
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
        return Observable_liftPureDeferred(createCatchErrorObserver(onErrorHandler));
    };
})();
export default Observable_catchError;

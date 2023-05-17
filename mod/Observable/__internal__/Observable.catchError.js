/// <reference types="./Observable.catchError.d.ts" />

import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../Disposable/__internal__/Disposable.onError.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import { bindMethod, error, pipe } from "../../functions.js";
import { DisposableLike_dispose } from "../../types.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";
const Observable_catchError = 
/*@__PURE__*/ (() => {
    const createCatchErrorObserver = (errorHandler) => (delegate) => pipe(Observer_createWithDelegate(delegate), Disposable_onComplete(bindMethod(delegate, DisposableLike_dispose)), Disposable_onError((err) => {
        try {
            errorHandler(err);
        }
        catch (e) {
            delegate[DisposableLike_dispose](error([e, err]));
        }
    }));
    return (errorHandler) => pipe(errorHandler, createCatchErrorObserver, Observable_liftEnumerableUpperBounded);
})();
export default Observable_catchError;

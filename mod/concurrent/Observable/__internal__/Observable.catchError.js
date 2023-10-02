/// <reference types="./Observable.catchError.d.ts" />

import { bindMethod, error, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const Observable_catchError = 
/*@__PURE__*/ (() => {
    const createCatchErrorObserver = (errorHandler) => (delegate) => pipe(Observer_createWithDelegate(delegate), Disposable.onComplete(bindMethod(delegate, DisposableLike_dispose)), Disposable.onError((err) => {
        try {
            errorHandler(err);
            delegate[DisposableLike_dispose]();
        }
        catch (e) {
            delegate[DisposableLike_dispose](error([error(e), err]));
        }
    }));
    return (errorHandler) => Observable_liftWithSideEffects(createCatchErrorObserver(errorHandler));
})();
export default Observable_catchError;

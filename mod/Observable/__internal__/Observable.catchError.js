/// <reference types="./Observable.catchError.d.ts" />

import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../Disposable/__internal__/Disposable.onError.js";
import Enumerator_createWithDelegate from "../../Enumerator/__internal__/Enumerator.createWithDelegate.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import { bindMethod, error, pipe } from "../../functions.js";
import { DisposableLike_dispose, } from "../../types.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const Observable_catchError = 
/*@__PURE__*/ (() => {
    const createCatchErrorEnumerator = (errorHandler) => (delegate) => {
        const enumerator = Enumerator_createWithDelegate(delegate);
        pipe(delegate, Disposable_onComplete(bindMethod(enumerator, DisposableLike_dispose)), Disposable_onError((err) => {
            try {
                errorHandler(err);
                enumerator[DisposableLike_dispose]();
            }
            catch (e) {
                enumerator[DisposableLike_dispose](error([error(e), err]));
            }
        }));
        return enumerator;
    };
    const createCatchErrorObserver = (errorHandler) => (delegate) => pipe(Observer_createWithDelegate(delegate), Disposable_onComplete(bindMethod(delegate, DisposableLike_dispose)), Disposable_onError((err) => {
        try {
            errorHandler(err);
            delegate[DisposableLike_dispose]();
        }
        catch (e) {
            delegate[DisposableLike_dispose](error([error(e), err]));
        }
    }));
    return (errorHandler) => Observable_liftWithSideEffects(createCatchErrorEnumerator(errorHandler), createCatchErrorObserver(errorHandler));
})();
export default Observable_catchError;

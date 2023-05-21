/// <reference types="./Observable.catchErrorWithFallback.d.ts" />

import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../Disposable/__internal__/Disposable.onError.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import { bindMethod, error, pipe, } from "../../functions.js";
import { DisposableLike_dispose, ObservableLike_observe, } from "../../types.js";
const Observable_catchErrorWithFallback = (lift) => {
    const createCatchErrorObserver = (errorHandler, causedBy) => (delegate) => pipe(Observer_createWithDelegate(delegate), Disposable_onComplete(bindMethod(delegate, DisposableLike_dispose)), Disposable_onError((err) => {
        try {
            const next = errorHandler(err, causedBy);
            next[ObservableLike_observe](delegate);
        }
        catch (e) {
            delegate[DisposableLike_dispose](error([error(e), err]));
        }
    }));
    return (errorHandler) => (observable) => pipe(createCatchErrorObserver(errorHandler, observable), lift)(observable);
};
export default Observable_catchErrorWithFallback;

/// <reference types="./DeferredObservable.repeatOrRetry.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_liftEnumerableUpperBounded from "../../Observable/__internal__/Observable.liftEnumerableUpperBounded.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import { bindMethod, error, isSome, partial, pipe } from "../../functions.js";
import { DisposableLike_dispose, SinkLike_notify, } from "../../types.js";
const DeferredObservable_repeatOrRetry = 
/*@__PURE__*/ (() => {
    const createRepeatObserver = (delegate, observable, shouldRepeat) => {
        let count = 1;
        const doOnDispose = (err) => {
            let shouldComplete = false;
            try {
                shouldComplete = !shouldRepeat(count, err);
            }
            catch (e) {
                shouldComplete = true;
                err = isSome(err) ? error([e, err]) : error(e);
            }
            if (shouldComplete) {
                delegate[DisposableLike_dispose](err);
            }
            else {
                count++;
                pipe(observable, Observable_forEach(bindMethod(delegate, SinkLike_notify)), Observable_subscribeWithConfig(delegate, delegate), Disposable_addTo(delegate, { ignoreChildErrors: true }), Disposable_onDisposed(doOnDispose));
            }
        };
        return pipe(Observer_createWithDelegate(delegate), Disposable_addTo(delegate, { ignoreChildErrors: true }), Disposable_onDisposed(doOnDispose));
    };
    return ((shouldRepeat) => (observable) => {
        const operator = pipe(createRepeatObserver, partial(observable, shouldRepeat));
        return pipe(observable, Observable_liftEnumerableUpperBounded(operator));
    });
})();
export default DeferredObservable_repeatOrRetry;

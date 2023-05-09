/// <reference types="./Observable.repeatOrRetry.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import { bindMethod, error, isSome, partial, pipe } from "../../functions.js";
import { DisposableLike_dispose, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike_notify, } from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_repeatOrRetry = /*@__PURE__*/ (() => {
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
                pipe(observable, Observable_forEach(bindMethod(delegate, ObserverLike_notify)), Observable_subscribeWithConfig(delegate, delegate), Disposable_addTo(delegate, { ignoreChildErrors: true }), Disposable_onDisposed(doOnDispose));
            }
        };
        return pipe(Observer_createWithDelegate(delegate), Disposable_addTo(delegate, { ignoreChildErrors: true }), Disposable_onDisposed(doOnDispose));
    };
    return ((shouldRepeat) => (observable) => {
        const operator = pipe(createRepeatObserver, partial(observable, shouldRepeat));
        return pipe(observable, Observable_lift({
            [ObservableLike_isEnumerable]: true,
            [ObservableLike_isRunnable]: true,
        })(operator));
    });
})();
export default Observable_repeatOrRetry;

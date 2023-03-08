/// <reference types="./Observable.repeatOrRetry.d.ts" />

import { error, partial, pipe } from "../../../functions.js";
import { ObserverLike_scheduler, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observer_notifyObserver from "../../Observer/__internal__/Observer.notifyObserver.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
import Observable_subscribe from "./Observable.subscribe.js";
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
                err = error([e, err]);
            }
            if (shouldComplete) {
                delegate[DisposableLike_dispose](err);
            }
            else {
                count++;
                pipe(observable, Observable_forEach(Observer_notifyObserver(delegate)), Observable_subscribe(delegate[ObserverLike_scheduler]), Disposable_addToIgnoringChildErrors(delegate), Disposable_onDisposed(doOnDispose));
            }
        };
        return pipe(Observer_createWithDelegate(delegate), Disposable_addToIgnoringChildErrors(delegate), Disposable_onDisposed(doOnDispose));
    };
    return (shouldRepeat) => (observable) => {
        const operator = pipe(createRepeatObserver, partial(observable, shouldRepeat));
        return pipe(observable, Observable_liftEnumerableOperator(operator));
    };
})();
export default Observable_repeatOrRetry;

/// <reference types="./Observable.repeatOrRetry.d.ts" />

import { ObserverLike_notify, } from "../../../concurrent.js";
import { bindMethod, error, isSome, none, partial, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_liftPure from "./Observable.liftPure.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_repeatOrRetry = /*@__PURE__*/ (() => {
    const createRepeatObserver = (delegate, observable, shouldRepeat) => {
        let count = 1;
        const doOnDispose = (err) => {
            let shouldComplete = false;
            try {
                shouldComplete = !shouldRepeat(count, err);
                err = none;
            }
            catch (e) {
                shouldComplete = true;
                err = isSome(err) ? error([error(e), err]) : error(e);
            }
            if (shouldComplete) {
                delegate[DisposableLike_dispose](err);
            }
            else {
                count++;
                pipe(observable, Observable_forEach(bindMethod(delegate, ObserverLike_notify)), Observable_subscribeWithConfig(delegate, delegate), Disposable.addToContainer(delegate), DisposableContainer.onDisposed(doOnDispose));
            }
        };
        return pipe(Observer_createWithDelegate(delegate), Disposable.addToContainer(delegate), DisposableContainer.onDisposed(doOnDispose));
    };
    return ((shouldRepeat) => (observable) => Observable_liftPure(pipe(createRepeatObserver, partial(observable, shouldRepeat)))(observable));
})();
export default Observable_repeatOrRetry;

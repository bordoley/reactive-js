/// <reference types="./Observable.repeatOrRetry.d.ts" />

import { bindMethod, error, isSome, none, partial, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_createWithDelegate from "../../../utils/Observer/__internal__/Observer.createWithDelegate.js";
import { DisposableLike_dispose, QueueableLike_complete, QueueableLike_enqueue, } from "../../../utils.js";
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
            if (shouldComplete && isSome(err)) {
                delegate[DisposableLike_dispose](err);
            }
            else if (shouldComplete) {
                delegate[QueueableLike_complete]();
            }
            else {
                count++;
                pipe(observable, Observable_forEach(bindMethod(delegate, QueueableLike_enqueue)), Observable_subscribeWithConfig(delegate, delegate), Disposable.addToContainer(delegate), DisposableContainer.onDisposed(doOnDispose));
            }
        };
        return pipe(Observer_createWithDelegate(delegate), Disposable.addToContainer(delegate), DisposableContainer.onDisposed(doOnDispose));
    };
    return ((shouldRepeat) => (observable) => Observable_liftPure(pipe(createRepeatObserver, partial(observable, shouldRepeat)))(observable));
})();
export default Observable_repeatOrRetry;

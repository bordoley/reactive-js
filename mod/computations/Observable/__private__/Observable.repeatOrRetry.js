/// <reference types="./Observable.repeatOrRetry.d.ts" />

import { ProducerLike_consume, } from "../../../computations.js";
import { error, invoke, isSome, none, partial, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as DelegatingObserver from "../../../utils/__internal__/DelegatingObserver.js";
import { DisposableLike_dispose, SinkLike_complete, } from "../../../utils.js";
import Observable_liftPure from "./Observable.liftPure.js";
import Observable_toProducer from "./Observable.toProducer.js";
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
            if (isSome(err)) {
                delegate[DisposableLike_dispose](err);
            }
            else if (shouldComplete) {
                delegate[SinkLike_complete]();
            }
            else {
                count++;
                const newDelegate = pipe(DelegatingObserver.createNotifyOnlyNonCompletingNonDisposing(delegate), Disposable.addToContainer(delegate), DisposableContainer.onDisposed(doOnDispose));
                pipe(observable, Observable_toProducer(delegate), invoke(ProducerLike_consume, newDelegate));
            }
        };
        return pipe(DelegatingObserver.createNotifyOnlyNonCompletingNonDisposing(delegate), Disposable.addToContainer(delegate), DisposableContainer.onDisposed(doOnDispose));
    };
    return ((shouldRepeat) => (observable) => Observable_liftPure(pipe(createRepeatObserver, partial(observable, shouldRepeat)))(observable));
})();
export default Observable_repeatOrRetry;

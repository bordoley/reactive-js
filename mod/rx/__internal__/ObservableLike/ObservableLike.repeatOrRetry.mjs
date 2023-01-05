/// <reference types="./ObservableLike.repeatOrRetry.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import DisposableLike__addToIgnoringChildErrors from '../../../util/__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__onDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.onDisposed.mjs';
import ObserverLike__createWithDelegate from '../ObserverLike/ObserverLike.createWithDelegate.mjs';
import ObserverLike__getScheduler from '../ObserverLike/ObserverLike.getScheduler.mjs';
import SinkLike__notifySink from '../SinkLike/SinkLike.notifySink.mjs';
import ObservableLike__forEach from './ObservableLike.forEach.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';

const ObservableLike__repeatOrRetry = /*@__PURE__*/ (() => {
    const createRepeatObserver = (delegate, observable, shouldRepeat) => {
        let count = 1;
        const doOnDispose = (e) => {
            let shouldComplete = false;
            try {
                shouldComplete = !shouldRepeat(count, e);
            }
            catch (cause) {
                shouldComplete = true;
                e = { cause, parent: e };
            }
            if (shouldComplete) {
                pipe(delegate, DisposableLike__dispose(e));
            }
            else {
                count++;
                pipe(observable, ObservableLike__forEach(SinkLike__notifySink(delegate)), ObservableLike__subscribe(ObserverLike__getScheduler(delegate)), DisposableLike__addToIgnoringChildErrors(delegate), DisposableLike__onDisposed(doOnDispose));
            }
        };
        return pipe(ObserverLike__createWithDelegate(delegate), DisposableLike__addToIgnoringChildErrors(delegate), DisposableLike__onDisposed(doOnDispose));
    };
    return (shouldRepeat) => (observable) => {
        const operator = pipe(createRepeatObserver, partial(observable, shouldRepeat));
        return pipe(observable, ObservableLike__lift(true, true)(operator));
    };
})();

export { ObservableLike__repeatOrRetry as default };

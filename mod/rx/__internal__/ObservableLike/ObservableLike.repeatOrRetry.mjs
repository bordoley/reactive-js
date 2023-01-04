/// <reference types="./ObservableLike.repeatOrRetry.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import { dispose, addToIgnoringChildErrors, onDisposed } from '../../../util/DisposableLike.mjs';
import { getScheduler } from '../../ObserverLike.mjs';
import { notifySink } from '../../SinkLike.mjs';
import ObserverLike__createWithDelegate from '../ObserverLike/ObserverLike.createWithDelegate.mjs';
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
                pipe(delegate, dispose(e));
            }
            else {
                count++;
                pipe(observable, ObservableLike__forEach(notifySink(delegate)), ObservableLike__subscribe(getScheduler(delegate)), addToIgnoringChildErrors(delegate), onDisposed(doOnDispose));
            }
        };
        return pipe(ObserverLike__createWithDelegate(delegate), addToIgnoringChildErrors(delegate), onDisposed(doOnDispose));
    };
    return (shouldRepeat) => (observable) => {
        const operator = pipe(createRepeatObserver, partial(observable, shouldRepeat));
        return pipe(observable, ObservableLike__lift(true, true)(operator));
    };
})();

export { ObservableLike__repeatOrRetry as default };

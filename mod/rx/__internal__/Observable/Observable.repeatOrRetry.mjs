/// <reference types="./Observable.repeatOrRetry.d.ts" />
import { error, pipe, partial } from '../../../functions.mjs';
import Disposable$addToIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$onDisposed from '../../../util/__internal__/Disposable/Disposable.onDisposed.mjs';
import Observer$createWithDelegate from '../Observer/Observer.createWithDelegate.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Sink$notifySink from '../Sink/Sink.notifySink.mjs';
import Observable$forEach from './Observable.forEach.mjs';
import Observable$lift from './Observable.lift.mjs';
import Observable$subscribe from './Observable.subscribe.mjs';

const Observable$repeatOrRetry = /*@__PURE__*/ (() => {
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
                pipe(delegate, Disposable$dispose(err));
            }
            else {
                count++;
                pipe(observable, Observable$forEach(Sink$notifySink(delegate)), Observable$subscribe(Observer$getScheduler(delegate)), Disposable$addToIgnoringChildErrors(delegate), Disposable$onDisposed(doOnDispose));
            }
        };
        return pipe(Observer$createWithDelegate(delegate), Disposable$addToIgnoringChildErrors(delegate), Disposable$onDisposed(doOnDispose));
    };
    return (shouldRepeat) => (observable) => {
        const operator = pipe(createRepeatObserver, partial(observable, shouldRepeat));
        return pipe(observable, Observable$lift(true, true)(operator));
    };
})();

export { Observable$repeatOrRetry as default };

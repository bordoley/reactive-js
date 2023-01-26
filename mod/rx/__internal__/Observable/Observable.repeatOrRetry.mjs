/// <reference types="./Observable.repeatOrRetry.d.ts" />
import { error, pipe, partial } from '../../../functions.mjs';
import Disposable_addToIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_onDisposed from '../../../util/__internal__/Disposable/Disposable.onDisposed.mjs';
import Observer_createWithDelegate from '../Observer/Observer.createWithDelegate.mjs';
import Observer_getScheduler from '../Observer/Observer.getScheduler.mjs';
import Sink_notifySink from '../Sink/Sink.notifySink.mjs';
import Observable_forEach from './Observable.forEach.mjs';
import Observable_lift from './Observable.lift.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

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
                pipe(delegate, Disposable_dispose(err));
            }
            else {
                count++;
                pipe(observable, Observable_forEach(Sink_notifySink(delegate)), Observable_subscribe(Observer_getScheduler(delegate)), Disposable_addToIgnoringChildErrors(delegate), Disposable_onDisposed(doOnDispose));
            }
        };
        return pipe(Observer_createWithDelegate(delegate), Disposable_addToIgnoringChildErrors(delegate), Disposable_onDisposed(doOnDispose));
    };
    return (shouldRepeat) => (observable) => {
        const operator = pipe(createRepeatObserver, partial(observable, shouldRepeat));
        return pipe(observable, Observable_lift(true, true)(operator));
    };
})();

export { Observable_repeatOrRetry as default };

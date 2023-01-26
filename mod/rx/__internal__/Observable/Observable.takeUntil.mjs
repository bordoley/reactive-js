/// <reference types="./Observable.takeUntil.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable_bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Observer_createWithDelegate from '../Observer/Observer.createWithDelegate.mjs';
import Observer_getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observable_isEnumerable from './Observable.isEnumerable.mjs';
import Observable_isRunnable from './Observable.isRunnable.mjs';
import Observable_lift from './Observable.lift.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';
import Observable_takeFirst from './Observable.takeFirst.mjs';

const Observable_takeUntil = (notifier) => {
    const operator = (delegate) => pipe(Observer_createWithDelegate(delegate), Disposable_bindTo(delegate), Disposable_bindTo(pipe(notifier, Observable_takeFirst(), Observable_subscribe(Observer_getScheduler(delegate)))));
    return pipe(operator, Observable_lift(Observable_isEnumerable(notifier), Observable_isRunnable(notifier)));
};

export { Observable_takeUntil as default };

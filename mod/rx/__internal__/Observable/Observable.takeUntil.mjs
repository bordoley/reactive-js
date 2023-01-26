/// <reference types="./Observable.takeUntil.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable$bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Observer$createWithDelegate from '../Observer/Observer.createWithDelegate.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observable$isEnumerable from './Observable.isEnumerable.mjs';
import Observable$isRunnable from './Observable.isRunnable.mjs';
import Observable$lift from './Observable.lift.mjs';
import Observable$subscribe from './Observable.subscribe.mjs';
import Observable$takeFirst from './Observable.takeFirst.mjs';

const Observable$takeUntil = (notifier) => {
    const operator = (delegate) => pipe(Observer$createWithDelegate(delegate), Disposable$bindTo(delegate), Disposable$bindTo(pipe(notifier, Observable$takeFirst(), Observable$subscribe(Observer$getScheduler(delegate)))));
    return pipe(operator, Observable$lift(Observable$isEnumerable(notifier), Observable$isRunnable(notifier)));
};

export { Observable$takeUntil as default };

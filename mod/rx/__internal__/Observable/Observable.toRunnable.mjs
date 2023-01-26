/// <reference types="./Observable.toRunnable.d.ts" />
import { pipe } from '../../../functions.mjs';
import Continuation$run from '../../../scheduling/__internal__/Continuation/Continuation.run.mjs';
import VirtualTimeScheduler$create from '../../../scheduling/__internal__/VirtualTimeScheduler/VirtualTimeScheduler.create.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Runnable$create from '../Runnable/Runnable.create.mjs';
import Runnable$empty from '../Runnable/Runnable.empty.mjs';
import Sink$notifySink from '../Sink/Sink.notifySink.mjs';
import Observable$forEach from './Observable.forEach.mjs';
import Observable$isRunnable from './Observable.isRunnable.mjs';
import Observable$subscribe from './Observable.subscribe.mjs';

const Observable$toRunnable = (options) => observable => {
    if (Observable$isRunnable(observable)) {
        return Runnable$create(sink => {
            const { schedulerFactory = VirtualTimeScheduler$create } = options !== null && options !== void 0 ? options : {};
            const scheduler = schedulerFactory();
            pipe(observable, Observable$forEach(Sink$notifySink(sink)), Observable$subscribe(scheduler), Disposable$addTo(sink));
            pipe(scheduler, Disposable$addTo(sink), Continuation$run, Disposable$dispose());
        });
    }
    else {
        return Runnable$empty();
    }
};

export { Observable$toRunnable as default };

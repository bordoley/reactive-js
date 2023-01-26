/// <reference types="./Observable.toRunnable.d.ts" />
import { pipe } from '../../../functions.mjs';
import Continuation_run from '../../../scheduling/__internal__/Continuation/Continuation.run.mjs';
import VirtualTimeScheduler_create from '../../../scheduling/__internal__/VirtualTimeScheduler/VirtualTimeScheduler.create.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Runnable_create from '../Runnable/Runnable.create.mjs';
import Runnable_empty from '../Runnable/Runnable.empty.mjs';
import Sink_notifySink from '../Sink/Sink.notifySink.mjs';
import Observable_forEach from './Observable.forEach.mjs';
import Observable_isRunnable from './Observable.isRunnable.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

const Observable_toRunnable = (options) => observable => {
    if (Observable_isRunnable(observable)) {
        return Runnable_create(sink => {
            const { schedulerFactory = VirtualTimeScheduler_create } = options !== null && options !== void 0 ? options : {};
            const scheduler = schedulerFactory();
            pipe(observable, Observable_forEach(Sink_notifySink(sink)), Observable_subscribe(scheduler), Disposable_addTo(sink));
            pipe(scheduler, Disposable_addTo(sink), Continuation_run, Disposable_dispose());
        });
    }
    else {
        return Runnable_empty();
    }
};

export { Observable_toRunnable as default };

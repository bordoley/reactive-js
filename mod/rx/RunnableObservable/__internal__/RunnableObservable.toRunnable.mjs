/// <reference types="./RunnableObservable.toRunnable.d.ts" />
import { pipe } from '../../../functions.mjs';
import Continuation_run from '../../../scheduling/Continuation/__internal__/Continuation.run.mjs';
import VirtualTimeScheduler_create from '../../../scheduling/VirtualTimeScheduler/__internal__/VirtualTimeScheduler.create.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Observable_forEach from '../../Observable/__internal__/Observable.forEach.mjs';
import Observable_subscribe from '../../Observable/__internal__/Observable.subscribe.mjs';
import Runnable_create from '../../Runnable/__internal__/Runnable.create.mjs';
import Sink_notifySink from '../../Sink/__internal__/Sink.notifySink.mjs';

const RunnableObservable_toRunnable = (options) => observable => Runnable_create(sink => {
    const { schedulerFactory = VirtualTimeScheduler_create } = options !== null && options !== void 0 ? options : {};
    const scheduler = schedulerFactory();
    pipe(observable, Observable_forEach(Sink_notifySink(sink)), Observable_subscribe(scheduler), Disposable_addTo(sink));
    pipe(scheduler, Disposable_addTo(sink), Continuation_run, Disposable_dispose());
});

export { RunnableObservable_toRunnable as default };

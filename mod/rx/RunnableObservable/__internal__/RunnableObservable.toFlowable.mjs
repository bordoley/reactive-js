/// <reference types="./RunnableObservable.toFlowable.d.ts" />
import { pipe } from '../../../functions.mjs';
import { PauseableState_running, PauseableState_paused } from '../../../scheduling.mjs';
import Pauseable_pause from '../../../scheduling/Pauseable/__internal__/Pauseable.pause.mjs';
import Pauseable_resume from '../../../scheduling/Pauseable/__internal__/Pauseable.resume.mjs';
import Scheduler_toPausableScheduler from '../../../scheduling/Scheduler/__internal__/Scheduler.toPausableScheduler.mjs';
import Flowable_createLifted from '../../../streaming/Flowable/__internal__/Flowable.createLifted.mjs';
import Disposable_add from '../../../util/Disposable/__internal__/Disposable.add.mjs';
import Disposable_bindTo from '../../../util/Disposable/__internal__/Disposable.bindTo.mjs';
import Disposable_toObservable from '../../../util/Disposable/__internal__/Disposable.toObservable.mjs';
import Observable_create from '../../Observable/__internal__/Observable.create.mjs';
import Observable_forEach from '../../Observable/__internal__/Observable.forEach.mjs';
import Observable_subscribe from '../../Observable/__internal__/Observable.subscribe.mjs';
import Observable_subscribeOn from '../../Observable/__internal__/Observable.subscribeOn.mjs';
import Observable_takeUntil from '../../Observable/__internal__/Observable.takeUntil.mjs';
import Observer_getScheduler from '../../Observer/__internal__/Observer.getScheduler.mjs';
import Sink_sourceFrom from '../../Sink/__internal__/Sink.sourceFrom.mjs';

const RunnableObservable_toFlowable = () => observable => Flowable_createLifted((modeObs) => Observable_create(observer => {
    const pauseableScheduler = pipe(observer, Observer_getScheduler, Scheduler_toPausableScheduler);
    pipe(observer, Sink_sourceFrom(pipe(observable, Observable_subscribeOn(pauseableScheduler), Observable_takeUntil(pipe(pauseableScheduler, Disposable_toObservable())))), Disposable_add(pipe(modeObs, Observable_forEach(mode => {
        switch (mode) {
            case PauseableState_paused:
                Pauseable_pause(pauseableScheduler);
                break;
            case PauseableState_running:
                Pauseable_resume(pauseableScheduler);
                break;
        }
    }), Observable_subscribe(Observer_getScheduler(observer)), Disposable_bindTo(pauseableScheduler))), Disposable_add(pauseableScheduler));
}));

export { RunnableObservable_toFlowable as default };

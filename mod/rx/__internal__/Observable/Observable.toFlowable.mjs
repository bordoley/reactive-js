/// <reference types="./Observable.toFlowable.d.ts" />
import { pipe } from '../../../functions.mjs';
import Scheduler_toPausableScheduler from '../../../scheduling/__internal__/Scheduler/Scheduler.toPausableScheduler.mjs';
import { FlowMode_resume, FlowMode_pause } from '../../../streaming.mjs';
import Flowable_createLifted from '../../../streaming/__internal__/Flowable/Flowable.createLifted.mjs';
import Disposable_add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable_bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Disposable_toObservable from '../../../util/__internal__/Disposable/Disposable.toObservable.mjs';
import Pauseable_pause from '../../../util/__internal__/Pauseable/Pauseable.pause.mjs';
import Pauseable_resume from '../../../util/__internal__/Pauseable/Pauseable.resume.mjs';
import Observer_getScheduler from '../Observer/Observer.getScheduler.mjs';
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Observable_create from './Observable.create.mjs';
import Observable_empty from './Observable.empty.mjs';
import Observable_forEach from './Observable.forEach.mjs';
import Observable_isRunnable from './Observable.isRunnable.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';
import Observable_subscribeOn from './Observable.subscribeOn.mjs';
import Observable_takeUntil from './Observable.takeUntil.mjs';

const Observable_toFlowable = () => observable => Observable_isRunnable(observable)
    ? Flowable_createLifted((modeObs) => Observable_create(observer => {
        const pausableScheduler = pipe(observer, Observer_getScheduler, Scheduler_toPausableScheduler);
        pipe(observer, Sink_sourceFrom(pipe(observable, Observable_subscribeOn(pausableScheduler), Observable_takeUntil(pipe(pausableScheduler, Disposable_toObservable())))), Disposable_add(pipe(modeObs, Observable_forEach(mode => {
            switch (mode) {
                case FlowMode_pause:
                    Pauseable_pause(pausableScheduler);
                    break;
                case FlowMode_resume:
                    Pauseable_resume(pausableScheduler);
                    break;
            }
        }), Observable_subscribe(Observer_getScheduler(observer)), Disposable_bindTo(pausableScheduler))), Disposable_add(pausableScheduler));
    }))
    : Flowable_createLifted(_ => Observable_empty());

export { Observable_toFlowable as default };

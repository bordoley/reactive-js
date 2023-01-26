/// <reference types="./Observable.toFlowable.d.ts" />
import { pipe } from '../../../functions.mjs';
import Scheduler$toPausableScheduler from '../../../scheduling/__internal__/Scheduler/Scheduler.toPausableScheduler.mjs';
import Flowable$createLifted from '../../../streaming/__internal__/Flowable/Flowable.createLifted.mjs';
import Disposable$add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable$bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Disposable$toObservable from '../../../util/__internal__/Disposable/Disposable.toObservable.mjs';
import Pauseable$pause from '../../../util/__internal__/Pauseable/Pauseable.pause.mjs';
import Pauseable$resume from '../../../util/__internal__/Pauseable/Pauseable.resume.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Sink$sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Observable$create from './Observable.create.mjs';
import Observable$empty from './Observable.empty.mjs';
import Observable$forEach from './Observable.forEach.mjs';
import Observable$isRunnable from './Observable.isRunnable.mjs';
import Observable$subscribe from './Observable.subscribe.mjs';
import Observable$subscribeOn from './Observable.subscribeOn.mjs';
import Observable$takeUntil from './Observable.takeUntil.mjs';

const Observable$toFlowable = () => observable => Observable$isRunnable(observable)
    ? Flowable$createLifted((modeObs) => Observable$create(observer => {
        const pausableScheduler = pipe(observer, Observer$getScheduler, Scheduler$toPausableScheduler);
        pipe(observer, Sink$sourceFrom(pipe(observable, Observable$subscribeOn(pausableScheduler), Observable$takeUntil(pipe(pausableScheduler, Disposable$toObservable())))), Disposable$add(pipe(modeObs, Observable$forEach(mode => {
            switch (mode) {
                case "pause":
                    Pauseable$pause(pausableScheduler);
                    break;
                case "resume":
                    Pauseable$resume(pausableScheduler);
                    break;
            }
        }), Observable$subscribe(Observer$getScheduler(observer)), Disposable$bindTo(pausableScheduler))), Disposable$add(pausableScheduler));
    }))
    : Flowable$createLifted(_ => Observable$empty());

export { Observable$toFlowable as default };

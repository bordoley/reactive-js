/// <reference types="./ObservableLike.toFlowable.d.ts" />
import { pipe } from '../../../functions.mjs';
import { toPausableScheduler } from '../../../scheduling/SchedulerLike.mjs';
import FlowableLike__createLifted from '../../../streaming/__internal__/FlowableLike/FlowableLike.createLifted.mjs';
import { add, bindTo } from '../../../util/DisposableLike.mjs';
import { resume, pause } from '../../../util/PauseableLike.mjs';
import DisposableLike__toObservable from '../../../util/__internal__/DisposableLike/DisposableLike.toObservable.mjs';
import { getScheduler } from '../../ObserverLike.mjs';
import { sourceFrom } from '../../SinkLike.mjs';
import ObservableLike__create from './ObservableLike.create.mjs';
import ObservableLike__empty from './ObservableLike.empty.mjs';
import ObservableLike__forEach from './ObservableLike.forEach.mjs';
import ObservableLike__isRunnable from './ObservableLike.isRunnable.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';
import ObservableLike__subscribeOn from './ObservableLike.subscribeOn.mjs';
import ObservableLike__takeUntil from './ObservableLike.takeUntil.mjs';

const ObservableLike__toFlowable = () => observable => ObservableLike__isRunnable(observable)
    ? FlowableLike__createLifted((modeObs) => ObservableLike__create(observer => {
        const pausableScheduler = pipe(observer, getScheduler, toPausableScheduler);
        pipe(observer, sourceFrom(pipe(observable, ObservableLike__subscribeOn(pausableScheduler), ObservableLike__takeUntil(pipe(pausableScheduler, DisposableLike__toObservable())))), add(pipe(modeObs, ObservableLike__forEach(mode => {
            switch (mode) {
                case "pause":
                    pause(pausableScheduler);
                    break;
                case "resume":
                    resume(pausableScheduler);
                    break;
            }
        }), ObservableLike__subscribe(getScheduler(observer)), bindTo(pausableScheduler))), add(pausableScheduler));
    }))
    : FlowableLike__createLifted(_ => ObservableLike__empty());

export { ObservableLike__toFlowable as default };

/// <reference types="./ObservableLike.toRunnable.d.ts" />
import { pipe } from '../../../functions.mjs';
import ContinuationLike__run from '../../../scheduling/__internal__/ContinuationLike/ContinuationLike.run.mjs';
import VirtualTimeSchedulerLike__create from '../../../scheduling/__internal__/VirtualTimeSchedulerLike/VirtualTimeSchedulerLike.create.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import RunnableLike__create from '../RunnableLike/RunnableLike.create.mjs';
import RunnableLike__empty from '../RunnableLike/RunnableLike.empty.mjs';
import SinkLike__notifySink from '../SinkLike/SinkLike.notifySink.mjs';
import ObservableLike__forEach from './ObservableLike.forEach.mjs';
import ObservableLike__isRunnable from './ObservableLike.isRunnable.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';

const ObservableLike__toRunnable = (options) => observable => {
    if (ObservableLike__isRunnable(observable)) {
        return RunnableLike__create(sink => {
            const { schedulerFactory = VirtualTimeSchedulerLike__create } = options !== null && options !== void 0 ? options : {};
            const scheduler = schedulerFactory();
            pipe(observable, ObservableLike__forEach(SinkLike__notifySink(sink)), ObservableLike__subscribe(scheduler), DisposableLike__addTo(sink));
            pipe(scheduler, DisposableLike__addTo(sink), ContinuationLike__run, DisposableLike__dispose());
        });
    }
    else {
        return RunnableLike__empty();
    }
};

export { ObservableLike__toRunnable as default };

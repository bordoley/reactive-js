/// <reference types="./ObservableLike.empty.d.ts" />
import { pipe, pipeLazy } from '../../../functions.mjs';
import { hasDelay } from '../../../scheduling/__internal__/SchedulerLike.options.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import EnumerableObservableLike__create from '../EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import ObserverLike__schedule from '../ObserverLike/ObserverLike.schedule.mjs';
import RunnableObservableLike__create from '../RunnableObservableLike/RunnableObservableLike.create.mjs';

const ObservableLike__empty = (options) => hasDelay(options)
    ? RunnableObservableLike__create(observer => {
        pipe(observer, ObserverLike__schedule(pipeLazy(observer, DisposableLike__dispose()), options));
    })
    : EnumerableObservableLike__create(sink => {
        pipe(sink, DisposableLike__dispose());
    });

export { ObservableLike__empty as default };

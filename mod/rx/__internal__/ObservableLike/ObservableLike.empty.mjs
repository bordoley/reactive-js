/// <reference types="./ObservableLike.empty.d.ts" />
import { hasDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { pipe, pipeLazy } from '../../../functions.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import { schedule } from '../../ObserverLike.mjs';
import EnumerableObservableLike__create from '../EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import RunnableObservableLike__create from '../RunnableObservableLike/RunnableObservableLike.create.mjs';

const ObservableLike__empty = (options) => hasDelay(options)
    ? RunnableObservableLike__create(observer => {
        pipe(observer, schedule(pipeLazy(observer, DisposableLike__dispose()), options));
    })
    : EnumerableObservableLike__create(sink => {
        pipe(sink, DisposableLike__dispose());
    });

export { ObservableLike__empty as default };

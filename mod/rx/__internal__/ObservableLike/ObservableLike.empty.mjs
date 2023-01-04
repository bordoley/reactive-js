/// <reference types="./ObservableLike.empty.d.ts" />
import { hasDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { pipe, pipeLazy } from '../../../functions.mjs';
import { dispose } from '../../../util/DisposableLike.mjs';
import { schedule } from '../../ObserverLike.mjs';
import EnumerableObservableLike__create from '../EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import RunnableObservableLike__create from '../RunnableObservableLike/RunnableObservableLike.create.mjs';

const ObservableLike__empty = (options) => hasDelay(options)
    ? RunnableObservableLike__create(observer => {
        pipe(observer, schedule(pipeLazy(observer, dispose()), options));
    })
    : EnumerableObservableLike__create(sink => {
        pipe(sink, dispose());
    });

export { ObservableLike__empty as default };

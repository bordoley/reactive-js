/// <reference types="./Observable.empty.d.ts" />
import { pipe, pipeLazy } from '../../../functions.mjs';
import { hasDelay } from '../../../scheduling/__internal__/Scheduler.options.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import EnumerableObservable$create from '../EnumerableObservable/EnumerableObservable.create.mjs';
import Observer$schedule from '../Observer/Observer.schedule.mjs';
import RunnableObservable$create from '../RunnableObservable/RunnableObservable.create.mjs';

const Observable$empty = (options) => hasDelay(options)
    ? RunnableObservable$create(observer => {
        pipe(observer, Observer$schedule(pipeLazy(observer, Disposable$dispose()), options));
    })
    : EnumerableObservable$create(sink => {
        pipe(sink, Disposable$dispose());
    });

export { Observable$empty as default };

/// <reference types="./Observable.empty.d.ts" />
import { pipe, pipeLazy } from '../../../functions.mjs';
import { hasDelay } from '../../../scheduling/__internal__/Scheduler.options.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import EnumerableObservable_create from '../../EnumerableObservable/__internal__/EnumerableObservable.create.mjs';
import Observer_schedule from '../../Observer/__internal__/Observer.schedule.mjs';
import RunnableObservable_create from '../../RunnableObservable/__internal__/RunnableObservable.create.mjs';

const Observable_empty = (options) => hasDelay(options)
    ? RunnableObservable_create(observer => {
        pipe(observer, Observer_schedule(pipeLazy(observer, Disposable_dispose()), options));
    })
    : EnumerableObservable_create(sink => {
        pipe(sink, Disposable_dispose());
    });

export { Observable_empty as default };

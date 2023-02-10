/// <reference types="./Observable.mergeObservables.d.ts" />
import { pipe, getLength } from '../../../functions.mjs';
import Observable_create from './Observable.create.mjs';
import Sink_sourceFrom from '../../Sink/__internal__/Sink.sourceFrom.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_onComplete from '../../../util/Disposable/__internal__/Disposable.onComplete.mjs';
import EnumerableObservable_create from '../../EnumerableObservable/__internal__/EnumerableObservable.create.mjs';
import Observer_createWithDelegate from '../../Observer/__internal__/Observer.createWithDelegate.mjs';
import RunnableObservable_create from '../../RunnableObservable/__internal__/RunnableObservable.create.mjs';
import Observable_allAreEnumerable from './Observable.allAreEnumerable.mjs';
import Observable_allAreRunnable from './Observable.allAreRunnable.mjs';

const Observable_mergeObservables = /*@__PURE__*/ (() => {
    const MergeObserverCtx_completedCount = Symbol("MergeObserverCtx_completedCount");
    const createMergeObserver = (delegate, count, ctx) => pipe(Observer_createWithDelegate(delegate), Disposable_addTo(delegate), Disposable_onComplete(() => {
        ctx[MergeObserverCtx_completedCount]++;
        if (ctx[MergeObserverCtx_completedCount] >= count) {
            pipe(delegate, Disposable_dispose());
        }
    }));
    return (observables) => {
        const onSink = (observer) => {
            const count = getLength(observables);
            const ctx = { [MergeObserverCtx_completedCount]: 0 };
            for (const observable of observables) {
                pipe(createMergeObserver(observer, count, ctx), Sink_sourceFrom(observable));
            }
        };
        const isEnumerable = Observable_allAreEnumerable(observables);
        const isRunnable = Observable_allAreRunnable(observables);
        return isEnumerable
            ? EnumerableObservable_create(onSink)
            : isRunnable
                ? RunnableObservable_create(onSink)
                : Observable_create(onSink);
    };
})();

export { Observable_mergeObservables as default };

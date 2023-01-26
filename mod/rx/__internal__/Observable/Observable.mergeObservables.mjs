/// <reference types="./Observable.mergeObservables.d.ts" />
import { pipe, getLength } from '../../../functions.mjs';
import Observable_create from './Observable.create.mjs';
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import EnumerableObservable_create from '../EnumerableObservable/EnumerableObservable.create.mjs';
import Observer_createWithDelegate from '../Observer/Observer.createWithDelegate.mjs';
import RunnableObservable_create from '../RunnableObservable/RunnableObservable.create.mjs';
import Observable_allAreEnumerable from './Observable.allAreEnumerable.mjs';
import Observable_allAreRunnable from './Observable.allAreRunnable.mjs';

const Observable_mergeObservables = /*@__PURE__*/ (() => {
    const createMergeObserver = (delegate, count, ctx) => pipe(Observer_createWithDelegate(delegate), Disposable_addTo(delegate), Disposable_onComplete(() => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
            pipe(delegate, Disposable_dispose());
        }
    }));
    return (observables) => {
        const onSink = (observer) => {
            const count = getLength(observables);
            const ctx = { completedCount: 0 };
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

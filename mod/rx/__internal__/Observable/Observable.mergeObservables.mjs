/// <reference types="./Observable.mergeObservables.d.ts" />
import { pipe, getLength } from '../../../functions.mjs';
import Observable$create from './Observable.create.mjs';
import Sink$sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import EnumerableObservable$create from '../EnumerableObservable/EnumerableObservable.create.mjs';
import Observer$createWithDelegate from '../Observer/Observer.createWithDelegate.mjs';
import RunnableObservable$create from '../RunnableObservable/RunnableObservable.create.mjs';
import Observable$allAreEnumerable from './Observable.allAreEnumerable.mjs';
import Observable$allAreRunnable from './Observable.allAreRunnable.mjs';

const Observable$mergeObservables = /*@__PURE__*/ (() => {
    const createMergeObserver = (delegate, count, ctx) => pipe(Observer$createWithDelegate(delegate), Disposable$addTo(delegate), Disposable$onComplete(() => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
            pipe(delegate, Disposable$dispose());
        }
    }));
    return (observables) => {
        const onSink = (observer) => {
            const count = getLength(observables);
            const ctx = { completedCount: 0 };
            for (const observable of observables) {
                pipe(createMergeObserver(observer, count, ctx), Sink$sourceFrom(observable));
            }
        };
        const isEnumerable = Observable$allAreEnumerable(observables);
        const isRunnable = Observable$allAreRunnable(observables);
        return isEnumerable
            ? EnumerableObservable$create(onSink)
            : isRunnable
                ? RunnableObservable$create(onSink)
                : Observable$create(onSink);
    };
})();

export { Observable$mergeObservables as default };

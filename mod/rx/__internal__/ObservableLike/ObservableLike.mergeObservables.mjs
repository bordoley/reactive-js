/// <reference types="./ObservableLike.mergeObservables.d.ts" />
import { createEnumerableObservable, createRunnableObservable, createObservable } from '../../../__internal__/rx/ObservableLike.create.mjs';
import { pipe, getLength } from '../../../functions.mjs';
import sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';
import addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import createWithDelegate from '../ObserverLike/ObserverLike.createWithDelegate.mjs';
import allAreEnumerable from './ObservableLike.allAreEnumerable.mjs';
import allAreRunnable from './ObservableLike.allAreRunnable.mjs';

const mergeAll = /*@__PURE__*/ (() => {
    const createMergeObserver = (delegate, count, ctx) => pipe(createWithDelegate(delegate), addTo(delegate), onComplete(() => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
            pipe(delegate, dispose());
        }
    }));
    return (observables) => {
        const onSink = (observer) => {
            const count = getLength(observables);
            const ctx = { completedCount: 0 };
            for (const observable of observables) {
                pipe(createMergeObserver(observer, count, ctx), sourceFrom(observable));
            }
        };
        const isEnumerable = allAreEnumerable(observables);
        const isRunnable = allAreRunnable(observables);
        return isEnumerable
            ? createEnumerableObservable(onSink)
            : isRunnable
                ? createRunnableObservable(onSink)
                : createObservable(onSink);
    };
})();

export { mergeAll as default };

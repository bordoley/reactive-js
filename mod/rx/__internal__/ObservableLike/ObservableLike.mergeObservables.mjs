/// <reference types="./ObservableLike.mergeObservables.d.ts" />
import { pipe, getLength } from '../../../functions.mjs';
import create$2 from './ObservableLike.create.mjs';
import sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';
import addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import create from '../EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import createWithDelegate from '../ObserverLike/ObserverLike.createWithDelegate.mjs';
import create$1 from '../RunnableObservableLike/RunnableObservableLike.create.mjs';
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
            ? create(onSink)
            : isRunnable
                ? create$1(onSink)
                : create$2(onSink);
    };
})();

export { mergeAll as default };

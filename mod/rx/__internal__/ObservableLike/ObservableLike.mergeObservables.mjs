/// <reference types="./ObservableLike.mergeObservables.d.ts" />
import { pipe, getLength } from '../../../functions.mjs';
import ObservableLike__create from './ObservableLike.create.mjs';
import SinkLike__sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import EnumerableObservableLike__create from '../EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import ObserverLike__createWithDelegate from '../ObserverLike/ObserverLike.createWithDelegate.mjs';
import RunnableObservableLike__create from '../RunnableObservableLike/RunnableObservableLike.create.mjs';
import ObservableLike__allAreEnumerable from './ObservableLike.allAreEnumerable.mjs';
import ObservableLike__allAreRunnable from './ObservableLike.allAreRunnable.mjs';

const ObservableLike__mergeObservables = /*@__PURE__*/ (() => {
    const createMergeObserver = (delegate, count, ctx) => pipe(ObserverLike__createWithDelegate(delegate), DisposableLike__addTo(delegate), DisposableLike__onComplete(() => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
            pipe(delegate, DisposableLike__dispose());
        }
    }));
    return (observables) => {
        const onSink = (observer) => {
            const count = getLength(observables);
            const ctx = { completedCount: 0 };
            for (const observable of observables) {
                pipe(createMergeObserver(observer, count, ctx), SinkLike__sourceFrom(observable));
            }
        };
        const isEnumerable = ObservableLike__allAreEnumerable(observables);
        const isRunnable = ObservableLike__allAreRunnable(observables);
        return isEnumerable
            ? EnumerableObservableLike__create(onSink)
            : isRunnable
                ? RunnableObservableLike__create(onSink)
                : ObservableLike__create(onSink);
    };
})();

export { ObservableLike__mergeObservables as default };

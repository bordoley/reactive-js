/// <reference types="./ObservableLike.operators.d.ts" />
import { map, every } from '../../containers/ReadonlyArrayLike.mjs';
import { compose, isTrue, pipe, getLength } from '../../functions.mjs';
import { sourceFrom } from '../../rx/SinkLike.mjs';
import isEnumerable from '../../rx/__internal__/ObservableLike/ObservableLike.isEnumerable.mjs';
import isRunnable from '../../rx/__internal__/ObservableLike/ObservableLike.isRunnable.mjs';
import createWithDelegate from '../../rx/__internal__/ObserverLike/ObserverLike.createWithDelegate.mjs';
import addTo from '../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import dispose from '../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import onComplete from '../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import { createEnumerableObservable, createRunnableObservable, createObservable } from './ObservableLike.create.mjs';

const allAreEnumerable = compose(map(isEnumerable), every(isTrue));
const allAreRunnable = compose(map(isRunnable), every(isTrue));
const mergeImpl = /*@__PURE__*/ (() => {
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
const merge = (...observables) => mergeImpl(observables);
const mergeT = {
    concat: merge,
};

export { allAreEnumerable, allAreRunnable, merge, mergeImpl, mergeT };

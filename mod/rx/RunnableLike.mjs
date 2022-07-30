/// <reference types="./RunnableLike.d.ts" />
import { reactive, createDistinctUntilChangedOperator, createForEachOperator, createKeepOperator, createMapOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator } from '../__internal__/containers/StatefulContainerLikeInternal.mjs';
import { dispose, bindTo, addTo } from '../__internal__/util/DisposableLikeInternal.mjs';
import { Object_init, init, mixWith, createObjectFactory } from '../__internal__/util/Object.mjs';
import { delegatingSinkMixin, DelegatingSink_delegate, createDelegatingSink, distinctUntilChangedSinkMixin, forEachSinkMixin, keepSinkMixin, mapSinkMixin, createSink, scanSinkMixin, skipFirstSinkMixin, takeFirstSinkMixin, takeLastSinkMixin, takeWhileSinkMixin } from '../__internal__/util/SinkLikeMixin.mjs';
import { toRunnable } from '../containers/ReadonlyArrayLike.mjs';
import { pipe, pipeUnsafe, newInstance, pipeLazy, isSome, raise } from '../functions.mjs';
import { ReactiveContainerLike_sinkInto, emptyRunnableT } from '../rx.mjs';
import { SinkLike_notify, DisposableLike_error } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { sourceFrom } from './ReactiveContainerLike.mjs';

const lift = /*@__PURE__*/ (() => {
    class LiftedRunnable {
        constructor(src, operators) {
            this.src = src;
            this.operators = operators;
        }
        [ReactiveContainerLike_sinkInto](sink) {
            pipe(pipeUnsafe(sink, ...this.operators), sourceFrom(this.src), dispose());
        }
    }
    return (operator) => (runnable) => {
        const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;
        const allFunctions = runnable instanceof LiftedRunnable
            ? [operator, ...runnable.operators]
            : [operator];
        return newInstance(LiftedRunnable, src, allFunctions);
    };
})();
const liftT = {
    lift,
    variance: reactive,
};
const concat = (...runnables) => pipe(runnables, toRunnable(), concatAll());
const concatT = {
    concat,
};
const concatAll = /*@__PURE__*/ (() => {
    const typedDelegatingSinkMixin = delegatingSinkMixin();
    return pipeLazy({
        [Object_init](delegate) {
            init(typedDelegatingSinkMixin, this, delegate);
            pipe(this, bindTo(delegate));
        },
        [SinkLike_notify](next) {
            const { [DelegatingSink_delegate]: delegate } = this;
            pipe(delegate, createDelegatingSink, addTo(this), sourceFrom(next), dispose());
        },
    }, mixWith(typedDelegatingSinkMixin), createObjectFactory(), lift);
})();
const concatAllT = {
    concatAll,
};
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDistinctUntilChangedSinkMixin = distinctUntilChangedSinkMixin();
    return pipe(typedDistinctUntilChangedSinkMixin, createObjectFactory(), createDistinctUntilChangedOperator(liftT));
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const forEach = /*@__PURE__*/ (() => {
    const typedForEachSinkMixin = forEachSinkMixin();
    return pipe(typedForEachSinkMixin, createObjectFactory(), createForEachOperator(liftT));
})();
const forEachT = { forEach };
const keep = /*@__PURE__*/ (() => {
    const typedKeepSinkMixin = keepSinkMixin();
    return pipe(typedKeepSinkMixin, createObjectFactory(), createKeepOperator(liftT));
})();
const keepT = { keep };
const map = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = mapSinkMixin();
    return pipe(typedMapSinkMixin, createObjectFactory(), createMapOperator(liftT));
})();
const mapT = { map };
const run = () => (runnable) => pipe(createSink(), sourceFrom(runnable), dispose(), ({ [DisposableLike_error]: error }) => {
    if (isSome(error)) {
        raise(error.cause);
    }
});
const scan = /*@__PURE__*/ (() => {
    const typedScanSinkMixin = scanSinkMixin();
    return pipe(typedScanSinkMixin, createObjectFactory(), createScanOperator(liftT));
})();
const scanT = { scan };
const skipFirst = /*@__PURE__*/ (() => {
    const typedSkipFirstSinkMixin = skipFirstSinkMixin();
    return pipe(typedSkipFirstSinkMixin, createObjectFactory(), createSkipFirstOperator(liftT));
})();
const skipFirstT = { skipFirst };
const takeFirst = /*@__PURE__*/ (() => {
    const typedTakeFirstSinkMixin = takeFirstSinkMixin();
    return pipe(typedTakeFirstSinkMixin, createObjectFactory(), createTakeFirstOperator({
        ...liftT,
        ...emptyRunnableT,
    }));
})();
const takeFirstT = { takeFirst };
const takeLast = /*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = takeLastSinkMixin(toRunnable());
    return pipe(typedTakeLastSinkMixin, createObjectFactory(), createTakeLastOperator({
        ...liftT,
        ...emptyRunnableT,
    }));
})();
const takeLastT = { takeLast };
const takeWhile = /*@__PURE__*/ (() => {
    const typedTakeWhileSinkMixin = takeWhileSinkMixin();
    return pipe(typedTakeWhileSinkMixin, createObjectFactory(), createTakeWhileOperator(liftT));
})();
const takeWhileT = { takeWhile };
const toReadonlyArray = () => (runnable) => {
    const result = [];
    pipe(runnable, forEach(x => result.push(x)), run());
    return result;
};
const toReadonlyArrayT = {
    toReadonlyArray,
};

export { concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, keep, keepT, map, mapT, run, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, toReadonlyArray, toReadonlyArrayT };

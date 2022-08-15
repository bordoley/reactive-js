/// <reference types="./RunnableLike.d.ts" />
import { createRepeatOperator } from '../__internal__/containers/__internal__ContainerLike.mjs';
import { reactive, createBufferOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createForEachOperator, createKeepOperator, createMapOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from '../__internal__/containers/__internal__StatefulContainerLike.mjs';
import { createOnSink } from '../__internal__/rx/__internal__ReactiveContainerLike.mjs';
import { createInstanceFactory, clazz, __extends, init } from '../__internal__/util/__internal__Objects.mjs';
import { bufferSinkMixin, catchErrorSinkMixin, delegatingSinkMixin, DelegatingSink_delegate, createDelegatingSink, decodeWithCharsetSinkMixin, distinctUntilChangedSinkMixin, everySatisfySinkMixin, forEachSinkMixin, keepSinkMixin, mapSinkMixin, pairwiseSinkMixin, reduceSinkMixin, createSink, scanSinkMixin, skipFirstSinkMixin, someSatisfySinkMixin, takeFirstSinkMixin, takeLastSinkMixin, takeWhileSinkMixin, throwIfEmptySinkMixin } from '../__internal__/util/__internal__Sinks.mjs';
import { toRunnable as toRunnable$1 } from '../containers/ReadonlyArrayLike.mjs';
import { pipeUnsafe, newInstance, pipe, partial, pipeLazy, none, returns, isSome, raise, identity } from '../functions.mjs';
import { R as ReactiveContainerLike_sinkInto, K as bindTo, h as addTo, f as dispose, j as createRunnable, i as isDisposed } from '../DisposableLike-82e2991c.mjs';
import { SinkLike_notify, DisposableLike_exception } from '../util.mjs';
import { sourceFrom } from '../util/SinkLike.mjs';

const lift = /*@__PURE__*/ (() => {
    class LiftedRunnable {
        constructor(src, operators) {
            this.src = src;
            this.operators = operators;
        }
        [ReactiveContainerLike_sinkInto](sink) {
            pipeUnsafe(sink, ...this.operators, sourceFrom(this.src));
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
const buffer = /*@__PURE__*/ (() => {
    const typedBufferSinkMixin = bufferSinkMixin(toRunnable$1());
    return pipe(createInstanceFactory(typedBufferSinkMixin), createBufferOperator(liftT));
})();
const bufferT = { buffer };
const catchError = 
/*@__PURE__*/ (() => {
    const createCatchErrorObserver = (() => createInstanceFactory(catchErrorSinkMixin()))();
    return (errorHandler => pipe(createCatchErrorObserver, partial(errorHandler), lift));
})();
const catchErrorT = { catchError };
const concat = (...runnables) => pipe(runnables, toRunnable$1(), concatAll());
const concatT = {
    concat,
};
const concatAll = /*@__PURE__*/ (() => {
    const typedDelegatingSinkMixin = delegatingSinkMixin();
    return pipeLazy(createInstanceFactory(clazz(__extends(typedDelegatingSinkMixin), function RunnableConcatAll(instance, delegate) {
        init(typedDelegatingSinkMixin, instance, delegate);
        pipe(instance, bindTo(delegate));
        return instance;
    }, {}, {
        [SinkLike_notify](next) {
            const { [DelegatingSink_delegate]: delegate } = this;
            pipe(createDelegatingSink(delegate), addTo(this), sourceFrom(next), dispose());
        },
    })), lift);
})();
const concatAllT = {
    concatAll,
};
const decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = decodeWithCharsetSinkMixin(toRunnable$1());
    return pipe(createInstanceFactory(typedDecodeWithCharsetMixin), createDecodeWithCharsetOperator(liftT));
})();
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDistinctUntilChangedSinkMixin = distinctUntilChangedSinkMixin();
    return pipe(createInstanceFactory(typedDistinctUntilChangedSinkMixin), createDistinctUntilChangedOperator(liftT));
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const everySatisfy = 
/*@__PURE__*/ (() => {
    const typedEverySatisfySinkMixin = everySatisfySinkMixin(toRunnable$1());
    return (predicate) => pipe(createInstanceFactory(typedEverySatisfySinkMixin), partial(predicate), lift);
})();
const everySatisfyT = { everySatisfy };
const first = () => src => {
    let result = none;
    pipe(src, takeFirst(), forEach(next => {
        result = next;
    }), run());
    return result;
};
const forEach = /*@__PURE__*/ (() => {
    const typedForEachSinkMixin = forEachSinkMixin();
    return pipe(createInstanceFactory(typedForEachSinkMixin), createForEachOperator(liftT));
})();
const forEachT = { forEach };
const keep = /*@__PURE__*/ (() => {
    const typedKeepSinkMixin = keepSinkMixin();
    return pipe(createInstanceFactory(typedKeepSinkMixin), createKeepOperator(liftT));
})();
const keepT = { keep };
const last = () => src => {
    let result = none;
    pipe(src, forEach(next => {
        result = next;
    }), run());
    return result;
};
const map = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = mapSinkMixin();
    return pipe(createInstanceFactory(typedMapSinkMixin), createMapOperator(liftT));
})();
const mapT = { map };
const onRun = (f) => (runnable) => {
    return createOnSink(createRunnable, runnable, f);
};
const pairwise = /*@__PURE__*/ (() => {
    const typedPairwiseSinkMixin = pairwiseSinkMixin();
    return pipe(createInstanceFactory(typedPairwiseSinkMixin), lift, returns);
})();
const pairwiseT = { pairwise };
const reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = reduceSinkMixin(toRunnable$1());
    return pipe(createInstanceFactory(typedReduceSinkMixin), createReduceOperator(liftT));
})();
const reduceT = { reduce };
const repeat = /*@__PURE__*/ (() => {
    return createRepeatOperator((delegate, predicate) => createRunnable(sink => {
        let count = 0;
        do {
            pipe(createDelegatingSink(sink), addTo(sink), sourceFrom(delegate), dispose());
            count++;
        } while (!isDisposed(sink) && predicate(count));
    }));
})();
const repeatT = { repeat };
const run = () => (runnable) => pipe(createSink(), sourceFrom(runnable), dispose(), ({ [DisposableLike_exception]: error }) => {
    if (isSome(error)) {
        raise(error.cause);
    }
});
const scan = /*@__PURE__*/ (() => {
    const typedScanSinkMixin = scanSinkMixin();
    return pipe(createInstanceFactory(typedScanSinkMixin), createScanOperator(liftT));
})();
const scanT = { scan };
const skipFirst = /*@__PURE__*/ (() => {
    const typedSkipFirstSinkMixin = skipFirstSinkMixin();
    return pipe(createInstanceFactory(typedSkipFirstSinkMixin), createSkipFirstOperator(liftT));
})();
const skipFirstT = { skipFirst };
const someSatisfy = 
/*@__PURE__*/ (() => {
    const typedSomeSatisfySinkMixin = someSatisfySinkMixin(toRunnable$1());
    return (predicate) => pipe(createInstanceFactory(typedSomeSatisfySinkMixin), partial(predicate), lift);
})();
const someSatisfyT = { someSatisfy };
const takeFirst = /*@__PURE__*/ (() => {
    const typedTakeFirstSinkMixin = takeFirstSinkMixin();
    return pipe(createInstanceFactory(typedTakeFirstSinkMixin), createTakeFirstOperator({
        ...liftT,
    }));
})();
const takeFirstT = { takeFirst };
const takeLast = /*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = takeLastSinkMixin(toRunnable$1());
    return pipe(createInstanceFactory(typedTakeLastSinkMixin), createTakeLastOperator({
        ...liftT,
    }));
})();
const takeLastT = { takeLast };
const takeWhile = /*@__PURE__*/ (() => {
    const typedTakeWhileSinkMixin = takeWhileSinkMixin();
    return pipe(createInstanceFactory(typedTakeWhileSinkMixin), createTakeWhileOperator(liftT));
})();
const takeWhileT = { takeWhile };
const throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedThrowIfEmptySinkMixin = throwIfEmptySinkMixin();
    return pipe(createInstanceFactory(typedThrowIfEmptySinkMixin), createThrowIfEmptyOperator(liftT));
})();
const throwIfEmptyT = {
    throwIfEmpty,
};
const toReadonlyArray = () => (runnable) => {
    const result = [];
    pipe(runnable, forEach(x => result.push(x)), run());
    return result;
};
const toReadonlyArrayT = {
    toReadonlyArray,
};
const toRunnable = returns(identity);
const toRunnableT = {
    toRunnable,
};

export { buffer, bufferT, catchError, catchErrorT, concat, concatAll, concatAllT, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, everySatisfy, everySatisfyT, first, forEach, forEachT, keep, keepT, last, map, mapT, onRun, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, run, scan, scanT, skipFirst, skipFirstT, someSatisfy, someSatisfyT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT };

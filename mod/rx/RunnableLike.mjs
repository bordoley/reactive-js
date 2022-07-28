/// <reference types="./RunnableLike.d.ts" />
import { reactive, createSkipFirstOperator, createTakeFirstOperator, createTakeWhileOperator } from '../__internal__/containers/StatefulContainerLikeInternal.mjs';
import { createObjectFactory } from '../__internal__/util/Object.mjs';
import { createDelegatingSink, distinctUntilChangedSinkMixin, keepSinkMixin, mapSinkMixin, onNotifySinkMixin, createSink, scanSinkMixin, skipFirstSinkMixin, takeFirstSinkMixin, takeLastSinkMixin, TakeLastSink_last, takeWhileSinkMixin } from '../__internal__/util/SinkLikeMixin.mjs';
import { toRunnable } from '../containers/ReadonlyArrayLike.mjs';
import { pipe, pipeUnsafe, newInstance, getLength, strictEquality, isSome, raise } from '../functions.mjs';
import { ReactiveContainerLike_sinkInto, createRunnable, emptyRunnableT, emptyRunnable } from '../rx.mjs';
import { DisposableLike_error } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { sourceFrom, sinkInto } from './ReactiveContainerLike.mjs';
import { dispose, isDisposed, addTo, onComplete } from '../__internal__/util/DisposableLikeInternal.mjs';

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
const concat = (...runnables) => createRunnable((sink) => {
    const runnablesLength = getLength(runnables);
    for (let i = 0; i < runnablesLength && !isDisposed(sink); i++) {
        pipe(createDelegatingSink(sink), addTo(sink), sourceFrom(runnables[i]), dispose());
    }
});
const concatT = {
    concat,
};
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDistinctUntilChangedSinkMixin = distinctUntilChangedSinkMixin();
    const createInstance = pipe(typedDistinctUntilChangedSinkMixin, createObjectFactory());
    return (options) => {
        const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
        const operator = (delegate) => createInstance(delegate, equality);
        return lift(operator);
    };
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const keep = /*@__PURE__*/ (() => {
    const typedKeepSinkMixin = keepSinkMixin();
    const createInstance = pipe(typedKeepSinkMixin, createObjectFactory());
    return (mapper) => {
        const operator = (delegate) => createInstance(delegate, mapper);
        return lift(operator);
    };
})();
const keepT = { keep };
const map = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = mapSinkMixin();
    const createInstance = pipe(typedMapSinkMixin, createObjectFactory());
    return (mapper) => {
        const operator = (delegate) => createInstance(delegate, mapper);
        return lift(operator);
    };
})();
const mapT = { map };
const onNotify = /*@__PURE__*/ (() => {
    const typedOnNotifySinkMixin = onNotifySinkMixin();
    const createInstance = pipe(typedOnNotifySinkMixin, createObjectFactory());
    return (onNotify) => {
        const operator = (delegate) => createInstance(delegate, onNotify);
        return lift(operator);
    };
})();
const run = () => (runnable) => pipe(createSink(), sourceFrom(runnable), dispose(), ({ [DisposableLike_error]: error }) => {
    if (isSome(error)) {
        raise(error.cause);
    }
});
const scan = /*@__PURE__*/ (() => {
    const typedScanSinkMixin = scanSinkMixin();
    const createInstance = pipe(typedScanSinkMixin, createObjectFactory());
    return (reducer, initialValue) => {
        const operator = (delegate) => createInstance(delegate, reducer, initialValue);
        return lift(operator);
    };
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
    const typedTakeLastSinkMixin = takeLastSinkMixin();
    const createSink = pipe(typedTakeLastSinkMixin, createObjectFactory());
    return (options = {}) => {
        const { count = 1 } = options;
        const operator = lift((delegate) => {
            const sink = pipe(createSink(delegate, count), addTo(delegate), onComplete(() => {
                pipe(sink[TakeLastSink_last], toRunnable(), sinkInto(delegate));
            }));
            return sink;
        });
        return (source) => count > 0 ? pipe(source, operator) : emptyRunnable();
    };
})();
const takeLastT = { takeLast };
const takeWhile = /*@__PURE__*/ (() => {
    const typedTakeWhileSinkMixin = takeWhileSinkMixin();
    return pipe(typedTakeWhileSinkMixin, createObjectFactory(), createTakeWhileOperator(liftT));
})();
const takeWhileT = { takeWhile };
const toReadonlyArray = () => (runnable) => {
    const result = [];
    pipe(runnable, onNotify(x => result.push(x)), run());
    return result;
};
const toReadonlyArrayT = {
    toReadonlyArray,
};

export { concat, concatT, distinctUntilChanged, distinctUntilChangedT, keep, keepT, map, mapT, onNotify, run, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, toReadonlyArray, toReadonlyArrayT };

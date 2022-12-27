/// <reference types="./RunnableLike.d.ts" />
import { createInstanceFactory, mixin as mixin$1, include, init } from '../__internal__/mixins.mjs';
import { createOnSink } from '../__internal__/rx/ReactiveContainerLike.createOnSink.mjs';
import { toRunnable as toRunnable$1 } from '../containers/ReadonlyArrayLike.mjs';
import repeat$1 from '../containers/__internal__/ContainerLike/ContainerLike.repeat.mjs';
import buffer$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.buffer.mjs';
import decodeWithCharset$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.decodeWithCharset.mjs';
import distinctUntilChanged$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged.mjs';
import forEach$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach.mjs';
import keep$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep.mjs';
import map$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map.mjs';
import reduce$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.reduce.mjs';
import scan$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan.mjs';
import skipFirst$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.skipFirst.mjs';
import takeFirst$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeFirst.mjs';
import takeLast$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast.mjs';
import takeWhile$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile.mjs';
import throwIfEmpty$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.throwIfEmpty.mjs';
import { reactive } from '../containers/__internal__/containers.internal.mjs';
import { pipeUnsafe, newInstance, pipe, partial, pipeLazy, none, ignore, returns, isSome, raise, identity } from '../functions.mjs';
import { ReactiveContainerLike_sinkInto, SinkLike_notify } from '../rx.mjs';
import { sourceFrom } from './SinkLike.mjs';
import { DisposableLike_exception } from '../util.mjs';
import { bindTo, addTo, dispose, isDisposed } from '../util/DisposableLike.mjs';
import create$2 from './__internal__/DelegatingSinkLike/DelegatingSinkLike.create.mjs';
import mixin from './__internal__/DelegatingSinkLike/DelegatingSinkLike.mixin.mjs';
import create$1 from './__internal__/RunnableLike/RunnableLike.create.mjs';
import bufferMixin from './__internal__/SinkLike/SinkLike.bufferMixin.mjs';
import catchErrorMixin from './__internal__/SinkLike/SinkLike.catchErrorMixin.mjs';
import create$3 from './__internal__/SinkLike/SinkLike.create.mjs';
import decodeWithCharsetMixin from './__internal__/SinkLike/SinkLike.decodeWithCharsetMixin.mjs';
import distinctUntilChangedMixin from './__internal__/SinkLike/SinkLike.distinctUntilChangedMixin.mjs';
import everySatisfyMixin from './__internal__/SinkLike/SinkLike.everySatisfyMixin.mjs';
import { forEachMixin } from './__internal__/SinkLike/SinkLike.forEachMixin.mjs';
import keepMixin from './__internal__/SinkLike/SinkLike.keepMixin.mjs';
import { mapMixin } from './__internal__/SinkLike/SinkLike.mapMixin.mjs';
import pairwiseMixin from './__internal__/SinkLike/SinkLike.pairwiseMixin.mjs';
import reduceMixin from './__internal__/SinkLike/SinkLike.reduceMixin.mjs';
import scanMixin from './__internal__/SinkLike/SinkLike.scanMixin.mjs';
import skipFirstMixin from './__internal__/SinkLike/SinkLike.skipFirstMixin.mjs';
import someSatisfyMixin from './__internal__/SinkLike/SinkLike.someSatisfyMixin.mjs';
import takeFirstMixin from './__internal__/SinkLike/SinkLike.takeFirstMixin.mjs';
import takeLastMixin from './__internal__/SinkLike/SinkLike.takeLastMixin.mjs';
import takeWhileMixin from './__internal__/SinkLike/SinkLike.takeWhileMixin.mjs';
import throwIfEmptyMixin from './__internal__/SinkLike/SinkLike.throwIfEmptyMixin.mjs';
import { DelegatingSinkLike_delegate } from './__internal__/rx.internal.mjs';

const create = create$1;
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
    const typedBufferSinkMixin = bufferMixin(toRunnable$1());
    return pipe(createInstanceFactory(typedBufferSinkMixin), buffer$1(liftT));
})();
const bufferT = { buffer };
const catchError = 
/*@__PURE__*/ (() => {
    const createCatchErrorObserver = (() => createInstanceFactory(catchErrorMixin()))();
    return (errorHandler => pipe(createCatchErrorObserver, partial(errorHandler), lift));
})();
const catchErrorT = { catchError };
const concat = (...runnables) => pipe(runnables, toRunnable$1(), concatAll());
const concatT = {
    concat,
};
const concatAll = /*@__PURE__*/ (() => {
    const typedDelegatingSinkMixin = mixin();
    return pipeLazy(createInstanceFactory(mixin$1(include(typedDelegatingSinkMixin), function RunnableConcatAll(instance, delegate) {
        init(typedDelegatingSinkMixin, instance, delegate);
        pipe(instance, bindTo(delegate));
        return instance;
    }, {}, {
        [SinkLike_notify](next) {
            const { [DelegatingSinkLike_delegate]: delegate } = this;
            pipe(create$2(delegate), addTo(this), sourceFrom(next), dispose());
        },
    })), lift);
})();
const concatAllT = {
    concatAll,
};
const decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = decodeWithCharsetMixin(toRunnable$1());
    return pipe(createInstanceFactory(typedDecodeWithCharsetMixin), decodeWithCharset$1(liftT));
})();
const decodeWithCharsetT = {
    decodeWithCharset,
};
const defer = f => create(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
});
const deferT = { defer };
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDistinctUntilChangedSinkMixin = distinctUntilChangedMixin();
    return pipe(createInstanceFactory(typedDistinctUntilChangedSinkMixin), distinctUntilChanged$1(liftT));
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const empty = () => create(sink => {
    pipe(sink, dispose());
});
const emptyT = { empty };
const everySatisfy = 
/*@__PURE__*/ (() => {
    const typedEverySatisfySinkMixin = everySatisfyMixin(toRunnable$1());
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
    const typedForEachSinkMixin = forEachMixin();
    return pipe(createInstanceFactory(typedForEachSinkMixin), forEach$1(liftT));
})();
const forEachT = { forEach };
const generate = (generator, initialValue) => create((sink) => {
    let acc = initialValue();
    while (!isDisposed(sink)) {
        acc = generator(acc);
        sink[SinkLike_notify](acc);
    }
});
const generateT = {
    generate,
};
const keep = /*@__PURE__*/ (() => {
    const typedKeepSinkMixin = keepMixin();
    return pipe(createInstanceFactory(typedKeepSinkMixin), keep$1(liftT));
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
    const typedMapSinkMixin = mapMixin();
    return pipe(createInstanceFactory(typedMapSinkMixin), map$1(liftT));
})();
const mapT = { map };
const never = () => create(ignore);
const neverT = {
    never: never,
};
const onRun = (f) => (runnable) => {
    return createOnSink(create, runnable, f);
};
const pairwise = /*@__PURE__*/ (() => {
    const typedPairwiseSinkMixin = pairwiseMixin();
    return pipe(createInstanceFactory(typedPairwiseSinkMixin), lift, returns);
})();
const pairwiseT = { pairwise };
const reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = reduceMixin(toRunnable$1());
    return pipe(createInstanceFactory(typedReduceSinkMixin), reduce$1(liftT));
})();
const reduceT = { reduce };
const repeat = /*@__PURE__*/ (() => {
    return repeat$1((delegate, predicate) => create(sink => {
        let count = 0;
        do {
            pipe(create$2(sink), addTo(sink), sourceFrom(delegate), dispose());
            count++;
        } while (!isDisposed(sink) && predicate(count));
    }));
})();
const repeatT = { repeat };
const run = () => (runnable) => pipe(create$3(), sourceFrom(runnable), dispose(), ({ [DisposableLike_exception]: error }) => {
    if (isSome(error)) {
        raise(error.cause);
    }
});
const scan = /*@__PURE__*/ (() => {
    const typedScanSinkMixin = scanMixin();
    return pipe(createInstanceFactory(typedScanSinkMixin), scan$1(liftT));
})();
const scanT = { scan };
const skipFirst = /*@__PURE__*/ (() => {
    const typedSkipFirstSinkMixin = skipFirstMixin();
    return pipe(createInstanceFactory(typedSkipFirstSinkMixin), skipFirst$1(liftT));
})();
const skipFirstT = { skipFirst };
const someSatisfy = 
/*@__PURE__*/ (() => {
    const typedSomeSatisfySinkMixin = someSatisfyMixin(toRunnable$1());
    return (predicate) => pipe(createInstanceFactory(typedSomeSatisfySinkMixin), partial(predicate), lift);
})();
const someSatisfyT = { someSatisfy };
const takeFirst = /*@__PURE__*/ (() => {
    const typedTakeFirstSinkMixin = takeFirstMixin();
    return pipe(createInstanceFactory(typedTakeFirstSinkMixin), takeFirst$1({
        ...liftT,
    }));
})();
const takeFirstT = { takeFirst };
const takeLast = /*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = takeLastMixin(toRunnable$1());
    return pipe(createInstanceFactory(typedTakeLastSinkMixin), takeLast$1({
        ...liftT,
    }));
})();
const takeLastT = { takeLast };
const takeWhile = /*@__PURE__*/ (() => {
    const typedTakeWhileSinkMixin = takeWhileMixin();
    return pipe(createInstanceFactory(typedTakeWhileSinkMixin), takeWhile$1(liftT));
})();
const takeWhileT = { takeWhile };
const throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedThrowIfEmptySinkMixin = throwIfEmptyMixin();
    return pipe(createInstanceFactory(typedThrowIfEmptySinkMixin), throwIfEmpty$1(liftT));
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

export { buffer, bufferT, catchError, catchErrorT, concat, concatAll, concatAllT, concatT, create, decodeWithCharset, decodeWithCharsetT, defer, deferT, distinctUntilChanged, distinctUntilChangedT, empty, emptyT, everySatisfy, everySatisfyT, first, forEach, forEachT, generate, generateT, keep, keepT, last, map, mapT, never, neverT, onRun, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, run, scan, scanT, skipFirst, skipFirstT, someSatisfy, someSatisfyT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT };

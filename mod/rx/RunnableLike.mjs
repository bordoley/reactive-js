/// <reference types="./RunnableLike.d.ts" />
import { createInstanceFactory, mix, include, init } from '../__internal__/mixins.mjs';
import ContainerLike__repeat from '../containers/__internal__/ContainerLike/ContainerLike.repeat.mjs';
import ReadonlyArrayLike__toRunnable from '../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable.mjs';
import StatefulContainerLike__buffer from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.buffer.mjs';
import StatefulContainerLike__decodeWithCharset from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.decodeWithCharset.mjs';
import StatefulContainerLike__distinctUntilChanged from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged.mjs';
import StatefulContainerLike__forEach from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach.mjs';
import StatefulContainerLike__keep from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep.mjs';
import StatefulContainerLike__map from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map.mjs';
import StatefulContainerLike__reduce from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.reduce.mjs';
import StatefulContainerLike__scan from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan.mjs';
import StatefulContainerLike__skipFirst from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.skipFirst.mjs';
import StatefulContainerLike__takeFirst from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeFirst.mjs';
import StatefulContainerLike__takeLast from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast.mjs';
import StatefulContainerLike__takeWhile from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile.mjs';
import StatefulContainerLike__throwIfEmpty from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.throwIfEmpty.mjs';
import { reactive } from '../containers/__internal__/containers.internal.mjs';
import { pipeUnsafe, newInstance, pipe, partial, pipeLazy, none, ignore, returns, isSome, raise, identity } from '../functions.mjs';
import { ReactiveContainerLike_sinkInto, SinkLike_notify } from '../rx.mjs';
import { DisposableLike_exception } from '../util.mjs';
import DisposableLike__addTo from '../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__bindTo from '../util/__internal__/DisposableLike/DisposableLike.bindTo.mjs';
import DisposableLike__dispose from '../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DelegateSinkLike__create from './__internal__/DelegatingSinkLike/DelegatingSinkLike.create.mjs';
import DelegateSinkLike__mixin from './__internal__/DelegatingSinkLike/DelegatingSinkLike.mixin.mjs';
import ReactiveContainerLike__onSink from './__internal__/ReactiveContainerLike/ReactiveContainerLike.onSink.mjs';
import RunnableLike__create from './__internal__/RunnableLike/RunnableLike.create.mjs';
import SinkLike__bufferMixin from './__internal__/SinkLike/SinkLike.bufferMixin.mjs';
import SinkLike__catchErrorMixin from './__internal__/SinkLike/SinkLike.catchErrorMixin.mjs';
import SinkLike__create from './__internal__/SinkLike/SinkLike.create.mjs';
import SinkLike__decodeWithCharsetMixin from './__internal__/SinkLike/SinkLike.decodeWithCharsetMixin.mjs';
import SinkLike__distinctUntilChangedMixin from './__internal__/SinkLike/SinkLike.distinctUntilChangedMixin.mjs';
import SinkLike__everySatisfyMixin from './__internal__/SinkLike/SinkLike.everySatisfyMixin.mjs';
import { SinkLike__forEachMixin } from './__internal__/SinkLike/SinkLike.forEachMixin.mjs';
import SinkLike__keepMixin from './__internal__/SinkLike/SinkLike.keepMixin.mjs';
import { SinkLike__mapMixin } from './__internal__/SinkLike/SinkLike.mapMixin.mjs';
import SinkLike__pairwiseMixin from './__internal__/SinkLike/SinkLike.pairwiseMixin.mjs';
import SinkLike__reduceMixin from './__internal__/SinkLike/SinkLike.reduceMixin.mjs';
import SinkLike__scanMixin from './__internal__/SinkLike/SinkLike.scanMixin.mjs';
import SinkLike__skipFirstMixin from './__internal__/SinkLike/SinkLike.skipFirstMixin.mjs';
import SinkLike__someSatisfyMixin from './__internal__/SinkLike/SinkLike.someSatisfyMixin.mjs';
import SinkLike__sourceFrom from './__internal__/SinkLike/SinkLike.sourceFrom.mjs';
import SinkLike__takeFirstMixin from './__internal__/SinkLike/SinkLike.takeFirstMixin.mjs';
import SinkLike__takeLastMixin from './__internal__/SinkLike/SinkLike.takeLastMixin.mjs';
import SinkLike__takeWhileMixin from './__internal__/SinkLike/SinkLike.takeWhileMixin.mjs';
import SinkLike__throwIfEmptyMixin from './__internal__/SinkLike/SinkLike.throwIfEmptyMixin.mjs';
import { DelegatingSinkLike_delegate } from './__internal__/rx.internal.mjs';

const create = RunnableLike__create;
const lift = /*@__PURE__*/ (() => {
    class LiftedRunnable {
        constructor(src, operators) {
            this.src = src;
            this.operators = operators;
        }
        [ReactiveContainerLike_sinkInto](sink) {
            pipeUnsafe(sink, ...this.operators, SinkLike__sourceFrom(this.src));
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
    const typedBufferSinkMixin = SinkLike__bufferMixin(ReadonlyArrayLike__toRunnable());
    return pipe(createInstanceFactory(typedBufferSinkMixin), StatefulContainerLike__buffer(liftT));
})();
const bufferT = { buffer };
const catchError = 
/*@__PURE__*/ (() => {
    const createCatchErrorObserver = (() => createInstanceFactory(SinkLike__catchErrorMixin()))();
    return (errorHandler => pipe(createCatchErrorObserver, partial(errorHandler), lift));
})();
const catchErrorT = { catchError };
const concat = (...runnables) => pipe(runnables, ReadonlyArrayLike__toRunnable(), concatAll());
const concatT = {
    concat,
};
const concatAll = /*@__PURE__*/ (() => {
    const typedDelegatingSinkMixin = DelegateSinkLike__mixin();
    return pipeLazy(createInstanceFactory(mix(include(typedDelegatingSinkMixin), function RunnableConcatAll(instance, delegate) {
        init(typedDelegatingSinkMixin, instance, delegate);
        pipe(instance, DisposableLike__bindTo(delegate));
        return instance;
    }, {}, {
        [SinkLike_notify](next) {
            const { [DelegatingSinkLike_delegate]: delegate } = this;
            pipe(DelegateSinkLike__create(delegate), DisposableLike__addTo(this), SinkLike__sourceFrom(next), DisposableLike__dispose());
        },
    })), lift);
})();
const concatAllT = {
    concatAll,
};
const decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = SinkLike__decodeWithCharsetMixin(ReadonlyArrayLike__toRunnable());
    return pipe(createInstanceFactory(typedDecodeWithCharsetMixin), StatefulContainerLike__decodeWithCharset(liftT));
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
    const typedDistinctUntilChangedSinkMixin = SinkLike__distinctUntilChangedMixin();
    return pipe(createInstanceFactory(typedDistinctUntilChangedSinkMixin), StatefulContainerLike__distinctUntilChanged(liftT));
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const empty = () => create(sink => {
    pipe(sink, DisposableLike__dispose());
});
const emptyT = { empty };
const everySatisfy = 
/*@__PURE__*/ (() => {
    const typedEverySatisfySinkMixin = SinkLike__everySatisfyMixin(ReadonlyArrayLike__toRunnable());
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
    const typedForEachSinkMixin = SinkLike__forEachMixin();
    return pipe(createInstanceFactory(typedForEachSinkMixin), StatefulContainerLike__forEach(liftT));
})();
const forEachT = { forEach };
const generate = (generator, initialValue) => create((sink) => {
    let acc = initialValue();
    while (!DisposableLike__isDisposed(sink)) {
        acc = generator(acc);
        sink[SinkLike_notify](acc);
    }
});
const generateT = {
    generate,
};
const keep = /*@__PURE__*/ (() => {
    const typedKeepSinkMixin = SinkLike__keepMixin();
    return pipe(createInstanceFactory(typedKeepSinkMixin), StatefulContainerLike__keep(liftT));
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
    const typedMapSinkMixin = SinkLike__mapMixin();
    return pipe(createInstanceFactory(typedMapSinkMixin), StatefulContainerLike__map(liftT));
})();
const mapT = { map };
const never = () => create(ignore);
const neverT = {
    never: never,
};
const onRun = (f) => (runnable) => ReactiveContainerLike__onSink(create, runnable, f);
const pairwise = /*@__PURE__*/ (() => {
    const typedPairwiseSinkMixin = SinkLike__pairwiseMixin();
    return pipe(createInstanceFactory(typedPairwiseSinkMixin), lift, returns);
})();
const pairwiseT = { pairwise };
const reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = SinkLike__reduceMixin(ReadonlyArrayLike__toRunnable());
    return pipe(createInstanceFactory(typedReduceSinkMixin), StatefulContainerLike__reduce(liftT));
})();
const reduceT = { reduce };
const repeat = /*@__PURE__*/ (() => {
    return ContainerLike__repeat((delegate, predicate) => create(sink => {
        let count = 0;
        do {
            pipe(DelegateSinkLike__create(sink), DisposableLike__addTo(sink), SinkLike__sourceFrom(delegate), DisposableLike__dispose());
            count++;
        } while (!DisposableLike__isDisposed(sink) && predicate(count));
    }));
})();
const repeatT = { repeat };
const run = () => (runnable) => pipe(SinkLike__create(), SinkLike__sourceFrom(runnable), DisposableLike__dispose(), ({ [DisposableLike_exception]: error }) => {
    if (isSome(error)) {
        raise(error.cause);
    }
});
const scan = /*@__PURE__*/ (() => {
    const typedScanSinkMixin = SinkLike__scanMixin();
    return pipe(createInstanceFactory(typedScanSinkMixin), StatefulContainerLike__scan(liftT));
})();
const scanT = { scan };
const skipFirst = /*@__PURE__*/ (() => {
    const typedSkipFirstSinkMixin = SinkLike__skipFirstMixin();
    return pipe(createInstanceFactory(typedSkipFirstSinkMixin), StatefulContainerLike__skipFirst(liftT));
})();
const skipFirstT = { skipFirst };
const someSatisfy = 
/*@__PURE__*/ (() => {
    const typedSomeSatisfySinkMixin = SinkLike__someSatisfyMixin(ReadonlyArrayLike__toRunnable());
    return (predicate) => pipe(createInstanceFactory(typedSomeSatisfySinkMixin), partial(predicate), lift);
})();
const someSatisfyT = { someSatisfy };
const takeFirst = /*@__PURE__*/ (() => {
    const typedTakeFirstSinkMixin = SinkLike__takeFirstMixin();
    return pipe(createInstanceFactory(typedTakeFirstSinkMixin), StatefulContainerLike__takeFirst({
        ...liftT,
    }));
})();
const takeFirstT = { takeFirst };
const takeLast = /*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = SinkLike__takeLastMixin(ReadonlyArrayLike__toRunnable());
    return pipe(createInstanceFactory(typedTakeLastSinkMixin), StatefulContainerLike__takeLast({
        ...liftT,
    }));
})();
const takeLastT = { takeLast };
const takeWhile = /*@__PURE__*/ (() => {
    const typedTakeWhileSinkMixin = SinkLike__takeWhileMixin();
    return pipe(createInstanceFactory(typedTakeWhileSinkMixin), StatefulContainerLike__takeWhile(liftT));
})();
const takeWhileT = { takeWhile };
const throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedThrowIfEmptySinkMixin = SinkLike__throwIfEmptyMixin();
    return pipe(createInstanceFactory(typedThrowIfEmptySinkMixin), StatefulContainerLike__throwIfEmpty(liftT));
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

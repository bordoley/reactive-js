/// <reference types="./runnable.d.ts" />
import { AbstractReactiveSource, createBufferOperator, createCatchErrorOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createKeepOperator, createMapOperator, createNever, createOnNotifyOperator, createOnSink, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, createUsing } from './__internal__.reactive.mjs';
import { empty } from './__internal__.readonlyArray.mjs';
import { AbstractDelegatingRunnableSink, createDelegatingRunnableSink } from './__internal__.runnableSink.mjs';
import { dispose, isDisposed, addTo, bindTo } from './disposable.mjs';
import { pipe, newInstance, raise, pipeLazy, newInstanceWith, ignore, getLength, alwaysTrue, compose, identity } from './functions.mjs';
import { isSome, none, isNone, getOrDefault } from './option.mjs';
import { sourceFrom } from './reactive.mjs';
import { RunnableSink } from './runnableSink.mjs';
import { createFromArray } from './__internal__.container.mjs';
import { contraVariant } from './__internal__.liftable.mjs';

class AbstractRunnable extends AbstractReactiveSource {
}

class RunnableImpl extends AbstractRunnable {
    constructor(_run) {
        super();
        this._run = _run;
    }
    sink(sink) {
        try {
            this._run(sink);
            pipe(sink, dispose());
        }
        catch (cause) {
            pipe(sink, dispose({ cause }));
        }
    }
}
const createRunnable = (run) => newInstance(RunnableImpl, run);
const createT = {
    create: createRunnable,
};

const run = (f) => (runnable) => pipe(f(), sourceFrom(runnable), dispose(), ({ error, result }) => isSome(error) ? raise(error.cause) : result);

class FirstSink extends RunnableSink {
    constructor() {
        super(...arguments);
        this.result = none;
    }
    notify(next) {
        this.result = next;
        pipe(this, dispose());
    }
}
const first = () => {
    const createSink = pipeLazy(FirstSink, newInstanceWith());
    return run(createSink);
};

const fromArray = /*@__PURE__*/ createFromArray((values, startIndex, endIndex) => {
    const count = endIndex - startIndex;
    const run = count === 0
        ? ignore
        : (sink) => {
            for (let index = startIndex; index < endIndex && !isDisposed(sink); index++) {
                sink.notify(values[index]);
            }
        };
    return createRunnable(run);
});
const fromArrayT = {
    fromArray,
};

class LiftedRunnable extends AbstractRunnable {
    constructor(src, operators) {
        super();
        this.src = src;
        this.operators = operators;
    }
    sink(sink) {
        pipe(pipe(sink, ...this.operators), sourceFrom(this.src), dispose());
    }
}
const lift = (operator) => runnable => {
    const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;
    const allFunctions = runnable instanceof LiftedRunnable
        ? [operator, ...runnable.operators]
        : [operator];
    return newInstance(LiftedRunnable, src, allFunctions);
};
const liftT = {
    variance: contraVariant,
    lift,
};

class FlattenSink extends AbstractDelegatingRunnableSink {
    notify(next) {
        const { delegate } = this;
        pipe(createDelegatingRunnableSink(delegate), addTo(this), sourceFrom(next), dispose());
    }
}
const _concatAll = /*@__PURE__*/ lift(delegate => pipe(FlattenSink, newInstanceWith(delegate), bindTo(delegate)));
const concatAll = () => _concatAll;
const concatAllT = {
    concatAll,
};

class ForEachSink extends RunnableSink {
    constructor(notify) {
        super();
        this.notify = notify;
        this.result = undefined;
    }
}
const forEach = (f) => {
    const createSink = pipeLazy(ForEachSink, newInstanceWith(f));
    return run(createSink);
};

class LastSink extends RunnableSink {
    constructor() {
        super(...arguments);
        this.result = none;
    }
    notify(next) {
        this.result = next;
    }
}
const last = () => {
    const createSink = pipeLazy(LastSink, newInstanceWith());
    return run(createSink);
};

const buffer = /*@__PURE__*/ createBufferOperator({ ...liftT, ...fromArrayT }, class BufferSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, maxBufferSize) {
        super(delegate);
        this.maxBufferSize = maxBufferSize;
        this.buffer = [];
    }
});
const bufferT = {
    buffer,
};
const catchError = /*@__PURE__*/ createCatchErrorOperator(liftT, class CatchErrorSink extends AbstractDelegatingRunnableSink {
});
const catchErrorT = {
    catchError,
};
const concat = (...runnables) => createRunnable((sink) => {
    const runnablesLength = getLength(runnables);
    for (let i = 0; i < runnablesLength && !isDisposed(sink); i++) {
        pipe(createDelegatingRunnableSink(sink), addTo(sink), sourceFrom(runnables[i]), dispose());
    }
});
const concatT = {
    concat,
};
const decodeWithCharset = 
/*@__PURE__*/ createDecodeWithCharsetOperator({ ...liftT, ...fromArrayT }, class DecodeWithCharsetSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, textDecoder) {
        super(delegate);
        this.textDecoder = textDecoder;
    }
});
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChanged = /*@__PURE__*/ createDistinctUntilChangedOperator(liftT, class DistinctUntilChangedSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, equality) {
        super(delegate);
        this.equality = equality;
        this.prev = none;
        this.hasValue = false;
    }
});
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const everySatisfy = /*@__PURE__*/ createEverySatisfyOperator({ ...fromArrayT, ...liftT }, class EverySatisfySink extends AbstractDelegatingRunnableSink {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
});
const everySatisfyT = {
    everySatisfy,
};
const generate = (generator, initialValue) => {
    const run = (sink) => {
        let acc = initialValue();
        while (!isDisposed(sink)) {
            acc = generator(acc);
            sink.notify(acc);
        }
    };
    return createRunnable(run);
};
const generateT = {
    generate,
};
const keep = 
/*@__PURE__*/ createKeepOperator(liftT, class KeepSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
});
const keepT = {
    keep,
};
const map = /*@__PURE__*/ createMapOperator(liftT, class MapSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
    }
});
const mapT = {
    map,
};
const never = /*@__PURE__*/ createNever(createT);
/**
 * Returns an `RunnableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
const onNotify = 
/*@__PURE__*/ createOnNotifyOperator(liftT, class OnNotifySink extends AbstractDelegatingRunnableSink {
    constructor(delegate, onNotify) {
        super(delegate);
        this.onNotify = onNotify;
    }
});
const onSink = /*@__PURE__*/ createOnSink(createT);
const pairwise = 
/*@__PURE__*/ createPairwiseOperator(liftT, class PairwiseSink extends AbstractDelegatingRunnableSink {
    constructor() {
        super(...arguments);
        this.hasPrev = false;
    }
});
const pairwiseT = {
    pairwise,
};
const reduce = /*@__PURE__*/ createReduceOperator({ ...fromArrayT, ...liftT }, class ReducerSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, reducer, acc) {
        super(delegate);
        this.reducer = reducer;
        this.acc = acc;
    }
});
const reduceT = {
    reduce,
};
const repeat = (predicate) => {
    const shouldRepeat = isNone(predicate)
        ? alwaysTrue
        : typeof predicate === "number"
            ? (count) => count < predicate
            : (count) => predicate(count);
    return runnable => createRunnable(sink => {
        let count = 0;
        do {
            pipe(createDelegatingRunnableSink(sink), addTo(sink), sourceFrom(runnable), dispose());
            count++;
        } while (!isDisposed(sink) && shouldRepeat(count));
    });
};
const repeatT = {
    repeat,
};
const scan = /*@__PURE__*/ createScanOperator(liftT, class ScanSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, reducer, acc) {
        super(delegate);
        this.reducer = reducer;
        this.acc = acc;
    }
});
const scanT = {
    scan,
};
const skipFirst = /*@__PURE__*/ createSkipFirstOperator(liftT, class SkipFirstSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, skipCount) {
        super(delegate);
        this.skipCount = skipCount;
        this.count = 0;
    }
});
const skipFirstT = {
    skipFirst,
};
const someSatisfy = /*@__PURE__*/ createSomeSatisfyOperator({ ...fromArrayT, ...liftT }, class SomeSatisfySink extends AbstractDelegatingRunnableSink {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
});
const someSatisfyT = {
    someSatisfy,
};
const takeFirst = /*@__PURE__*/ createTakeFirstOperator({ ...fromArrayT, ...liftT }, class TakeFirstSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.count = 0;
    }
});
const takeFirstT = {
    takeFirst,
};
const takeLast = /*@__PURE__*/ createTakeLastOperator({ ...fromArrayT, ...liftT }, class TakeLastSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.last = [];
    }
});
const takeLastT = {
    takeLast,
};
const takeWhile = /*@__PURE__*/ createTakeWhileOperator(liftT, class TakeWhileSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, predicate, inclusive) {
        super(delegate);
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
});
const takeWhileT = {
    takeWhile,
};
const throwIfEmpty = /*@__PURE__*/ createThrowIfEmptyOperator(liftT, class ThrowIfEmptySink extends AbstractDelegatingRunnableSink {
    constructor() {
        super(...arguments);
        this.isEmpty = true;
    }
});
const throwIfEmptyT = {
    throwIfEmpty,
};
/**
 * Accumulates all values emitted by `runnable` into an array.
 */
const toArray = () => compose(buffer(), first(), getOrDefault(empty));
const toArrayT = {
    toArray,
};
const toRunnable = () => identity;
const toRunnableT = {
    toRunnable,
};
const TContainerOf = undefined;
const using = 
/*@__PURE__*/ createUsing(createT);
const usingT = {
    using,
};

export { TContainerOf, buffer, bufferT, catchError, catchErrorT, concat, concatAll, concatAllT, concatT, createRunnable, createT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, everySatisfy, everySatisfyT, first, forEach, fromArray, fromArrayT, generate, generateT, keep, keepT, last, map, mapT, never, onNotify, onSink, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, someSatisfy, someSatisfyT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toArray, toArrayT, toRunnable, toRunnableT, using, usingT };

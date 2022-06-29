/// <reference types="./runnable.d.ts" />
import { dispose, isDisposed, addTo, bindTo } from './disposable.mjs';
import { pipe, raise, pipeLazy, newInstanceWith, length, min, max, ignore, identity, alwaysTrue, compose } from './functions.mjs';
import { isSome, none, isNone, getOrDefault } from './option.mjs';
import { empty } from './readonlyArray.mjs';
import { AbstractSource, sourceFrom, createBufferOperator, createCatchErrorOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createKeepOperator, createMapOperator, createNever, createOnNotifyOperator, createOnSink, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, createUsing } from './source.mjs';
import { RunnableSink, AbstractDelegatingRunnableSink, createDelegatingRunnableSink } from './runnableSink.mjs';
import { contraVariant } from './liftable.mjs';

class AbstractRunnable extends AbstractSource {
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
const createRunnable = (run) => new RunnableImpl(run);
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

const fromArray = (options = {}) => values => {
    var _a, _b;
    const valuesLength = length(values);
    const startIndex = min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = max(min((_b = options.endIndex) !== null && _b !== void 0 ? _b : length(values), valuesLength), 0);
    const count = endIndex - startIndex;
    const run = count === 0
        ? ignore
        : (sink) => {
            for (let index = startIndex; index < endIndex && !isDisposed(sink); index++) {
                sink.notify(values[index]);
            }
        };
    return createRunnable(run);
};
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
    return new LiftedRunnable(src, allFunctions);
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
const _concatAll = lift(delegate => pipe(FlattenSink, newInstanceWith(delegate), bindTo(delegate)));
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

const toRunnable = () => identity;
const type = undefined;
const buffer = createBufferOperator({ ...liftT, ...fromArrayT }, class BufferSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, maxBufferSize) {
        super(delegate);
        this.maxBufferSize = maxBufferSize;
        this.buffer = [];
    }
});
const bufferT = {
    buffer,
};
const catchError = createCatchErrorOperator(liftT, class CatchErrorSink extends AbstractDelegatingRunnableSink {
});
const concat = (...runnables) => createRunnable((sink) => {
    const runnablesLength = length(runnables);
    for (let i = 0; i < runnablesLength && !isDisposed(sink); i++) {
        pipe(createDelegatingRunnableSink(sink), addTo(sink), sourceFrom(runnables[i]), dispose());
    }
});
const concatT = {
    concat,
};
const decodeWithCharset = createDecodeWithCharsetOperator({ ...liftT, ...fromArrayT }, class DecodeWithCharsetSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, textDecoder) {
        super(delegate);
        this.textDecoder = textDecoder;
    }
});
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChanged = createDistinctUntilChangedOperator(liftT, class DistinctUntilChangedSink extends AbstractDelegatingRunnableSink {
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
const everySatisfy = createEverySatisfyOperator({ ...fromArrayT, ...liftT }, class EverySatisfySink extends AbstractDelegatingRunnableSink {
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
const keep = createKeepOperator(liftT, class KeepSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
});
const keepT = {
    keep,
};
const map = createMapOperator(liftT, class MapSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
    }
});
const mapT = {
    map,
};
const never = createNever(createT);
/**
 * Returns an `RunnableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
const onNotify = createOnNotifyOperator(liftT, class OnNotifySink extends AbstractDelegatingRunnableSink {
    constructor(delegate, onNotify) {
        super(delegate);
        this.onNotify = onNotify;
    }
});
const onSink = createOnSink(createT);
const pairwise = createPairwiseOperator(liftT, class PairwiseSink extends AbstractDelegatingRunnableSink {
    constructor() {
        super(...arguments);
        this.hasPrev = false;
    }
});
const pairwiseT = {
    pairwise,
};
const reduce = createReduceOperator({ ...fromArrayT, ...liftT }, class ReducerSink extends AbstractDelegatingRunnableSink {
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
const scan = createScanOperator(liftT, class ScanSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, reducer, acc) {
        super(delegate);
        this.reducer = reducer;
        this.acc = acc;
    }
});
const scanT = {
    scan,
};
const skipFirst = createSkipFirstOperator(liftT, class SkipFirstSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, skipCount) {
        super(delegate);
        this.skipCount = skipCount;
        this.count = 0;
    }
});
const skipFirstT = {
    skipFirst,
};
const someSatisfy = createSomeSatisfyOperator({ ...fromArrayT, ...liftT }, class SomeSatisfySink extends AbstractDelegatingRunnableSink {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
});
const someSatisfyT = {
    someSatisfy,
};
const takeFirst = createTakeFirstOperator({ ...fromArrayT, ...liftT }, class TakeFirstSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.count = 0;
    }
});
const takeFirstT = {
    takeFirst,
};
const takeLast = createTakeLastOperator({ ...fromArrayT, ...liftT }, class TakeLastSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.last = [];
    }
});
const takeLastT = {
    takeLast,
};
const takeWhile = createTakeWhileOperator(liftT, class TakeWhileSink extends AbstractDelegatingRunnableSink {
    constructor(delegate, predicate, inclusive) {
        super(delegate);
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
});
const takeWhileT = {
    takeWhile,
};
const throwIfEmpty = createThrowIfEmptyOperator(liftT, class ThrowIfEmptySink extends AbstractDelegatingRunnableSink {
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
const using = createUsing(createT);
const usingT = {
    using,
};

export { buffer, bufferT, catchError, concat, concatAll, concatAllT, concatT, createRunnable, createT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, everySatisfy, everySatisfyT, first, forEach, fromArray, fromArrayT, generate, generateT, keep, keepT, last, map, mapT, never, onNotify, onSink, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, someSatisfy, someSatisfyT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toArray, toRunnable, type, using, usingT };

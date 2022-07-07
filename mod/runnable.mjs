/// <reference types="./runnable.d.ts" />
import { getDelegate } from './__internal__.delegating.mjs';
import { __DEV__, MAX_SAFE_INTEGER } from './__internal__.env.mjs';
import { reactive, createDistinctUntilChangedOperator, createKeepOperator, createMapOperator, createOnNotifyOperator, createPairwiseOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from './__internal__.liftable.mjs';
import { decorateWithCatchErrorNotify, createCatchErrorOperator, decorateWithDecodeWithCharsetNotify, createDecodeWithCharsetOperator, decorateWithDistinctUntilChangedNotify, decorateWithEverySatisfyNotify, createEverySatisfyOperator, decorateWithKeepNotify, decorateWithMapNotify, createNever, decorateWithOnNotifyNotify, createOnSink, decorateWithPairwiseNotify, decorateWithReduceNotify, createReduceOperator, decorateWithScanNotify, decorateWithSkipFirstNotify, decorateWithSomeSatisfyNotify, createSomeSatisfyOperator, decorateWithTakeFirstNotify, decorateWithTakeLastNotify, createTakeLastOperator, decorateWithTakeWhileNotify, decorateWithThrowIfEmptyNotify, createUsing } from './__internal__.reactiveContainer.mjs';
import { empty } from './__internal__.readonlyArray.mjs';
import { fromValue } from './container.mjs';
import { dispose, Disposable, isDisposed, addTo, bindTo, onComplete } from './disposable.mjs';
import { raise, pipe, newInstance, pipeLazy, newInstanceWith, ignore, getLength, max, isEmpty, alwaysTrue, compose, identity } from './functions.mjs';
import { isSome, none, isNone, getOrDefault } from './option.mjs';
import { sourceFrom, sinkInto } from './reactiveContainer.mjs';
import { notify } from './reactiveSink.mjs';
import { createFromArray } from './__internal__.container.mjs';

class AbstractRunnable {
    get T() {
        return raise();
    }
    get TContainerOf() {
        return this;
    }
    get TLiftableContainerState() {
        return raise();
    }
}

class RunnableImpl extends AbstractRunnable {
    constructor(_run) {
        super();
        this._run = _run;
    }
    sinkInto(sink) {
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

class RunnableSink extends Disposable {
    notify(_) { }
}
class AbstractDelegatingRunnableSink extends RunnableSink {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
    notify(_) { }
}
class DelegatingRunnableSink extends AbstractDelegatingRunnableSink {
    notify(next) {
        pipe(this, getDelegate, notify(next));
    }
}
const createDelegatingRunnableSink = (delegate) => newInstance(DelegatingRunnableSink, delegate);
const decorateNotifyWithAssertions = (SinkClass) => {
    if (__DEV__) {
        const notify = SinkClass.prototype.notify;
        SinkClass.prototype.notify = function notifyWithAssertion(next) {
            if (isDisposed(this)) {
                raise("Sink is disposed");
            }
            notify.call(this, next);
        };
    }
};

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
    sinkInto(sink) {
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
    lift,
    variance: reactive,
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

const buffer = /*@__PURE__*/ (() => {
    class BufferSink extends AbstractDelegatingRunnableSink {
        constructor(delegate, maxBufferSize) {
            super(delegate);
            this.maxBufferSize = maxBufferSize;
            this.buffer = [];
        }
        notify(next) {
            const { buffer, maxBufferSize } = this;
            buffer.push(next);
            if (getLength(buffer) === maxBufferSize) {
                const buffer = this.buffer;
                this.buffer = [];
                getDelegate(this).notify(buffer);
            }
        }
    }
    return (options = {}) => {
        var _a;
        const maxBufferSize = max((_a = options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER, 1);
        return lift((delegate) => pipe(BufferSink, newInstanceWith(delegate, maxBufferSize), addTo(delegate), onComplete(function onDispose() {
            const { buffer } = this;
            this.buffer = [];
            if (isEmpty(buffer)) {
                pipe(this, getDelegate, dispose());
            }
            else {
                pipe(buffer, fromValue(fromArrayT), sinkInto(getDelegate(this)));
            }
        })));
    };
})();
const bufferT = {
    buffer,
};
const catchError = /*@__PURE__*/ (() => {
    class CatchErrorSink extends AbstractDelegatingRunnableSink {
    }
    decorateWithCatchErrorNotify(CatchErrorSink);
    decorateNotifyWithAssertions(CatchErrorSink);
    return createCatchErrorOperator(liftT, CatchErrorSink);
})();
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
const decodeWithCharset = /*@__PURE__*/ (() => {
    class DecodeWithCharsetSink extends AbstractDelegatingRunnableSink {
        constructor(delegate, textDecoder) {
            super(delegate);
            this.textDecoder = textDecoder;
        }
    }
    decorateWithDecodeWithCharsetNotify(DecodeWithCharsetSink);
    decorateNotifyWithAssertions(DecodeWithCharsetSink);
    return createDecodeWithCharsetOperator({ ...liftT, ...fromArrayT }, DecodeWithCharsetSink);
})();
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChanged = /*@__PURE__*/ (() => {
    class DistinctUntilChangedSink extends AbstractDelegatingRunnableSink {
        constructor(delegate, equality) {
            super(delegate);
            this.equality = equality;
            this.prev = none;
            this.hasValue = false;
        }
    }
    decorateWithDistinctUntilChangedNotify(DistinctUntilChangedSink);
    decorateNotifyWithAssertions(DistinctUntilChangedSink);
    return createDistinctUntilChangedOperator(liftT, DistinctUntilChangedSink);
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const everySatisfy = /*@__PURE__*/ (() => {
    class EverySatisfySink extends AbstractDelegatingRunnableSink {
        constructor(delegate, predicate) {
            super(delegate);
            this.predicate = predicate;
        }
    }
    decorateWithEverySatisfyNotify(EverySatisfySink);
    decorateNotifyWithAssertions(EverySatisfySink);
    return createEverySatisfyOperator({ ...fromArrayT, ...liftT }, EverySatisfySink);
})();
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
/*@__PURE__*/ (() => {
    class KeepSink extends AbstractDelegatingRunnableSink {
        constructor(delegate, predicate) {
            super(delegate);
            this.predicate = predicate;
        }
    }
    decorateWithKeepNotify(KeepSink);
    decorateNotifyWithAssertions(KeepSink);
    return createKeepOperator(liftT, KeepSink);
})();
const keepT = {
    keep,
};
const map = /*@__PURE__*/ (() => {
    class MapSink extends AbstractDelegatingRunnableSink {
        constructor(delegate, mapper) {
            super(delegate);
            this.mapper = mapper;
        }
    }
    decorateWithMapNotify(MapSink);
    decorateNotifyWithAssertions(MapSink);
    return createMapOperator(liftT, MapSink);
})();
const mapT = {
    map,
};
const never = /*@__PURE__*/ createNever(createT);
const neverT = {
    never,
};
/**
 * Returns an `RunnableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
const onNotify = 
/*@__PURE__*/ (() => {
    class OnNotifySink extends AbstractDelegatingRunnableSink {
        constructor(delegate, onNotify) {
            super(delegate);
            this.onNotify = onNotify;
        }
    }
    decorateWithOnNotifyNotify(OnNotifySink);
    decorateNotifyWithAssertions(OnNotifySink);
    return createOnNotifyOperator(liftT, OnNotifySink);
})();
const onSink = /*@__PURE__*/ createOnSink(createT);
const pairwise = 
/*@__PURE__*/ (() => {
    class PairwiseSink extends AbstractDelegatingRunnableSink {
        constructor() {
            super(...arguments);
            this.hasPrev = false;
        }
    }
    decorateWithPairwiseNotify(PairwiseSink);
    decorateNotifyWithAssertions(PairwiseSink);
    return createPairwiseOperator(liftT, PairwiseSink);
})();
const pairwiseT = {
    pairwise,
};
const reduce = /*@__PURE__*/ (() => {
    class ReducerSink extends AbstractDelegatingRunnableSink {
        constructor(delegate, reducer, acc) {
            super(delegate);
            this.reducer = reducer;
            this.acc = acc;
        }
    }
    decorateWithReduceNotify(ReducerSink);
    decorateNotifyWithAssertions(ReducerSink);
    return createReduceOperator({ ...fromArrayT, ...liftT }, ReducerSink);
})();
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
const scan = /*@__PURE__*/ (() => {
    class ScanSink extends AbstractDelegatingRunnableSink {
        constructor(delegate, reducer, acc) {
            super(delegate);
            this.reducer = reducer;
            this.acc = acc;
        }
    }
    decorateWithScanNotify(ScanSink);
    decorateNotifyWithAssertions(ScanSink);
    return createScanOperator(liftT, ScanSink);
})();
const scanT = {
    scan,
};
const skipFirst = /*@__PURE__*/ (() => {
    class SkipFirstSink extends AbstractDelegatingRunnableSink {
        constructor(delegate, skipCount) {
            super(delegate);
            this.skipCount = skipCount;
            this.count = 0;
        }
    }
    decorateWithSkipFirstNotify(SkipFirstSink);
    decorateNotifyWithAssertions(SkipFirstSink);
    return createSkipFirstOperator(liftT, SkipFirstSink);
})();
const skipFirstT = {
    skipFirst,
};
const someSatisfy = /*@__PURE__*/ (() => {
    class SomeSatisfySink extends AbstractDelegatingRunnableSink {
        constructor(delegate, predicate) {
            super(delegate);
            this.predicate = predicate;
        }
    }
    decorateWithSomeSatisfyNotify(SomeSatisfySink);
    decorateNotifyWithAssertions(SomeSatisfySink);
    return createSomeSatisfyOperator({ ...fromArrayT, ...liftT }, SomeSatisfySink);
})();
const someSatisfyT = {
    someSatisfy,
};
const takeFirst = /*@__PURE__*/ (() => {
    class TakeFirstSink extends AbstractDelegatingRunnableSink {
        constructor(delegate, maxCount) {
            super(delegate);
            this.maxCount = maxCount;
            this.count = 0;
        }
    }
    decorateWithTakeFirstNotify(TakeFirstSink);
    decorateNotifyWithAssertions(TakeFirstSink);
    return createTakeFirstOperator({ ...fromArrayT, ...liftT }, TakeFirstSink);
})();
const takeFirstT = {
    takeFirst,
};
const takeLast = /*@__PURE__*/ (() => {
    class TakeLastSink extends AbstractDelegatingRunnableSink {
        constructor(delegate, maxCount) {
            super(delegate);
            this.maxCount = maxCount;
            this.last = [];
        }
    }
    decorateWithTakeLastNotify(TakeLastSink);
    decorateNotifyWithAssertions(TakeLastSink);
    return createTakeLastOperator({ ...fromArrayT, ...liftT }, TakeLastSink);
})();
const takeLastT = {
    takeLast,
};
const takeWhile = /*@__PURE__*/ (() => {
    class TakeWhileSink extends AbstractDelegatingRunnableSink {
        constructor(delegate, predicate, inclusive) {
            super(delegate);
            this.predicate = predicate;
            this.inclusive = inclusive;
        }
    }
    decorateWithTakeWhileNotify(TakeWhileSink);
    decorateNotifyWithAssertions(TakeWhileSink);
    return createTakeWhileOperator(liftT, TakeWhileSink);
})();
const takeWhileT = {
    takeWhile,
};
const throwIfEmpty = /*@__PURE__*/ (() => {
    class ThrowIfEmptySink extends AbstractDelegatingRunnableSink {
        constructor() {
            super(...arguments);
            this.isEmpty = true;
        }
    }
    decorateWithThrowIfEmptyNotify(ThrowIfEmptySink);
    decorateNotifyWithAssertions(ThrowIfEmptySink);
    return createThrowIfEmptyOperator(liftT, ThrowIfEmptySink);
})();
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

export { TContainerOf, buffer, bufferT, catchError, catchErrorT, concat, concatAll, concatAllT, concatT, createRunnable, createT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, everySatisfy, everySatisfyT, first, forEach, fromArray, fromArrayT, generate, generateT, keep, keepT, last, map, mapT, never, neverT, onNotify, onSink, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, someSatisfy, someSatisfyT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toArray, toArrayT, toRunnable, toRunnableT, using, usingT };

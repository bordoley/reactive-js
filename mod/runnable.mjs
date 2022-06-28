/// <reference types="./runnable.d.ts" />
import { dispose, isDisposed, addTo } from './disposable.mjs';
import { pipe, ignore, raise, identity, alwaysTrue } from './functions.mjs';
import { isSome, none, isNone } from './option.mjs';
import { AbstractSource, sourceFrom, createCatchErrorOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createKeepOperator, createMapOperator, createNever, createOnNotifyOperator, createOnSink, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, createUsing } from './source.mjs';
import { AbstractDisposableContainer } from './container.mjs';
import { __DEV__ } from './env.mjs';

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

const fromArray = (options = {}) => values => {
    var _a, _b;
    const valuesLength = values.length;
    const startIndex = Math.min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = Math.max(Math.min((_b = options.endIndex) !== null && _b !== void 0 ? _b : values.length, valuesLength), 0);
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
    variance: "contravariant",
    lift,
};

class Sink extends AbstractDisposableContainer {
    assertState() { }
    notify(_) { }
}
if (__DEV__) {
    Sink.prototype.assertState = function () {
        if (isDisposed(this)) {
            raise("Sink is disposed");
        }
    };
}
class DelegatingSink extends Sink {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
const createDelegatingSink = (delegate) => new DelegatingSink(delegate);

class FlattenSink extends Sink {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
    notify(next) {
        const { delegate } = this;
        pipe(createDelegatingSink(delegate), addTo(this), sourceFrom(next), dispose());
    }
}
const _concatAll = lift(delegate => pipe(new FlattenSink(delegate), addTo(delegate)));
const concatAll = () => _concatAll;
const concatAllT = {
    concatAll,
};

const run = (f) => (runnable) => pipe(f(), sourceFrom(runnable), dispose(), ({ error, result }) => isSome(error) ? raise(error.cause) : result);

class FirstSink extends Sink {
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
    const createSink = () => new FirstSink();
    return run(createSink);
};

class ForEachSink extends Sink {
    constructor(notify) {
        super();
        this.notify = notify;
        this.result = undefined;
    }
}
const forEach = (f) => {
    const createSink = () => new ForEachSink(f);
    return run(createSink);
};

class LastSink extends Sink {
    constructor() {
        super(...arguments);
        this.result = none;
    }
    notify(next) {
        this.result = next;
    }
}
const last = () => {
    const createSink = () => new LastSink();
    return run(createSink);
};

class ToArraySink extends Sink {
    constructor() {
        super(...arguments);
        this.result = [];
    }
    notify(next) {
        this.result.push(next);
    }
}
const createSink = () => new ToArraySink();
/**
 * Accumulates all values emitted by `runnable` into an array.
 *
 */
const toArray = () => run(createSink);

const toRunnable = () => identity;
const type = undefined;
const catchError = createCatchErrorOperator(liftT, class CatchErrorSink extends Sink {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
});
const concat = (...runnables) => createRunnable((sink) => {
    const runnablesLength = runnables.length;
    for (let i = 0; i < runnablesLength && !isDisposed(sink); i++) {
        pipe(createDelegatingSink(sink), addTo(sink), sourceFrom(runnables[i]), dispose());
    }
});
const concatT = {
    concat,
};
const decodeWithCharset = createDecodeWithCharsetOperator({ ...liftT, ...fromArrayT }, class DecodeWithCharsetSink extends Sink {
    constructor(delegate, textDecoder) {
        super();
        this.delegate = delegate;
        this.textDecoder = textDecoder;
    }
});
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChanged = createDistinctUntilChangedOperator(liftT, class DistinctUntilChangedSink extends Sink {
    constructor(delegate, equality) {
        super();
        this.delegate = delegate;
        this.equality = equality;
        this.prev = none;
        this.hasValue = false;
    }
});
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const everySatisfy = createEverySatisfyOperator({ ...fromArrayT, ...liftT }, class EverySatisfySink extends Sink {
    constructor(delegate, predicate) {
        super();
        this.delegate = delegate;
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
const keep = createKeepOperator(liftT, class KeepSink extends Sink {
    constructor(delegate, predicate) {
        super();
        this.delegate = delegate;
        this.predicate = predicate;
    }
});
const keepT = {
    keep,
};
const map = createMapOperator(liftT, class MapSink extends Sink {
    constructor(delegate, mapper) {
        super();
        this.delegate = delegate;
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
const onNotify = createOnNotifyOperator(liftT, class OnNotifySink extends Sink {
    constructor(delegate, onNotify) {
        super();
        this.delegate = delegate;
        this.onNotify = onNotify;
    }
});
const onSink = createOnSink(createT);
const pairwise = createPairwiseOperator(liftT, class PairwiseSink extends Sink {
    constructor(delegate) {
        super();
        this.delegate = delegate;
        this.hasPrev = false;
    }
});
const pairwiseT = {
    pairwise,
};
const reduce = createReduceOperator({ ...fromArrayT, ...liftT }, class ReducerSink extends Sink {
    constructor(delegate, reducer, acc) {
        super();
        this.delegate = delegate;
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
            pipe(createDelegatingSink(sink), addTo(sink), sourceFrom(runnable), dispose());
            count++;
        } while (!isDisposed(sink) && shouldRepeat(count));
    });
};
const repeatT = {
    repeat,
};
const scan = createScanOperator(liftT, class ScanSink extends Sink {
    constructor(delegate, reducer, acc) {
        super();
        this.delegate = delegate;
        this.reducer = reducer;
        this.acc = acc;
    }
});
const scanT = {
    scan,
};
const skipFirst = createSkipFirstOperator(liftT, class SkipFirstSink extends Sink {
    constructor(delegate, skipCount) {
        super();
        this.delegate = delegate;
        this.skipCount = skipCount;
        this.count = 0;
    }
});
const skipFirstT = {
    skipFirst,
};
const someSatisfy = createSomeSatisfyOperator({ ...fromArrayT, ...liftT }, class SomeSatisfySink extends Sink {
    constructor(delegate, predicate) {
        super();
        this.delegate = delegate;
        this.predicate = predicate;
    }
});
const someSatisfyT = {
    someSatisfy,
};
const takeFirst = createTakeFirstOperator({ ...fromArrayT, ...liftT }, class TakeFirstSink extends Sink {
    constructor(delegate, maxCount) {
        super();
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.count = 0;
    }
});
const takeFirstT = {
    takeFirst,
};
const takeLast = createTakeLastOperator({ ...fromArrayT, ...liftT }, class TakeLastSink extends Sink {
    constructor(delegate, maxCount) {
        super();
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.last = [];
    }
});
const takeLastT = {
    takeLast,
};
const takeWhile = createTakeWhileOperator(liftT, class TakeWhileSink extends Sink {
    constructor(delegate, predicate, inclusive) {
        super();
        this.delegate = delegate;
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
});
const takeWhileT = {
    takeWhile,
};
const throwIfEmpty = createThrowIfEmptyOperator(liftT, class ThrowIfEmptySink extends Sink {
    constructor(delegate) {
        super();
        this.delegate = delegate;
        this.isEmpty = true;
    }
});
const throwIfEmptyT = {
    throwIfEmpty,
};
const using = createUsing(createT);
const usingT = {
    using,
};

export { Sink, catchError, concat, concatAll, concatAllT, concatT, createRunnable, createT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, everySatisfy, everySatisfyT, first, forEach, fromArray, fromArrayT, generate, generateT, keep, keepT, last, map, mapT, never, onNotify, onSink, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, someSatisfy, someSatisfyT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toArray, toRunnable, type, using, usingT };

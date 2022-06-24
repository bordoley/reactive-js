/// <reference types="./runnable.d.ts" />
import { ignore, pipe, raise, alwaysTrue, identity } from './functions.mjs';
import { isSome, none, isNone } from './option.mjs';
import { AbstractSource, createCatchErrorOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createKeepOperator, createMapOperator, createOnNotifyOperator, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, createUsing } from './source.mjs';
import { AbstractDisposableContainer } from './container.mjs';
import { addDisposable, addDisposableDisposeParentOnChildError } from './disposable.mjs';
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
            sink.dispose({ cause });
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
            for (let index = startIndex; index < endIndex && !sink.isDisposed; index++) {
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
        const liftedSink = pipe(sink, ...this.operators);
        this.src.sink(liftedSink);
        liftedSink.dispose();
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
        if (this.isDisposed) {
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
const createDelegatingSink = (delegate) => {
    const sink = new DelegatingSink(delegate);
    addDisposable(delegate, sink);
    return sink;
};

function concat(...runnables) {
    return createRunnable((sink) => {
        const runnablesLength = runnables.length;
        for (let i = 0; i < runnablesLength && !sink.isDisposed; i++) {
            const concatSink = createDelegatingSink(sink);
            addDisposableDisposeParentOnChildError(sink, concatSink);
            runnables[i].sink(concatSink);
            concatSink.dispose();
        }
    });
}
class FlattenSink extends Sink {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
    notify(next) {
        const { delegate } = this;
        const concatSink = createDelegatingSink(delegate);
        addDisposableDisposeParentOnChildError(delegate, concatSink);
        next.sink(concatSink);
        concatSink.dispose();
    }
}
const _concatAll = lift(delegate => {
    const sink = new FlattenSink(delegate);
    addDisposable(delegate, sink);
    return sink;
});
const concatAll = () => _concatAll;

const run = (f) => (runnable) => {
    const sink = f();
    runnable.sink(sink);
    sink.dispose();
    const { error } = sink;
    if (isSome(error)) {
        throw error.cause;
    }
    return sink.result;
};

class FirstSink extends Sink {
    constructor() {
        super(...arguments);
        this.result = none;
    }
    notify(next) {
        this.result = next;
        this.dispose();
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

const generate = (generator, initialValue) => {
    const run = (sink) => {
        let acc = initialValue();
        while (!sink.isDisposed) {
            acc = generator(acc);
            sink.notify(acc);
        }
    };
    return createRunnable(run);
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

function repeat(predicate) {
    const shouldRepeat = isNone(predicate)
        ? alwaysTrue
        : typeof predicate === "number"
            ? (count) => count < predicate
            : (count) => predicate(count);
    return runnable => createRunnable(sink => {
        let count = 0;
        do {
            const delegateSink = createDelegatingSink(sink);
            runnable.sink(delegateSink);
            delegateSink.dispose();
            count++;
        } while (!sink.isDisposed && shouldRepeat(count));
    });
}

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

export { Sink, catchError, concat, concatAll, createRunnable, createT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, everySatisfy, everySatisfyT, first, forEach, fromArray, fromArrayT, generate, keep, keepT, last, map, mapT, onNotify, pairwise, pairwiseT, reduce, reduceT, repeat, scan, scanT, skipFirst, skipFirstT, someSatisfy, someSatisfyT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toArray, toRunnable, type, using, usingT };

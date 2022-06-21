/// <reference types="./runnable.d.ts" />
import { raise, pipe, compose, negate, alwaysTrue, strictEquality, isEqualTo, identity } from './functions.mjs';
import { AbstractDisposable, addDisposable, addDisposableDisposeParentOnChildError } from './disposable.mjs';
import { __DEV__ } from './env.mjs';
import { AbstractContainer } from './container.mjs';
import { createDecodeWithCharset, createDistinctUntilChanged, createKeepOperator, createMapOperator, createOnNotifyOperator, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator } from './sink.mjs';
import { none, isSome, isNone } from './option.mjs';

class Sink extends AbstractDisposable {
    get type() {
        return this;
    }
    get T() {
        return undefined;
    }
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
const sink = (sink) => observable => observable.run(sink);
const sinkT = {
    sink,
};

class RunnableImpl extends AbstractContainer {
    constructor(_run) {
        super();
        this._run = _run;
    }
    get sinkType() {
        return undefined;
    }
    run(sink) {
        try {
            this._run(sink);
        }
        catch (cause) {
            sink.dispose({ cause });
        }
    }
}
const createRunnable = (run) => new RunnableImpl(run);

class LiftedRunnable extends AbstractContainer {
    constructor(src, operators) {
        super();
        this.src = src;
        this.operators = operators;
    }
    get sinkType() {
        return undefined;
    }
    run(sink) {
        const liftedSink = pipe(sink, ...this.operators);
        this.src.run(liftedSink);
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
    lift,
};

function concat(...runnables) {
    return createRunnable((sink) => {
        const runnablesLength = runnables.length;
        for (let i = 0; i < runnablesLength && !sink.isDisposed; i++) {
            const concatSink = createDelegatingSink(sink);
            addDisposableDisposeParentOnChildError(sink, concatSink);
            runnables[i].run(concatSink);
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
        const concatSink = createDelegatingSink(this.delegate);
        addDisposableDisposeParentOnChildError(this.delegate, concatSink);
        next.run(concatSink);
        concatSink.dispose();
    }
}
const _concatAll = lift(delegate => {
    const sink = new FlattenSink(delegate);
    addDisposable(delegate, sink);
    return sink;
});
const concatAll = () => _concatAll;

const fromArray = (options = {}) => values => {
    var _a, _b;
    const valuesLength = values.length;
    const startIndex = Math.min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = Math.max(Math.min((_b = options.endIndex) !== null && _b !== void 0 ? _b : values.length, valuesLength), 0);
    const run = (sink) => {
        for (let index = startIndex; index < endIndex && !sink.isDisposed; index++) {
            sink.notify(values[index]);
        }
    };
    return createRunnable(run);
};
const fromArrayT = {
    fromArray,
};

const decodeWithCharset = createDecodeWithCharset({ ...liftT, ...fromArrayT, ...sinkT }, class DecodeWithCharsetSink extends Sink {
    constructor(delegate, textDecoder) {
        super();
        this.delegate = delegate;
        this.textDecoder = textDecoder;
    }
});

const distinctUntilChanged = createDistinctUntilChanged(liftT, class DistinctUntilChangedSink extends Sink {
    constructor(delegate, equality) {
        super();
        this.delegate = delegate;
        this.equality = equality;
        this.prev = none;
        this.hasValue = false;
    }
});

const run = (f) => (runnable) => {
    const sink = f();
    runnable.run(sink);
    sink.dispose();
    const { error } = sink;
    if (isSome(error)) {
        throw error.cause;
    }
    return sink.result;
};

class EverySatisfySink extends Sink {
    constructor(predicate) {
        super();
        this.predicate = predicate;
        this.result = true;
    }
    notify(next) {
        if (!this.predicate(next)) {
            this.result = false;
            this.dispose();
        }
    }
}
const everySatisfy = (predicate) => {
    const createSink = () => new EverySatisfySink(predicate);
    return run(createSink);
};
const noneSatisfy = (predicate) => everySatisfy(compose(predicate, negate));

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
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
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

const reduce = createReduceOperator({ ...fromArrayT, ...liftT, ...sinkT }, class ReducerSink extends Sink {
    constructor(delegate, reducer, acc) {
        super();
        this.delegate = delegate;
        this.reducer = reducer;
        this.acc = acc;
    }
});

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
            runnable.run(delegateSink);
            delegateSink.dispose();
            count++;
        } while (!sink.isDisposed && shouldRepeat(count));
    });
}

const scan = createScanOperator(liftT, class ScanSink extends Sink {
    constructor(delegate, reducer, acc) {
        super();
        this.delegate = delegate;
        this.reducer = reducer;
        this.acc = acc;
    }
});

const skipFirst = createSkipFirstOperator(liftT, class SkipFirstSink extends Sink {
    constructor(delegate, skipCount) {
        super();
        this.delegate = delegate;
        this.skipCount = skipCount;
        this.count = 0;
    }
});

class SomeSatisfySink extends Sink {
    constructor(predicate) {
        super();
        this.predicate = predicate;
        this.result = false;
    }
    notify(next) {
        if (this.predicate(next)) {
            this.result = true;
            this.dispose();
        }
    }
}
const someSatisfy = (predicate) => {
    const createSink = () => new SomeSatisfySink(predicate);
    return run(createSink);
};
const contains = (value, options = {}) => {
    const { equality = strictEquality } = options;
    return someSatisfy(isEqualTo(value, equality));
};

const takeFirst = createTakeFirstOperator({ ...fromArrayT, ...liftT }, class TakeFirstSink extends Sink {
    constructor(delegate, maxCount) {
        super();
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.count = 0;
    }
});

const takeLast = createTakeLastOperator({ ...fromArrayT, ...liftT, sink }, class TakeLastSink extends Sink {
    constructor(delegate, maxCount) {
        super();
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.last = [];
    }
});

const takeWhile = createTakeWhileOperator(liftT, class TakeWhileSink extends Sink {
    constructor(delegate, predicate, inclusive) {
        super();
        this.delegate = delegate;
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
});

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

/**
 * Creates an `RunnableLike` that uses one or more resources which
 * will be disposed when the RunnableLike disposes it's only subscription.
 */
function using(resourceFactory, runnableFactory) {
    const run = (sink) => {
        const resources = resourceFactory();
        const resourcesArray = Array.isArray(resources) ? resources : [resources];
        const runnable = runnableFactory(...resourcesArray);
        for (const r of resourcesArray) {
            addDisposableDisposeParentOnChildError(sink, r);
        }
        runnable.run(sink);
    };
    return createRunnable(run);
}

const toRunnable = () => identity;
const type = undefined;

export { Sink, concat, concatAll, contains, createRunnable, decodeWithCharset, distinctUntilChanged, everySatisfy, first, forEach, fromArray, fromArrayT, generate, keep, keepT, last, map, noneSatisfy, onNotify, pairwise, reduce, repeat, scan, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, toArray, toRunnable, type, using };

/// <reference types="./runnable.d.ts" />
import { pipe, strictEquality, compose, negate, alwaysTrue, isEqualTo, identity } from './functions.mjs';
import { addDisposableDisposeParentOnChildError, dispose, addTeardown } from './disposable.mjs';
import { createDelegatingSink, AbstractDelegatingSink, AbstractAutoDisposingDelegatingSink, notifyDistinctUntilChanged, AbstractSink, notifyKeep, notifyMap, notifyOnNotify, notifyPairwise, notifyReduce, notifyScan, notifySkipFirst, notifyTakeFirst, notifyTakeLast, notifyTakeWhile } from './sink.mjs';
import { none, isSome, isNone } from './option.mjs';
import { empty } from './container.mjs';

class RunnableImpl {
    constructor(_run) {
        this._run = _run;
        this.type = this;
        this.T = undefined;
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

class LiftedRunnable {
    constructor(src, operators) {
        this.src = src;
        this.operators = operators;
        this.type = this;
        this.T = undefined;
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
class FlattenSink extends AbstractDelegatingSink {
    notify(next) {
        const concatSink = createDelegatingSink(this.delegate);
        addDisposableDisposeParentOnChildError(this.delegate, concatSink);
        next.run(concatSink);
        concatSink.dispose();
    }
}
const _concatAll = lift(s => new FlattenSink(s));
const concatAll = () => _concatAll;

class DistinctUntilChangedSink extends AbstractAutoDisposingDelegatingSink {
    constructor(delegate, equality) {
        super(delegate);
        this.equality = equality;
        this.prev = none;
        this.hasValue = false;
    }
}
DistinctUntilChangedSink.prototype.notify = notifyDistinctUntilChanged;
const distinctUntilChanged = (options = {}) => {
    const { equality = strictEquality } = options;
    const operator = (sink) => new DistinctUntilChangedSink(sink, equality);
    return lift(operator);
};

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

class EverySatisfySink extends AbstractSink {
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

class FirstSink extends AbstractSink {
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

class ForEachSink extends AbstractSink {
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

class KeepSink extends AbstractAutoDisposingDelegatingSink {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
}
KeepSink.prototype.notify = notifyKeep;
const keep = (predicate) => {
    const operator = (sink) => new KeepSink(sink, predicate);
    return lift(operator);
};
const keepT = {
    keep,
};

class LastSink extends AbstractSink {
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

class MapSink extends AbstractAutoDisposingDelegatingSink {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
    }
}
MapSink.prototype.notify = notifyMap;
const map = (mapper) => {
    const operator = (sink) => new MapSink(sink, mapper);
    return lift(operator);
};

class OnNotifySink extends AbstractAutoDisposingDelegatingSink {
    constructor(delegate, onNotify) {
        super(delegate);
        this.onNotify = onNotify;
    }
}
OnNotifySink.prototype.notify = notifyOnNotify;
/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
function onNotify(onNotify) {
    const operator = (observer) => new OnNotifySink(observer, onNotify);
    return lift(operator);
}

class PairwiseObserver extends AbstractAutoDisposingDelegatingSink {
    constructor() {
        super(...arguments);
        this.hasPrev = false;
    }
}
PairwiseObserver.prototype.notify = notifyPairwise;
const pairwise = () => {
    const operator = (observer) => new PairwiseObserver(observer);
    return lift(operator);
};

class ReducerSink extends AbstractSink {
    constructor(acc, reducer) {
        super();
        this.acc = acc;
        this.reducer = reducer;
    }
    get result() {
        return this.acc;
    }
}
ReducerSink.prototype.notify = notifyReduce;
const reduce = (reducer, initialValue) => {
    const createSink = () => new ReducerSink(initialValue(), reducer);
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
            runnable.run(delegateSink);
            delegateSink.dispose();
            count++;
        } while (!sink.isDisposed && shouldRepeat(count));
        sink.dispose();
    });
}

class ScanSink extends AbstractAutoDisposingDelegatingSink {
    constructor(delegate, reducer, acc) {
        super(delegate);
        this.reducer = reducer;
        this.acc = acc;
    }
}
ScanSink.prototype.notify = notifyScan;
const scan = (reducer, initialValue) => {
    const operator = (sink) => new ScanSink(sink, reducer, initialValue());
    return lift(operator);
};

class SkipFirstSink extends AbstractAutoDisposingDelegatingSink {
    constructor(delegate, skipCount) {
        super(delegate);
        this.skipCount = skipCount;
        this.count = 0;
    }
}
SkipFirstSink.prototype.notify = notifySkipFirst;
const skipFirst = (options = {}) => {
    const { count = 1 } = options;
    const operator = (sink) => new SkipFirstSink(sink, count);
    return runnable => (count > 0 ? pipe(runnable, lift(operator)) : runnable);
};

class SomeSatisfySink extends AbstractSink {
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

class TakeFirstSink extends AbstractAutoDisposingDelegatingSink {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.count = 0;
    }
}
TakeFirstSink.prototype.notify = notifyTakeFirst;
const takeFirst = (options = {}) => {
    const { count = 1 } = options;
    const operator = (sink) => new TakeFirstSink(sink, count);
    return observable => count > 0 ? pipe(observable, lift(operator)) : empty(fromArrayT);
};

function onDispose(error) {
    if (isSome(error)) {
        this.last.length = 0;
        pipe(this.delegate, dispose(error));
    }
    else {
        fromArray()(this.last).run(this.delegate);
    }
}
class TakeLastSink extends AbstractDelegatingSink {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.last = [];
        addTeardown(this, onDispose);
    }
}
TakeLastSink.prototype.notify = notifyTakeLast;
const takeLast = (options = {}) => {
    const { count = 1 } = options;
    const operator = (sink) => new TakeLastSink(sink, count);
    return runnable => count > 0 ? pipe(runnable, lift(operator)) : empty(fromArrayT);
};

class TakeWhileSink extends AbstractAutoDisposingDelegatingSink {
    constructor(delegate, predicate, inclusive) {
        super(delegate);
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
}
TakeWhileSink.prototype.notify = notifyTakeWhile;
const takeWhile = (predicate, options = {}) => {
    const { inclusive = false } = options;
    const operator = (sink) => new TakeWhileSink(sink, predicate, inclusive);
    return lift(operator);
};

class ToArraySink extends AbstractSink {
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

export { concat, concatAll, contains, createRunnable, distinctUntilChanged, everySatisfy, first, forEach, fromArray, fromArrayT, generate, keep, keepT, last, lift, map, noneSatisfy, onNotify, pairwise, reduce, repeat, scan, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, toArray, toRunnable, type, using };

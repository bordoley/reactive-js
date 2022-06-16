/// <reference types="./runnable.d.ts" />
import { pipe, ignore, raise, strictEquality, compose, negate, alwaysTrue, isEqualTo, identity } from './functions.mjs';
import { AbstractDisposable, addDisposable, bindDisposables, addDisposableDisposeParentOnChildError, dispose, addTeardown } from './disposable.mjs';
import { isSome, none, isNone } from './option.mjs';
import { __DEV__ } from './env.mjs';
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
        const { error } = sink;
        if (isSome(error)) {
            throw error.cause;
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
    }
}
const lift = (operator) => runnable => {
    const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;
    const allFunctions = runnable instanceof LiftedRunnable
        ? [operator, ...runnable.operators]
        : [operator];
    return new LiftedRunnable(src, allFunctions);
};

const assertSinkStateProduction = ignore;
const assertSinkStateDev = (observer) => {
    if (observer.isDisposed) {
        raise("Sink is disposed");
    }
};
const _assertSinkState = __DEV__
    ? assertSinkStateDev
    : assertSinkStateProduction;
const assertSinkState = _assertSinkState;
class AbstractSink extends AbstractDisposable {
}
class AbstractDelegatingSink extends AbstractSink {
    constructor(delegate) {
        super();
        this.delegate = delegate;
        addDisposable(delegate, this);
    }
}
class AbstractAutoDisposingDelegatingSink extends AbstractSink {
    constructor(delegate) {
        super();
        this.delegate = delegate;
        bindDisposables(this, delegate);
    }
}
class DelegatingSink extends AbstractSink {
    constructor(delegate) {
        super();
        this.delegate = delegate;
        addDisposable(delegate, this);
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
const createDelegatingSink = (delegate) => new DelegatingSink(delegate);

function concat(...runnables) {
    return createRunnable((sink) => {
        const runnablesLength = runnables.length;
        for (let i = 0; i < runnablesLength && !sink.isDisposed; i++) {
            const concatSink = createDelegatingSink(sink);
            addDisposableDisposeParentOnChildError(sink, concatSink);
            runnables[i].run(concatSink);
        }
        sink.dispose();
    });
}
class FlattenSink extends AbstractDelegatingSink {
    notify(next) {
        const concatSink = createDelegatingSink(this.delegate);
        addDisposableDisposeParentOnChildError(concatSink, concatSink);
        next.run(createDelegatingSink(this.delegate));
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
    notify(next) {
        const shouldEmit = !this.hasValue || !this.equality(this.prev, next);
        if (shouldEmit) {
            this.prev = next;
            this.hasValue = true;
            this.delegate.notify(next);
        }
    }
}
const distinctUntilChanged = (options = {}) => {
    const { equality = strictEquality } = options;
    const operator = (sink) => new DistinctUntilChangedSink(sink, equality);
    return lift(operator);
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
const everySatisfy = (predicate) => runnable => {
    const sink = new EverySatisfySink(predicate);
    runnable.run(sink);
    return sink.result;
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
const first = (runnable) => {
    const sink = new FirstSink();
    runnable.run(sink);
    return sink.result;
};

class ForEachSink extends AbstractSink {
    constructor(notify) {
        super();
        this.notify = notify;
    }
}
const forEach = (f) => runnable => runnable.run(new ForEachSink(f));

const fromArray = (options = {}) => values => {
    var _a, _b;
    const valuesLength = values.length;
    const startIndex = Math.min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = Math.max(Math.min((_b = options.endIndex) !== null && _b !== void 0 ? _b : values.length, valuesLength), 0);
    const run = (sink) => {
        for (let index = startIndex; index < endIndex && !sink.isDisposed; index++) {
            sink.notify(values[index]);
        }
        sink.dispose();
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
    notify(next) {
        assertSinkState(this);
        if (this.predicate(next)) {
            this.delegate.notify(next);
        }
    }
}
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
const last = (runnable) => {
    const sink = new LastSink();
    runnable.run(sink);
    return sink.result;
};

class MapSink extends AbstractAutoDisposingDelegatingSink {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
    }
    notify(next) {
        assertSinkState(this);
        const mapped = this.mapper(next);
        this.delegate.notify(mapped);
    }
}
const map = (mapper) => {
    const operator = (sink) => new MapSink(sink, mapper);
    return lift(operator);
};

class ReducerSink extends AbstractSink {
    constructor(acc, reducer) {
        super();
        this.acc = acc;
        this.reducer = reducer;
    }
    notify(next) {
        this.acc = this.reducer(this.acc, next);
    }
}
const reduce = (reducer, initialValue) => runnable => {
    const sink = new ReducerSink(initialValue(), reducer);
    runnable.run(sink);
    return sink.acc;
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
            runnable.run(createDelegatingSink(sink));
            count++;
        } while (!sink.isDisposed && shouldRepeat(count));
        sink.dispose();
    });
}

class ScanSink extends AbstractAutoDisposingDelegatingSink {
    constructor(delegate, scanner, acc) {
        super(delegate);
        this.scanner = scanner;
        this.acc = acc;
    }
    notify(next) {
        const nextAcc = this.scanner(this.acc, next);
        this.acc = nextAcc;
        this.delegate.notify(nextAcc);
    }
}
const scan = (scanner, initialValue) => {
    const operator = (sink) => new ScanSink(sink, scanner, initialValue());
    return lift(operator);
};

class SkipFirstSink extends AbstractAutoDisposingDelegatingSink {
    constructor(delegate, skipCount) {
        super(delegate);
        this.skipCount = skipCount;
        this.count = 0;
    }
    notify(next) {
        this.count++;
        if (this.count > this.skipCount) {
            this.delegate.notify(next);
        }
    }
}
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
const someSatisfy = (predicate) => runnable => {
    const sink = new SomeSatisfySink(predicate);
    runnable.run(sink);
    return sink.result;
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
    notify(next) {
        assertSinkState(this);
        this.count++;
        this.delegate.notify(next);
        if (this.count >= this.maxCount) {
            pipe(this, dispose());
        }
    }
}
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
    notify(next) {
        assertSinkState(this);
        const last = this.last;
        last.push(next);
        if (last.length > this.maxCount) {
            last.shift();
        }
    }
}
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
    notify(next) {
        const satisfiesPredicate = this.predicate(next);
        if (satisfiesPredicate || this.inclusive) {
            this.delegate.notify(next);
        }
        if (!satisfiesPredicate) {
            pipe(this, dispose());
        }
    }
}
const takeWhile = (predicate, options = {}) => {
    const { inclusive = false } = options;
    const operator = (sink) => new TakeWhileSink(sink, predicate, inclusive);
    return lift(operator);
};

class ToArraySink extends AbstractSink {
    constructor() {
        super(...arguments);
        this.acc = [];
    }
    notify(next) {
        this.acc.push(next);
    }
}
const _toArray = (runnable) => {
    const sink = new ToArraySink();
    runnable.run(sink);
    return sink.acc;
};
/**
 * Accumulates all values emitted by `runnable` into an array.
 *
 */
const toArray = () => _toArray;

const toRunnable = () => identity;
const type = undefined;

export { AbstractDelegatingSink, concat, concatAll, contains, createRunnable, distinctUntilChanged, everySatisfy, first, forEach, fromArray, fromArrayT, generate, keep, keepT, last, lift, map, noneSatisfy, reduce, repeat, scan, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, toArray, toRunnable, type };

import { pipe, returns, compose, strictEquality, negate, alwaysTrue, isEqualTo, identity } from './functions.mjs';
import { none, isNone } from './option.mjs';

const sinkDone = Symbol("@reactive-js/core/lib/runnable/sinkDone");
class AbstractSink {
    constructor() {
        this.isDone = false;
    }
    done() {
        if (!this.isDone) {
            this.isDone = true;
            throw sinkDone;
        }
    }
}
class AbstractDelegatingSink {
    constructor(delegate) {
        this.delegate = delegate;
    }
    get isDone() {
        return this.delegate.isDone;
    }
    done() {
        this.delegate.done();
    }
}

class RunnableImpl {
    constructor(_run) {
        this._run = _run;
    }
    run(sink) {
        try {
            this._run(sink);
        }
        catch (e) {
            if (e !== sinkDone) {
                throw e;
            }
        }
    }
}
const createRunnable = (run) => new RunnableImpl(run);

const _fromValue = (value) => createRunnable(sink => {
    sink.notify(value);
    sink.done();
});
const fromValue = () => _fromValue;

const _compute = (f) => createRunnable(sink => pipe(f(), fromValue()).run(sink));
const compute = () => _compute;

const fromArray = (options = {}) => values => {
    var _a, _b;
    const valuesLength = values.length;
    const startIndex = Math.min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = Math.max(Math.min((_b = options.endIndex) !== null && _b !== void 0 ? _b : values.length, valuesLength), 0);
    const run = (sink) => {
        for (let index = startIndex; index < endIndex; index++) {
            sink.notify(values[index]);
        }
        sink.done();
    };
    return createRunnable(run);
};

class LiftedRunnable {
    constructor(src, operators) {
        this.src = src;
        this.operators = operators;
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

class MapSink extends AbstractDelegatingSink {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
    }
    notify(next) {
        const mapped = this.mapper(next);
        this.delegate.notify(mapped);
    }
}
const map = (mapper) => {
    const operator = (sink) => new MapSink(sink, mapper);
    return lift(operator);
};
const mapTo = (value) => map(returns(value));

const concatSinkDone = Symbol("@reactive-js/core/lib/runnable/concatSinkDone");
class ConcatSink {
    constructor(delegate) {
        this.delegate = delegate;
        this.isDone = false;
    }
    done() {
        if (!this.isDone) {
            this.isDone = true;
            throw concatSinkDone;
        }
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
const runConcatUnsafe = (runnable, sink) => {
    try {
        runnable.run(new ConcatSink(sink));
    }
    catch (e) {
        if (e !== concatSinkDone) {
            throw e;
        }
    }
};
function concat(...runnables) {
    return createRunnable((sink) => {
        const runnablesLength = runnables.length;
        for (let i = 0; i < runnablesLength; i++) {
            runConcatUnsafe(runnables[i], sink);
        }
        sink.done();
    });
}
const concatWith = (snd) => first => concat(first, snd);
function endWith(...values) {
    return concatWith(fromArray()(values));
}
function startWith(...values) {
    return obs => concat(fromArray()(values), obs);
}
class FlattenSink extends AbstractDelegatingSink {
    notify(next) {
        runConcatUnsafe(next, this.delegate);
    }
}
const _concatAll = lift(s => new FlattenSink(s));
const concatAll = () => _concatAll;
const concatMap = (mapper) => compose(map(mapper), concatAll());

class DistinctUntilChangedSink extends AbstractDelegatingSink {
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

const _empty = createRunnable(sink => {
    sink.done();
});
const empty = () => _empty;

class EverySatisfySink extends AbstractSink {
    constructor(predicate) {
        super();
        this.predicate = predicate;
        this.result = true;
    }
    notify(next) {
        if (!this.predicate(next)) {
            this.result = false;
            this.done();
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
        this.done();
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

const generate = (generator, initialValue) => {
    const run = (sink) => {
        let acc = initialValue();
        while (true) {
            acc = generator(acc);
            sink.notify(acc);
        }
    };
    return createRunnable(run);
};

class KeepTypeSink extends AbstractDelegatingSink {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
    notify(next) {
        if (this.predicate(next)) {
            this.delegate.notify(next);
        }
    }
}
const keepType = (predicate) => {
    const operator = (sink) => new KeepTypeSink(sink, predicate);
    return lift(operator);
};
const keep = (predicate) => keepType(predicate);

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

class RepeatSink {
    constructor(delegate) {
        this.delegate = delegate;
        this.isDone = false;
    }
    notify(next) {
        this.delegate.notify(next);
    }
    done() { }
}
function repeat(predicate) {
    const shouldRepeat = isNone(predicate)
        ? alwaysTrue
        : typeof predicate === "number"
            ? (count) => count < predicate
            : (count) => predicate(count);
    return runnable => createRunnable(sink => {
        let count = 0;
        do {
            runnable.run(new RepeatSink(sink));
            count++;
        } while (!sink.isDone && shouldRepeat(count));
    });
}

class ScanSink extends AbstractDelegatingSink {
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

class SkipFirstSink extends AbstractDelegatingSink {
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
            this.done();
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

class TakeFirstSink extends AbstractDelegatingSink {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.count = 0;
    }
    notify(next) {
        this.count++;
        this.delegate.notify(next);
        if (this.count >= this.maxCount) {
            this.done();
        }
    }
}
const takeFirst = (options = {}) => {
    const { count = 1 } = options;
    const operator = (sink) => new TakeFirstSink(sink, count);
    return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};

class TakeLastSink {
    constructor(delegate, maxCount) {
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.last = [];
    }
    get isDone() {
        return this.delegate.isDone;
    }
    notify(next) {
        const last = this.last;
        last.push(next);
        if (last.length > this.maxCount) {
            last.shift();
        }
    }
    done() {
        if (!this.isDone) {
            fromArray()(this.last).run(this.delegate);
            throw sinkDone;
        }
    }
}
const takeLast = (options = {}) => {
    const { count = 1 } = options;
    const operator = (sink) => new TakeLastSink(sink, count);
    return runnable => (count > 0 ? pipe(runnable, lift(operator)) : empty());
};

class TakeWhileSink extends AbstractDelegatingSink {
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
            this.done();
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

var Runnable = /*#__PURE__*/Object.freeze({
    __proto__: null,
    toRunnable: toRunnable,
    compute: compute,
    concat: concat,
    concatWith: concatWith,
    endWith: endWith,
    startWith: startWith,
    concatAll: concatAll,
    concatMap: concatMap,
    createRunnable: createRunnable,
    distinctUntilChanged: distinctUntilChanged,
    empty: empty,
    everySatisfy: everySatisfy,
    noneSatisfy: noneSatisfy,
    first: first,
    forEach: forEach,
    fromArray: fromArray,
    fromValue: fromValue,
    generate: generate,
    lift: lift,
    keep: keep,
    keepType: keepType,
    last: last,
    map: map,
    mapTo: mapTo,
    reduce: reduce,
    repeat: repeat,
    scan: scan,
    skipFirst: skipFirst,
    someSatisfy: someSatisfy,
    contains: contains,
    AbstractDelegatingSink: AbstractDelegatingSink,
    sinkDone: sinkDone,
    takeFirst: takeFirst,
    takeLast: takeLast,
    takeWhile: takeWhile,
    toArray: toArray
});

export { reduce as A, repeat as B, scan as C, skipFirst as D, someSatisfy as E, AbstractDelegatingSink as F, sinkDone as G, takeFirst as H, takeLast as I, takeWhile as J, Runnable as R, forEach as a, everySatisfy as b, contains as c, compute as d, empty as e, fromArray as f, generate as g, first as h, createRunnable as i, toRunnable as j, concat as k, last as l, concatWith as m, noneSatisfy as n, endWith as o, concatAll as p, concatMap as q, distinctUntilChanged as r, startWith as s, toArray as t, fromValue as u, lift as v, keep as w, keepType as x, map as y, mapTo as z };

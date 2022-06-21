/// <reference types="./sink.d.ts" />
import { fromValue, empty } from './container.mjs';
import { addDisposable, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown, bindDisposables, dispose, addTeardown } from './disposable.mjs';
import { pipe, strictEquality } from './functions.mjs';
import { none } from './option.mjs';

const createDecodeWithCharset = (m, DecodeWithCharsetSink) => {
    DecodeWithCharsetSink.prototype.notify = function notifyDecodeWithCharset(next) {
        const data = this.textDecoder.decode(next, { stream: true });
        if (data.length > 0) {
            this.delegate.notify(data);
        }
    };
    return (charset = "utf-8") => {
        const operator = (delegate) => {
            const textDecoder = new TextDecoder(charset, { fatal: true });
            const sink = new DecodeWithCharsetSink(delegate, textDecoder);
            addDisposable(delegate, sink);
            addOnDisposedWithError(sink, delegate);
            addOnDisposedWithoutErrorTeardown(sink, () => {
                const data = textDecoder.decode();
                if (data.length > 0) {
                    pipe(data, fromValue(m), m.sink(delegate));
                }
                else {
                    delegate.dispose();
                }
            });
            return sink;
        };
        return m.lift(operator);
    };
};
const createDistinctUntilChanged = (m, DistinctUntilChangedSink) => {
    DistinctUntilChangedSink.prototype.notify =
        function notifyDistinctUntilChanged(next) {
            this.assertState();
            const shouldEmit = !this.hasValue || !this.equality(this.prev, next);
            if (shouldEmit) {
                this.prev = next;
                this.hasValue = true;
                this.delegate.notify(next);
            }
        };
    return (options = {}) => {
        const { equality = strictEquality } = options;
        const operator = (delegate) => {
            const sink = new DistinctUntilChangedSink(delegate, equality);
            bindDisposables(sink, delegate);
            return sink;
        };
        return m.lift(operator);
    };
};
const createKeepOperator = (m, KeepSink) => {
    KeepSink.prototype.notify = function notifyKeep(next) {
        this.assertState();
        if (this.predicate(next)) {
            this.delegate.notify(next);
        }
    };
    return (predicate) => {
        const operator = (delegate) => {
            const sink = new KeepSink(delegate, predicate);
            bindDisposables(sink, delegate);
            return sink;
        };
        return m.lift(operator);
    };
};
const createMapOperator = (m, MapSink) => {
    MapSink.prototype.notify = function notifyMap(next) {
        this.assertState();
        const mapped = this.mapper(next);
        this.delegate.notify(mapped);
    };
    return (mapper) => {
        const operator = (delegate) => {
            const sink = new MapSink(delegate, mapper);
            bindDisposables(sink, delegate);
            return sink;
        };
        return m.lift(operator);
    };
};
const createOnNotifyOperator = (m, OnNotifySink) => {
    OnNotifySink.prototype.notify = function notifyOnNotify(next) {
        this.assertState();
        this.onNotify(next);
        this.delegate.notify(next);
    };
    return (onNotify) => {
        const operator = (delegate) => {
            const sink = new OnNotifySink(delegate, onNotify);
            bindDisposables(sink, delegate);
            return sink;
        };
        return m.lift(operator);
    };
};
const createPairwiseOperator = (m, PairwiseSink) => {
    PairwiseSink.prototype.notify = function notifyPairwise(value) {
        this.assertState();
        const prev = this.hasPrev ? this.prev : none;
        this.hasPrev = true;
        this.prev = value;
        this.delegate.notify([prev, value]);
    };
    return () => {
        const operator = (delegate) => {
            const sink = new PairwiseSink(delegate);
            bindDisposables(sink, delegate);
            return sink;
        };
        return m.lift(operator);
    };
};
const createReduceOperator = (m, ReduceSink) => {
    ReduceSink.prototype.notify = function notifyReduce(next) {
        this.assertState();
        this.acc = this.reducer(this.acc, next);
    };
    return (reducer, initialValue) => {
        const operator = (delegate) => {
            const sink = new ReduceSink(delegate, reducer, initialValue());
            addDisposable(delegate, sink);
            addOnDisposedWithError(sink, delegate);
            addOnDisposedWithoutErrorTeardown(sink, () => {
                pipe(sink.acc, fromValue(m), m.sink(delegate));
            });
            return sink;
        };
        return m.lift(operator);
    };
};
const createScanOperator = (m, ScanSink) => {
    ScanSink.prototype.notify = function notifyScan(next) {
        this.assertState();
        const nextAcc = this.reducer(this.acc, next);
        this.acc = nextAcc;
        this.delegate.notify(nextAcc);
    };
    return (reducer, initialValue) => {
        const operator = (delegate) => {
            const sink = new ScanSink(delegate, reducer, initialValue());
            bindDisposables(sink, delegate);
            return sink;
        };
        return m.lift(operator);
    };
};
const createSkipFirstOperator = (m, SkipFirstSink) => {
    SkipFirstSink.prototype.notify = function notifySkipFirst(next) {
        this.count++;
        if (this.count > this.skipCount) {
            this.delegate.notify(next);
        }
    };
    return (options = {}) => {
        const { count = 1 } = options;
        const operator = (delegate) => {
            const sink = new SkipFirstSink(delegate, count);
            bindDisposables(sink, delegate);
            return sink;
        };
        return runnable => count > 0 ? pipe(runnable, m.lift(operator)) : runnable;
    };
};
const createTakeFirstOperator = (m, TakeFirstSink) => {
    TakeFirstSink.prototype.notify = function notifyTakeFirst(next) {
        this.assertState();
        this.count++;
        this.delegate.notify(next);
        if (this.count >= this.maxCount) {
            pipe(this, dispose());
        }
    };
    return (options = {}) => {
        const { count = 1 } = options;
        const operator = (delegate) => {
            const sink = new TakeFirstSink(delegate, count);
            bindDisposables(sink, delegate);
            return sink;
        };
        return source => (count > 0 ? pipe(source, m.lift(operator)) : empty(m));
    };
};
const createTakeLastOperator = (m, TakeLastSink) => {
    TakeLastSink.prototype.notify = function notifyTakeLast(next) {
        this.assertState();
        const last = this.last;
        last.push(next);
        if (last.length > this.maxCount) {
            last.shift();
        }
    };
    return (options = {}) => {
        const { count = 1 } = options;
        const operator = (delegate) => {
            const sink = new TakeLastSink(delegate, count);
            addDisposable(delegate, sink);
            addOnDisposedWithError(sink, delegate);
            addTeardown(sink, () => {
                pipe(sink.last, m.fromArray(), m.sink(delegate));
            });
            return sink;
        };
        return source => (count > 0 ? pipe(source, m.lift(operator)) : empty(m));
    };
};
const createTakeWhileOperator = (m, TakeWhileSink) => {
    TakeWhileSink.prototype.notify = function notifyTakeWhile(next) {
        this.assertState();
        const satisfiesPredicate = this.predicate(next);
        if (satisfiesPredicate || this.inclusive) {
            this.delegate.notify(next);
        }
        if (!satisfiesPredicate) {
            pipe(this, dispose());
        }
    };
    return (predicate, options = {}) => {
        const { inclusive = false } = options;
        const operator = (delegate) => {
            const sink = new TakeWhileSink(delegate, predicate, inclusive);
            addDisposable(sink, delegate);
            return sink;
        };
        return m.lift(operator);
    };
};

export { createDecodeWithCharset, createDistinctUntilChanged, createKeepOperator, createMapOperator, createOnNotifyOperator, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator };

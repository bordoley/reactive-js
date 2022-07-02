/// <reference types="./source.d.ts" />
import { fromValue, empty } from './container.mjs';
import { addTo, onComplete, dispose, onError, isDisposed, onDisposed, add } from './disposable.mjs';
import { __DEV__, MAX_SAFE_INTEGER } from './env.mjs';
import { length, max, pipe, newInstanceWith, isEmpty, newInstance, compose, negate, ignore, identity } from './functions.mjs';
import { AbstractLiftable, DisposableLiftable, getDelegate, lift, createDistinctUntilChangedLiftOperator, createKeepLiftOperator, createMapLiftOperator, createOnNotifyLiftOperator, createPairwiseLiftOperator, createScanLiftOperator, createSkipFirstLiftOperator, createTakeFirstLiftOperator, createTakeWhileLiftOperator, createThrowIfEmptyLiftOperator } from './liftable.mjs';
import { none, isSome } from './option.mjs';
import { forEach } from './readonlyArray.mjs';

const create = (m) => (onSink) => m.create(onSink);
const assertState = (sink) => {
    if (__DEV__) {
        sink.assertState();
    }
};
class AbstractSource extends AbstractLiftable {
}
class DisposableSource extends DisposableLiftable {
}
const notify = (v) => (sink) => {
    sink.notify(v);
    return sink;
};
const notifySink = (sink) => (next) => sink.notify(next);
const sinkInto = (sink) => source => {
    source.sink(sink);
    return source;
};
const sourceFrom = (source) => sink => {
    source.sink(sink);
    return sink;
};
const decorateWithNotify = (SinkClass, notify) => {
    SinkClass.prototype.notify = notify;
};
const createBufferOperator = (m, BufferSink) => {
    decorateWithNotify(BufferSink, function notifyBuffer(next) {
        assertState(this);
        const { buffer, maxBufferSize } = this;
        buffer.push(next);
        if (length(buffer) === maxBufferSize) {
            const buffer = this.buffer;
            this.buffer = [];
            getDelegate(this).notify(buffer);
        }
    });
    return (options = {}) => {
        var _a;
        const maxBufferSize = max((_a = options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER, 1);
        return pipe((delegate) => pipe(BufferSink, newInstanceWith(delegate, maxBufferSize), addTo(delegate), onComplete(function onDispose() {
            const { buffer } = this;
            this.buffer = [];
            if (isEmpty(buffer)) {
                pipe(this, getDelegate, dispose());
            }
            else {
                pipe(buffer, fromValue(m), sinkInto(getDelegate(this)));
            }
        })), lift(m));
    };
};
const createCatchErrorOperator = (m, CatchErrorSink) => (f) => {
    decorateWithNotify(CatchErrorSink, function notifyDelegate(next) {
        getDelegate(this).notify(next);
    });
    return pipe((delegate) => pipe(CatchErrorSink, newInstanceWith(delegate), addTo(delegate, true), onComplete(() => pipe(delegate, dispose())), onError(e => {
        try {
            const result = f(e.cause) || none;
            if (isSome(result)) {
                pipe(result, sinkInto(delegate));
            }
            else {
                pipe(delegate, dispose());
            }
        }
        catch (cause) {
            pipe(delegate, dispose({ cause: { parent: e.cause, cause } }));
        }
    })), lift(m));
};
const createDecodeWithCharsetOperator = (m, DecodeWithCharsetSink) => {
    decorateWithNotify(DecodeWithCharsetSink, function notifyDecodeWithCharset(next) {
        const data = this.textDecoder.decode(next, { stream: true });
        if (!isEmpty(data)) {
            getDelegate(this).notify(data);
        }
    });
    return (charset = "utf-8") => pipe((delegate) => {
        const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
        return pipe(DecodeWithCharsetSink, newInstanceWith(delegate, textDecoder), addTo(delegate), onComplete(() => {
            const data = textDecoder.decode();
            if (!isEmpty(data)) {
                pipe(data, fromValue(m), sinkInto(delegate));
            }
            else {
                pipe(delegate, dispose());
            }
        }));
    }, lift(m));
};
const createDistinctUntilChangedOperator = (m, DistinctUntilChangedSink) => {
    decorateWithNotify(DistinctUntilChangedSink, function notifyDistinctUntilChanged(next) {
        assertState(this);
        const shouldEmit = !this.hasValue || !this.equality(this.prev, next);
        if (shouldEmit) {
            this.prev = next;
            this.hasValue = true;
            getDelegate(this).notify(next);
        }
    });
    return createDistinctUntilChangedLiftOperator(m, DistinctUntilChangedSink);
};
const createSatisfyOperator = (m, SatisfySink, defaultResult) => {
    decorateWithNotify(SatisfySink, function notifyEverySatisfy(next) {
        assertState(this);
        if (this.predicate(next)) {
            const { delegate } = this;
            pipe(delegate, notify(!defaultResult), dispose());
        }
    });
    return (predicate) => pipe((delegate) => pipe(SatisfySink, newInstanceWith(delegate, predicate), addTo(delegate), onComplete(() => {
        if (!isDisposed(delegate)) {
            pipe(defaultResult, fromValue(m), sinkInto(delegate));
        }
    })), lift(m));
};
const createEverySatisfyOperator = (m, EverySatisfySink) => compose(predicate => compose(predicate, negate), createSatisfyOperator(m, EverySatisfySink, true));
const createKeepOperator = (m, KeepSink) => {
    decorateWithNotify(KeepSink, function notifyKeep(next) {
        assertState(this);
        if (this.predicate(next)) {
            getDelegate(this).notify(next);
        }
    });
    return createKeepLiftOperator(m, KeepSink);
};
const createMapOperator = (m, MapSink) => {
    decorateWithNotify(MapSink, function notifyMap(next) {
        assertState(this);
        const mapped = this.mapper(next);
        getDelegate(this).notify(mapped);
    });
    return createMapLiftOperator(m, MapSink);
};
const createOnNotifyOperator = (m, OnNotifySink) => {
    decorateWithNotify(OnNotifySink, function notifyOnNotify(next) {
        assertState(this);
        this.onNotify(next);
        getDelegate(this).notify(next);
    });
    return createOnNotifyLiftOperator(m, OnNotifySink);
};
const createPairwiseOperator = (m, PairwiseSink) => {
    decorateWithNotify(PairwiseSink, function notifyPairwise(value) {
        assertState(this);
        const prev = this.hasPrev ? this.prev : none;
        this.hasPrev = true;
        this.prev = value;
        getDelegate(this).notify([prev, value]);
    });
    return createPairwiseLiftOperator(m, PairwiseSink);
};
const createReduceOperator = (m, ReduceSink) => {
    decorateWithNotify(ReduceSink, function notifyReduce(next) {
        assertState(this);
        this.acc = this.reducer(this.acc, next);
    });
    return (reducer, initialValue) => pipe((delegate) => {
        const sink = pipe(ReduceSink, newInstanceWith(delegate, reducer, initialValue()), addTo(delegate), onComplete(() => {
            pipe(sink.acc, fromValue(m), sinkInto(delegate));
        }));
        return sink;
    }, lift(m));
};
const createScanOperator = (m, ScanSink) => {
    decorateWithNotify(ScanSink, function notifyScan(next) {
        assertState(this);
        const nextAcc = this.reducer(this.acc, next);
        this.acc = nextAcc;
        getDelegate(this).notify(nextAcc);
    });
    return createScanLiftOperator(m, ScanSink);
};
const createSkipFirstOperator = (m, SkipFirstSink) => {
    decorateWithNotify(SkipFirstSink, function notifySkipFirst(next) {
        this.count++;
        if (this.count > this.skipCount) {
            getDelegate(this).notify(next);
        }
    });
    return createSkipFirstLiftOperator(m, SkipFirstSink);
};
const createSomeSatisfyOperator = (m, SomeSatisfySink) => createSatisfyOperator(m, SomeSatisfySink, false);
const createTakeFirstOperator = (m, TakeFirstSink) => {
    decorateWithNotify(TakeFirstSink, function notifyTakeFirst(next) {
        assertState(this);
        this.count++;
        getDelegate(this).notify(next);
        if (this.count >= this.maxCount) {
            pipe(this, dispose());
        }
    });
    return createTakeFirstLiftOperator(m, TakeFirstSink);
};
const createTakeLastOperator = (m, TakeLastSink) => {
    decorateWithNotify(TakeLastSink, function notifyTakeLast(next) {
        assertState(this);
        const { last } = this;
        last.push(next);
        if (length(last) > this.maxCount) {
            last.shift();
        }
    });
    return (options = {}) => {
        const { count = 1 } = options;
        const operator = (delegate) => {
            const sink = pipe(TakeLastSink, newInstanceWith(delegate, count), addTo(delegate), onComplete(() => {
                pipe(sink.last, m.fromArray(), sinkInto(delegate));
            }));
            return sink;
        };
        return source => count > 0
            ? pipe(source, lift(m)(operator))
            : empty(m);
    };
};
const createTakeWhileOperator = (m, TakeWhileSink) => {
    decorateWithNotify(TakeWhileSink, function notifyTakeWhile(next) {
        assertState(this);
        const satisfiesPredicate = this.predicate(next);
        if (satisfiesPredicate || this.inclusive) {
            getDelegate(this).notify(next);
        }
        if (!satisfiesPredicate) {
            pipe(this, dispose());
        }
    });
    return createTakeWhileLiftOperator(m, TakeWhileSink);
};
const createThrowIfEmptyOperator = (m, ThrowIfEmptySink) => {
    decorateWithNotify(ThrowIfEmptySink, function notify(next) {
        assertState(this);
        this.isEmpty = false;
        getDelegate(this).notify(next);
    });
    return createThrowIfEmptyLiftOperator(m, ThrowIfEmptySink);
};
const createFromDisposable = (m) => (disposable) => pipe(disposable, addTo, create(m));
const createNever = (m) => {
    const neverInstance = pipe(ignore, create(m));
    return () => neverInstance;
};
const createOnSink = (m) => (f) => src => pipe((sink) => {
    pipe(src, sinkInto(sink));
    const disposable = f() || none;
    pipe(sink, disposable instanceof Function
        ? onDisposed(disposable)
        : isSome(disposable)
            ? add(disposable)
            : identity);
}, create(m));
const createUsing = (m) => (resourceFactory, sourceFactory) => pipe((sink) => pipe(resourceFactory(), resources => (Array.isArray(resources) ? resources : [resources]), forEach(addTo(sink)), (resources) => sourceFactory(...resources), sinkInto(sink)), create(m));

export { AbstractSource, DisposableSource, assertState, createBufferOperator, createCatchErrorOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createFromDisposable, createKeepOperator, createMapOperator, createNever, createOnNotifyOperator, createOnSink, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, createUsing, notify, notifySink, sinkInto, sourceFrom };

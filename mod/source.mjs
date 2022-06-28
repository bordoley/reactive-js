/// <reference types="./source.d.ts" />
import { fromValue, empty } from './container.mjs';
import { addTo, onComplete, dispose, onError, isDisposed, onDisposed, add } from './disposable.mjs';
import { pipe, compose, negate, ignore, identity } from './functions.mjs';
import { AbstractLiftable, AbstractDisposableLiftable, lift, createDistinctUntilChangedLiftedOperator, createKeepLiftedOperator, createMapLiftedOperator, createOnNotifyLiftedOperator, createPairwiseLiftedOperator, createScanLiftedOperator, createSkipFirstLiftedOperator, createTakeFirstLiftedOperator, createTakeWhileLiftedOperator, createThrowIfEmptyLiftedOperator } from './liftable.mjs';
import { none, isSome } from './option.mjs';
import { forEach } from './readonlyArray.mjs';

const create = (m) => (onSink) => m.create(onSink);
class AbstractSource extends AbstractLiftable {
}
class AbstractDisposableSource extends AbstractDisposableLiftable {
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
const createCatchErrorOperator = (m, CatchErrorSink) => (f) => {
    CatchErrorSink.prototype.notify = function notifyDelegate(next) {
        this.delegate.notify(next);
    };
    return pipe((delegate) => pipe(new CatchErrorSink(delegate), addTo(delegate, true), onComplete(() => pipe(delegate, dispose())), onError(e => {
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
    DecodeWithCharsetSink.prototype.notify = function notifyDecodeWithCharset(next) {
        const data = this.textDecoder.decode(next, { stream: true });
        if (data.length > 0) {
            this.delegate.notify(data);
        }
    };
    return (charset = "utf-8") => pipe((delegate) => {
        const textDecoder = new TextDecoder(charset, { fatal: true });
        return pipe(new DecodeWithCharsetSink(delegate, textDecoder), addTo(delegate), onComplete(() => {
            const data = textDecoder.decode();
            if (data.length > 0) {
                pipe(data, fromValue(m), sinkInto(delegate));
            }
            else {
                pipe(delegate, dispose());
            }
        }));
    }, lift(m));
};
const createDistinctUntilChangedOperator = (m, DistinctUntilChangedSink) => {
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
    return createDistinctUntilChangedLiftedOperator(m, DistinctUntilChangedSink);
};
const createSatisfyOperator = (m, SatisfySink, defaultResult) => {
    SatisfySink.prototype.notify = function notifyEverySatisfy(next) {
        this.assertState();
        if (this.predicate(next)) {
            const { delegate } = this;
            pipe(delegate, notify(!defaultResult), dispose());
        }
    };
    return (predicate) => pipe((delegate) => pipe(new SatisfySink(delegate, predicate), addTo(delegate), onComplete(() => {
        if (!isDisposed(delegate)) {
            pipe(defaultResult, fromValue(m), sinkInto(delegate));
        }
    })), lift(m));
};
const createEverySatisfyOperator = (m, EverySatisfySink) => compose(predicate => compose(predicate, negate), createSatisfyOperator(m, EverySatisfySink, true));
const createKeepOperator = (m, KeepSink) => {
    KeepSink.prototype.notify = function notifyKeep(next) {
        this.assertState();
        if (this.predicate(next)) {
            this.delegate.notify(next);
        }
    };
    return createKeepLiftedOperator(m, KeepSink);
};
const createMapOperator = (m, MapSink) => {
    MapSink.prototype.notify = function notifyMap(next) {
        this.assertState();
        const mapped = this.mapper(next);
        this.delegate.notify(mapped);
    };
    return createMapLiftedOperator(m, MapSink);
};
const createOnNotifyOperator = (m, OnNotifySink) => {
    OnNotifySink.prototype.notify = function notifyOnNotify(next) {
        this.assertState();
        this.onNotify(next);
        this.delegate.notify(next);
    };
    return createOnNotifyLiftedOperator(m, OnNotifySink);
};
const createPairwiseOperator = (m, PairwiseSink) => {
    PairwiseSink.prototype.notify = function notifyPairwise(value) {
        this.assertState();
        const prev = this.hasPrev ? this.prev : none;
        this.hasPrev = true;
        this.prev = value;
        this.delegate.notify([prev, value]);
    };
    return createPairwiseLiftedOperator(m, PairwiseSink);
};
const createReduceOperator = (m, ReduceSink) => {
    ReduceSink.prototype.notify = function notifyReduce(next) {
        this.assertState();
        this.acc = this.reducer(this.acc, next);
    };
    return (reducer, initialValue) => pipe((delegate) => {
        const sink = pipe(new ReduceSink(delegate, reducer, initialValue()), addTo(delegate), onComplete(() => {
            pipe(sink.acc, fromValue(m), sinkInto(delegate));
        }));
        return sink;
    }, lift(m));
};
const createScanOperator = (m, ScanSink) => {
    ScanSink.prototype.notify = function notifyScan(next) {
        this.assertState();
        const nextAcc = this.reducer(this.acc, next);
        this.acc = nextAcc;
        this.delegate.notify(nextAcc);
    };
    return createScanLiftedOperator(m, ScanSink);
};
const createSkipFirstOperator = (m, SkipFirstSink) => {
    SkipFirstSink.prototype.notify = function notifySkipFirst(next) {
        this.count++;
        if (this.count > this.skipCount) {
            this.delegate.notify(next);
        }
    };
    return createSkipFirstLiftedOperator(m, SkipFirstSink);
};
const createSomeSatisfyOperator = (m, SomeSatisfySink) => createSatisfyOperator(m, SomeSatisfySink, false);
const createTakeFirstOperator = (m, TakeFirstSink) => {
    TakeFirstSink.prototype.notify = function notifyTakeFirst(next) {
        this.assertState();
        this.count++;
        this.delegate.notify(next);
        if (this.count >= this.maxCount) {
            pipe(this, dispose());
        }
    };
    return createTakeFirstLiftedOperator(m, TakeFirstSink);
};
const createTakeLastOperator = (m, TakeLastSink) => {
    TakeLastSink.prototype.notify = function notifyTakeLast(next) {
        this.assertState();
        const { last } = this;
        last.push(next);
        if (last.length > this.maxCount) {
            last.shift();
        }
    };
    return (options = {}) => {
        const { count = 1 } = options;
        const operator = (delegate) => {
            const sink = pipe(new TakeLastSink(delegate, count), addTo(delegate), onComplete(() => {
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
    return createTakeWhileLiftedOperator(m, TakeWhileSink);
};
const createThrowIfEmptyOperator = (m, ThrowIfEmptySink) => {
    ThrowIfEmptySink.prototype.notify = function notify(next) {
        this.assertState();
        this.isEmpty = false;
        this.delegate.notify(next);
    };
    return createThrowIfEmptyLiftedOperator(m, ThrowIfEmptySink);
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

export { AbstractDisposableSource, AbstractSource, createCatchErrorOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createFromDisposable, createKeepOperator, createMapOperator, createNever, createOnNotifyOperator, createOnSink, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, createUsing, notify, notifySink, sinkInto, sourceFrom };

/// <reference types="./source.d.ts" />
import { fromValue, empty } from './container.mjs';
import { addDisposable, addOnDisposedWithoutError, addOnDisposedWithErrorTeardown, dispose, addDisposableDisposeParentOnChildError, addOnDisposedWithoutErrorTeardown } from './disposable.mjs';
import { pipe, compose, negate } from './functions.mjs';
import { AbstractLiftable, AbstractDisposableLiftable, createDistinctUntilChangedLiftedOperator, createKeepLiftedOperator, createMapLiftedOperator, createOnNotifyLiftedOperator, createPairwiseLiftedOperator, createScanLiftedOperator, createSkipFirstLiftedOperator, createTakeFirstLiftdOperator, createTakeWhileLiftedOperator, createThrowIfEmptyLiftedOperator } from './liftable.mjs';
import { none, isSome } from './option.mjs';

class AbstractSource extends AbstractLiftable {
}
class AbstractDisposableSource extends AbstractDisposableLiftable {
}
const sinkInto = (sink) => source => source.sink(sink);
const createCatchErrorOperator = (m, CatchErrorSink) => (onError) => {
    CatchErrorSink.prototype.notify = function notifyDelegate(next) {
        this.delegate.notify(next);
    };
    const operator = (delegate) => {
        const sink = new CatchErrorSink(delegate);
        addDisposable(delegate, sink);
        addOnDisposedWithoutError(sink, delegate);
        addOnDisposedWithErrorTeardown(sink, cause => {
            try {
                const result = onError(cause) || none;
                if (isSome(result)) {
                    pipe(result, sinkInto(delegate));
                }
                else {
                    pipe(delegate, dispose());
                }
            }
            catch (cause) {
                pipe(delegate, dispose({ cause: { parent: cause, cause } }));
            }
        });
        return sink;
    };
    return m.lift(operator);
};
const createDecodeWithCharsetOperator = (m, DecodeWithCharsetSink) => {
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
            addDisposableDisposeParentOnChildError(delegate, sink);
            addOnDisposedWithoutErrorTeardown(sink, () => {
                const data = textDecoder.decode();
                if (data.length > 0) {
                    pipe(data, fromValue(m), sinkInto(delegate));
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
            delegate.notify(!defaultResult);
            delegate.dispose();
        }
    };
    return (predicate) => {
        const operator = (delegate) => {
            const sink = new SatisfySink(delegate, predicate);
            addDisposableDisposeParentOnChildError(delegate, sink);
            addOnDisposedWithoutErrorTeardown(sink, () => {
                if (!delegate.isDisposed) {
                    pipe(defaultResult, fromValue(m), sinkInto(delegate));
                }
            });
            return sink;
        };
        return m.lift(operator);
    };
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
    return (reducer, initialValue) => {
        const operator = (delegate) => {
            const sink = new ReduceSink(delegate, reducer, initialValue());
            addDisposableDisposeParentOnChildError(delegate, sink);
            addOnDisposedWithoutErrorTeardown(sink, () => {
                pipe(sink.acc, fromValue(m), sinkInto(delegate));
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
    return createTakeFirstLiftdOperator(m, TakeFirstSink);
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
            const sink = new TakeLastSink(delegate, count);
            addDisposableDisposeParentOnChildError(delegate, sink);
            addOnDisposedWithoutErrorTeardown(sink, () => {
                pipe(sink.last, m.fromArray(), sinkInto(delegate));
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
const createUsing = (UsingSource) => {
    UsingSource.prototype.sink = function sink(sink) {
        try {
            const resources = this.resourceFactory();
            const resourcesArray = Array.isArray(resources) ? resources : [resources];
            const source = this.sourceFactory(...resourcesArray);
            for (const r of resourcesArray) {
                addDisposableDisposeParentOnChildError(sink, r);
            }
            pipe(source, sinkInto(sink));
        }
        catch (cause) {
            sink.dispose({ cause });
        }
    };
    const using = (resourceFactory, sourceFactoryFactory) => new UsingSource(resourceFactory, sourceFactoryFactory);
    return using;
};

export { AbstractDisposableSource, AbstractSource, createCatchErrorOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createKeepOperator, createMapOperator, createOnNotifyOperator, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, createUsing, sinkInto };

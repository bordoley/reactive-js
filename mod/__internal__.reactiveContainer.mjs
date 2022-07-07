/// <reference types="./__internal__.reactiveContainer.d.ts" />
import { getDelegate } from './__internal__.delegating.mjs';
import { lift } from './__internal__.liftable.mjs';
import { forEach } from './__internal__.readonlyArray.mjs';
import { fromValue, empty } from './container.mjs';
import { addTo, onComplete, dispose, onError, isDisposed, onDisposed, add } from './disposable.mjs';
import { pipe, newInstanceWith, newInstance, isEmpty, compose, negate, ignore, identity, getLength } from './functions.mjs';
import { none, isSome } from './option.mjs';
import { sinkInto } from './reactiveContainer.mjs';
import { notify } from './reactiveSink.mjs';

const create = (m) => (onSink) => m.create(onSink);
const createCatchErrorOperator = (m, CatchErrorSink) => (f) => {
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
const createDecodeWithCharsetOperator = (m, DecodeWithCharsetSink) => (charset = "utf-8") => pipe((delegate) => {
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
const createSatisfyOperator = (m, SatisfySink, defaultResult) => (predicate) => pipe((delegate) => pipe(SatisfySink, newInstanceWith(delegate, predicate), addTo(delegate), onComplete(() => {
    if (!isDisposed(delegate)) {
        pipe(defaultResult, fromValue(m), sinkInto(delegate));
    }
})), lift(m));
const createEverySatisfyOperator = (m, EverySatisfySink) => compose(predicate => compose(predicate, negate), createSatisfyOperator(m, EverySatisfySink, true));
const createSomeSatisfyOperator = (m, SomeSatisfySink) => createSatisfyOperator(m, SomeSatisfySink, false);
const createReduceOperator = (m, ReduceSink) => (reducer, initialValue) => pipe((delegate) => {
    const sink = pipe(ReduceSink, newInstanceWith(delegate, reducer, initialValue()), addTo(delegate), onComplete(() => {
        pipe(sink.acc, fromValue(m), sinkInto(delegate));
    }));
    return sink;
}, lift(m));
const createTakeLastOperator = (m, TakeLastSink) => (options = {}) => {
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
const decorateWithNotify = (SinkClass, notify) => {
    SinkClass.prototype.notify = notify;
};
const decorateWithCatchErrorNotify = (CatchErrorSink) => decorateWithNotify(CatchErrorSink, function notifyCatchError(next) {
    getDelegate(this).notify(next);
});
const decorateWithDecodeWithCharsetNotify = (DecodeWithCharsetSink) => decorateWithNotify(DecodeWithCharsetSink, function notifyDecodeWithCharset(next) {
    const data = this.textDecoder.decode(next, { stream: true });
    if (!isEmpty(data)) {
        getDelegate(this).notify(data);
    }
});
const decorateWithDistinctUntilChangedNotify = (DistinctUntilChangedSink) => decorateWithNotify(DistinctUntilChangedSink, function notifyDistinctUntilChanged(next) {
    const shouldEmit = !this.hasValue || !this.equality(this.prev, next);
    if (shouldEmit) {
        this.prev = next;
        this.hasValue = true;
        getDelegate(this).notify(next);
    }
});
const decorateWithKeepNotify = (KeepSink) => decorateWithNotify(KeepSink, function notifyKeep(next) {
    if (this.predicate(next)) {
        getDelegate(this).notify(next);
    }
});
const decorateWithMapNotify = (MapSink) => decorateWithNotify(MapSink, function notifyMap(next) {
    const mapped = this.mapper(next);
    getDelegate(this).notify(mapped);
});
const decorateWithOnNotifyNotify = (OnNotifySink) => decorateWithNotify(OnNotifySink, function notifyOnNotify(next) {
    this.onNotify(next);
    getDelegate(this).notify(next);
});
const decorateWithPairwiseNotify = (PairwiseSink) => decorateWithNotify(PairwiseSink, function notifyPairwise(value) {
    const prev = this.hasPrev ? this.prev : none;
    this.hasPrev = true;
    this.prev = value;
    getDelegate(this).notify([prev, value]);
});
const decorateWithScanNotify = (ScanSink) => decorateWithNotify(ScanSink, function notifyScan(next) {
    const nextAcc = this.reducer(this.acc, next);
    this.acc = nextAcc;
    getDelegate(this).notify(nextAcc);
});
const decorateWithReduceNotify = (ReduceSink) => decorateWithNotify(ReduceSink, function notifyReduce(next) {
    this.acc = this.reducer(this.acc, next);
});
const decorateWithSatisfyNotify = (SatisfySink, defaultResult) => decorateWithNotify(SatisfySink, function notifyEverySatisfy(next) {
    if (this.predicate(next)) {
        const { delegate } = this;
        pipe(delegate, notify(!defaultResult), dispose());
    }
});
const decorateWithEverySatisfyNotify = (SatisfySink) => decorateWithSatisfyNotify(SatisfySink, true);
const decorateWithSomeSatisfyNotify = (SatisfySink) => decorateWithSatisfyNotify(SatisfySink, false);
const decorateWithSkipFirstNotify = (SkipFirstSink) => decorateWithNotify(SkipFirstSink, function notifySkipFirst(next) {
    this.count++;
    if (this.count > this.skipCount) {
        getDelegate(this).notify(next);
    }
});
const decorateWithTakeFirstNotify = (TakeFirstSink) => decorateWithNotify(TakeFirstSink, function notifyTakeFirst(next) {
    this.count++;
    getDelegate(this).notify(next);
    if (this.count >= this.maxCount) {
        pipe(this, dispose());
    }
});
const decorateWithTakeLastNotify = (TakeLastSink) => decorateWithNotify(TakeLastSink, function notifyTakeLast(next) {
    const { last } = this;
    last.push(next);
    if (getLength(last) > this.maxCount) {
        last.shift();
    }
});
const decorateWithTakeWhileNotify = (TakeWhileSink) => decorateWithNotify(TakeWhileSink, function notifyTakeWhile(next) {
    const satisfiesPredicate = this.predicate(next);
    if (satisfiesPredicate || this.inclusive) {
        getDelegate(this).notify(next);
    }
    if (!satisfiesPredicate) {
        pipe(this, dispose());
    }
});
const decorateWithThrowIfEmptyNotify = (ThrowIfEmptySink) => {
    decorateWithNotify(ThrowIfEmptySink, function notify(next) {
        this.isEmpty = false;
        getDelegate(this).notify(next);
    });
};

export { createCatchErrorOperator, createDecodeWithCharsetOperator, createEverySatisfyOperator, createFromDisposable, createNever, createOnSink, createReduceOperator, createSomeSatisfyOperator, createTakeLastOperator, createUsing, decorateWithCatchErrorNotify, decorateWithDecodeWithCharsetNotify, decorateWithDistinctUntilChangedNotify, decorateWithEverySatisfyNotify, decorateWithKeepNotify, decorateWithMapNotify, decorateWithOnNotifyNotify, decorateWithPairwiseNotify, decorateWithReduceNotify, decorateWithScanNotify, decorateWithSkipFirstNotify, decorateWithSomeSatisfyNotify, decorateWithTakeFirstNotify, decorateWithTakeLastNotify, decorateWithTakeWhileNotify, decorateWithThrowIfEmptyNotify };

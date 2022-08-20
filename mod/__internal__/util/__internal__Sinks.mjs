/// <reference types="./__internal__Sinks.d.ts" />
import { pipe, none, getLength, returns, isEmpty, isSome, newInstance, compose, negate } from '../../functions.mjs';
import { sinkInto } from '../../rx/ReactiveContainerLike.mjs';
import { EnumeratorLike_hasCurrent, EnumeratorLike_current, SinkLike_notify, SourceLike_move } from '../../util.mjs';
import { j as onDisposed, i as isDisposed, g as addTo, o as onComplete, f as dispose, k as addToIgnoringChildErrors, l as onError } from '../../DisposableLike-c856ff07.mjs';
import { notify } from '../../util/SinkLike.mjs';
import { disposableMixin, delegatingDisposableMixin } from './__internal__Disposables.mjs';
import { createInstanceFactory, mixin, include, init, props } from './__internal__Objects.mjs';

const Sink_private_delegate = Symbol("Sink_private_delegate");
const createEnumeratorSink = (() => {
    return createInstanceFactory(mixin(include(disposableMixin), function EnumeratorSink(instance) {
        init(disposableMixin, instance);
        instance.buffer = [];
        pipe(instance, onDisposed(() => {
            instance.buffer.length = 0;
            instance[EnumeratorLike_hasCurrent] = false;
        }));
        return instance;
    }, props({
        buffer: none,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
    }), {
        [SinkLike_notify](next) {
            if (isDisposed(this)) {
                return;
            }
            this.buffer.push(next);
        },
        [SourceLike_move]() {
            const { buffer } = this;
            if (!isDisposed(this) && getLength(buffer) > 0) {
                const next = buffer.shift();
                this[EnumeratorLike_current] = next;
                this[EnumeratorLike_hasCurrent] = true;
            }
            else {
                this[EnumeratorLike_hasCurrent] = false;
            }
        },
    }));
})();
const createSink = /*@__PURE__*/ (() => createInstanceFactory(mixin(include(disposableMixin), function CreateSink(instance) {
    init(disposableMixin, instance);
    return instance;
}, {}, {
    [SinkLike_notify](_) { },
})))();
const DelegatingSink_delegate = Symbol("DelegatingSink_delegate");
const delegatingSinkMixin = /*@__PURE__*/ (() => {
    return returns(mixin(include(disposableMixin), function DelegatingSink(instance, delegate) {
        init(disposableMixin, instance);
        instance[DelegatingSink_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingSink_delegate]: none,
    }), {
        [SinkLike_notify](v) {
            this[DelegatingSink_delegate][SinkLike_notify](v);
        },
    }));
})();
const createDelegatingSink = 
/*@__PURE__*/ (() => {
    const typeDelegatingSinkMixin = delegatingSinkMixin();
    return createInstanceFactory(typeDelegatingSinkMixin);
})();
const bufferSinkMixin = (fromArray) => {
    const BufferSink_private_maxBufferSize = Symbol("BufferSink_private_maxBufferSize");
    const BufferSink_private_buffer = Symbol("BufferSink_private_buffer");
    return mixin(include(disposableMixin), function BufferSink(instance, delegate, maxBufferSize) {
        init(disposableMixin, instance);
        instance[Sink_private_delegate] = delegate;
        instance[BufferSink_private_maxBufferSize] = maxBufferSize;
        instance[BufferSink_private_buffer] = [];
        pipe(instance, addTo(delegate), onComplete(() => {
            const { [BufferSink_private_buffer]: buffer } = instance;
            instance[BufferSink_private_buffer] = [];
            if (isEmpty(buffer)) {
                pipe(instance[Sink_private_delegate], dispose());
            }
            else {
                pipe([buffer], fromArray, sinkInto(instance[Sink_private_delegate]));
            }
        }));
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [BufferSink_private_maxBufferSize]: 0,
        [BufferSink_private_buffer]: none,
    }), {
        [SinkLike_notify](next) {
            const { [BufferSink_private_buffer]: buffer, [BufferSink_private_maxBufferSize]: maxBufferSize, } = this;
            buffer.push(next);
            if (getLength(buffer) === maxBufferSize) {
                const buffer = this[BufferSink_private_buffer];
                this[BufferSink_private_buffer] = [];
                pipe(this[Sink_private_delegate], notify(buffer));
            }
        },
    });
};
const catchErrorSinkMixin = 
/*@__PURE__*/ (() => {
    return returns(mixin(include(disposableMixin), function CatchErrorSink(instance, delegate, errorHandler) {
        init(disposableMixin, instance);
        instance[Sink_private_delegate] = delegate;
        pipe(instance, addToIgnoringChildErrors(delegate), onComplete(() => {
            pipe(delegate, dispose());
        }), onError((e) => {
            try {
                const result = errorHandler(e.cause) || none;
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
        }));
        return instance;
    }, props({
        [Sink_private_delegate]: none,
    }), {
        [SinkLike_notify](next) {
            this[Sink_private_delegate][SinkLike_notify](next);
        },
    }));
})();
const decodeWithCharsetSinkMixin = (fromArray) => {
    const DecodeWithCharsetSink_private_textDecoder = Symbol("DecodeWithCharsetSink_private_textDecoder");
    return mixin(include(disposableMixin), function DecodeWithCharsetSink(instance, delegate, charset) {
        init(disposableMixin, instance);
        const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
        instance[DecodeWithCharsetSink_private_textDecoder] = textDecoder;
        instance[Sink_private_delegate] = delegate;
        pipe(instance, addTo(delegate), onComplete(() => {
            const data = textDecoder.decode();
            if (!isEmpty(data)) {
                pipe([data], fromArray, sinkInto(delegate));
            }
            else {
                pipe(delegate, dispose());
            }
        }));
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [DecodeWithCharsetSink_private_textDecoder]: none,
    }), {
        [SinkLike_notify](next) {
            const data = this[DecodeWithCharsetSink_private_textDecoder].decode(next, { stream: true });
            if (!isEmpty(data)) {
                pipe(this[Sink_private_delegate], notify(data));
            }
        },
    });
};
const distinctUntilChangedSinkMixin = /*@__PURE__*/ (() => {
    const DistinctUntilChangedSink_private_equality = Symbol("DistinctUntilChangedSink_private_equality");
    const DistinctUntilChangedSink_private_prev = Symbol("DistinctUntilChangedSink_private_prev");
    const DistinctUntilChangedSink_private_hasValue = Symbol("DistinctUntilChangedSink_private_hasValue");
    return returns(mixin(include(delegatingDisposableMixin), function DistinctUntilChangedSink(instance, delegate, equality) {
        init(delegatingDisposableMixin, instance, delegate);
        instance[Sink_private_delegate] = delegate;
        instance[DistinctUntilChangedSink_private_equality] = equality;
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [DistinctUntilChangedSink_private_equality]: none,
        [DistinctUntilChangedSink_private_prev]: none,
        [DistinctUntilChangedSink_private_hasValue]: false,
    }), {
        [SinkLike_notify](next) {
            const shouldEmit = !this[DistinctUntilChangedSink_private_hasValue] ||
                !this[DistinctUntilChangedSink_private_equality](this[DistinctUntilChangedSink_private_prev], next);
            if (shouldEmit) {
                this[DistinctUntilChangedSink_private_prev] = next;
                this[DistinctUntilChangedSink_private_hasValue] = true;
                pipe(this[Sink_private_delegate], notify(next));
            }
        },
    }));
})();
const everySatisfySinkMixin = (fromArray) => {
    const typedSatisfySinkMixin = satisfySinkMixin(fromArray, true);
    return mixin(include(typedSatisfySinkMixin), function EverySatisfySink(instance, delegate, predicate) {
        init(typedSatisfySinkMixin, instance, delegate, compose(predicate, negate));
        return instance;
    });
};
const forEachSinkMixin = /*@__PURE__*/ (() => {
    const ForEachSink_private_effect = Symbol("ForEachSink_private_effect");
    return returns(mixin(include(delegatingDisposableMixin), function ForEachSink(instance, delegate, effect) {
        init(delegatingDisposableMixin, instance, delegate);
        instance[Sink_private_delegate] = delegate;
        instance[ForEachSink_private_effect] = effect;
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [ForEachSink_private_effect]: none,
    }), {
        [SinkLike_notify](next) {
            this[ForEachSink_private_effect](next);
            pipe(this[Sink_private_delegate], notify(next));
        },
    }));
})();
const keepSinkMixin = /*@__PURE__*/ (() => {
    const KeepSink_private_predicate = Symbol("KeepSink_private_predicate");
    return returns(mixin(include(delegatingDisposableMixin), function KeepSink(instance, delegate, predicate) {
        init(delegatingDisposableMixin, instance, delegate);
        instance[Sink_private_delegate] = delegate;
        instance[KeepSink_private_predicate] = predicate;
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [KeepSink_private_predicate]: none,
    }), {
        [SinkLike_notify](next) {
            if (this[KeepSink_private_predicate](next)) {
                pipe(this[Sink_private_delegate], notify(next));
            }
        },
    }));
})();
const mapSinkMixin = /*@__PURE__*/ (() => {
    const MapSink_private_mapper = Symbol("MapSink_private_mapper");
    return returns(mixin(include(delegatingDisposableMixin), function MapSink(instance, delegate, mapper) {
        init(delegatingDisposableMixin, instance, delegate);
        instance[Sink_private_delegate] = delegate;
        instance[MapSink_private_mapper] = mapper;
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [MapSink_private_mapper]: none,
    }), {
        [SinkLike_notify](next) {
            const mapped = this[MapSink_private_mapper](next);
            pipe(this[Sink_private_delegate], notify(mapped));
        },
    }));
})();
const pairwiseSinkMixin = /*@__PURE__*/ (() => {
    const PairwiseSink_private_prev = Symbol("PairwiseSink_private_prev");
    const PairwiseSink_private_hasPrev = Symbol("PairwiseSink_private_hasPrev");
    return returns(mixin(include(delegatingDisposableMixin), function PairwiseSink(instance, delegate) {
        init(delegatingDisposableMixin, instance, delegate);
        instance[Sink_private_delegate] = delegate;
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [PairwiseSink_private_prev]: none,
        [PairwiseSink_private_hasPrev]: false,
    }), {
        [SinkLike_notify](next) {
            const prev = this[PairwiseSink_private_prev];
            if (this[PairwiseSink_private_hasPrev]) {
                pipe(this[Sink_private_delegate], notify([prev, next]));
            }
            this[PairwiseSink_private_hasPrev] = true;
            this[PairwiseSink_private_prev] = next;
        },
    }));
})();
const reduceSinkMixin = (fromArray) => {
    const ReduceSink_private_reducer = Symbol("ReduceSink_private_reducer");
    const ReduceSink_private_acc = Symbol("ReduceSink_private_acc");
    return mixin(include(disposableMixin), function ReduceSink(instance, delegate, reducer, initialValue) {
        init(disposableMixin, instance);
        instance[Sink_private_delegate] = delegate;
        instance[ReduceSink_private_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ReduceSink_private_acc] = acc;
        }
        catch (cause) {
            pipe(instance, dispose({ cause }));
        }
        pipe(instance, addTo(delegate), onComplete(() => {
            pipe([instance[ReduceSink_private_acc]], fromArray, sinkInto(delegate));
        }));
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [ReduceSink_private_reducer]: none,
        [ReduceSink_private_acc]: none,
    }), {
        [SinkLike_notify](next) {
            const nextAcc = this[ReduceSink_private_reducer](this[ReduceSink_private_acc], next);
            this[ReduceSink_private_acc] = nextAcc;
        },
    });
};
const satisfySinkMixin = (fromArray, defaultResult) => {
    const SatisfySink_private_predicate = Symbol("SatisfySink_private_predicate");
    return mixin(include(disposableMixin), function SatisfySink(instance, delegate, predicate) {
        init(disposableMixin, instance);
        instance[Sink_private_delegate] = delegate;
        instance[SatisfySink_private_predicate] = predicate;
        pipe(instance, addTo(delegate), onComplete(() => {
            if (!isDisposed(delegate)) {
                pipe([defaultResult], fromArray, sinkInto(delegate));
            }
        }));
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [SatisfySink_private_predicate]: none,
    }), {
        [SinkLike_notify](next) {
            if (this[SatisfySink_private_predicate](next)) {
                pipe(this[Sink_private_delegate], notify(!defaultResult), dispose());
            }
        },
    });
};
const scanSinkMixin = /*@__PURE__*/ (() => {
    const ScanSink_private_reducer = Symbol("ScanSink_private_reducer");
    const ScanSink_private_acc = Symbol("ScanSink_private_acc");
    return returns(mixin(include(delegatingDisposableMixin), function ScanSink(instance, delegate, reducer, initialValue) {
        init(delegatingDisposableMixin, instance, delegate);
        instance[Sink_private_delegate] = delegate;
        instance[ScanSink_private_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ScanSink_private_acc] = acc;
        }
        catch (cause) {
            pipe(instance, dispose({ cause }));
        }
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [ScanSink_private_reducer]: none,
        [ScanSink_private_acc]: none,
    }), {
        [SinkLike_notify](next) {
            const nextAcc = this[ScanSink_private_reducer](this[ScanSink_private_acc], next);
            this[ScanSink_private_acc] = nextAcc;
            pipe(this[Sink_private_delegate], notify(nextAcc));
        },
    }));
})();
const skipFirstSinkMixin = /*@__PURE__*/ (() => {
    const SkipFirstSink_private_skipCount = Symbol("SkipFirstSink_private_skipCount");
    const SkipFirstSink_private_count = Symbol("SkipFirstSink_private_count");
    return returns(mixin(include(delegatingDisposableMixin), function SkipFirstSink(instance, delegate, skipCount) {
        init(delegatingDisposableMixin, instance, delegate);
        instance[Sink_private_delegate] = delegate;
        instance[SkipFirstSink_private_skipCount] = skipCount;
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [SkipFirstSink_private_skipCount]: 0,
        [SkipFirstSink_private_count]: 0,
    }), {
        [SinkLike_notify](next) {
            this[SkipFirstSink_private_count]++;
            if (this[SkipFirstSink_private_count] >
                this[SkipFirstSink_private_skipCount]) {
                pipe(this[Sink_private_delegate], notify(next));
            }
        },
    }));
})();
const someSatisfySinkMixin = (fromArray) => {
    const typedSatisfySinkMixin = satisfySinkMixin(fromArray, false);
    return mixin(include(typedSatisfySinkMixin), function EverySatisfySink(instance, delegate, predicate) {
        init(typedSatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
};
const takeFirstSinkMixin = /*@__PURE__*/ (() => {
    const TakeFirstSink_private_takeCount = Symbol("TakeFirstSink_private_takeCount");
    const TakeFirstSink_private_count = Symbol("TakeFirstSink_private_count");
    return returns(mixin(include(delegatingDisposableMixin), function TakeFirstSink(instance, delegate, takeCount) {
        init(delegatingDisposableMixin, instance, delegate);
        instance[Sink_private_delegate] = delegate;
        instance[TakeFirstSink_private_takeCount] = takeCount;
        if (takeCount === 0) {
            pipe(instance, dispose());
        }
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [TakeFirstSink_private_takeCount]: 0,
        [TakeFirstSink_private_count]: 0,
    }), {
        [SinkLike_notify](next) {
            this[TakeFirstSink_private_count]++;
            pipe(this[Sink_private_delegate], notify(next));
            if (this[TakeFirstSink_private_count] >=
                this[TakeFirstSink_private_takeCount]) {
                pipe(this, dispose());
            }
        },
    }));
})();
const TakeLastSink_last = Symbol("TakeLastSink_last");
const takeLastSinkMixin = (fromArray) => {
    const TakeLastSink_private_takeLastCount = Symbol("TakeLastSink_private_takeLastCount");
    return mixin(include(disposableMixin), function TakeLastSink(instance, delegate, takeLastCount) {
        init(disposableMixin, instance);
        instance[Sink_private_delegate] = delegate;
        instance[TakeLastSink_private_takeLastCount] = takeLastCount;
        instance[TakeLastSink_last] = [];
        pipe(instance, addTo(delegate), onComplete(() => {
            pipe(instance[TakeLastSink_last], fromArray, sinkInto(delegate));
        }));
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [TakeLastSink_private_takeLastCount]: 0,
        [TakeLastSink_last]: none,
    }), {
        [SinkLike_notify](next) {
            const { [TakeLastSink_last]: last } = this;
            last.push(next);
            if (getLength(last) > this[TakeLastSink_private_takeLastCount]) {
                last.shift();
            }
        },
    });
};
const takeWhileSinkMixin = /*@__PURE__*/ (() => {
    const TakeWhileSink_private_predicate = Symbol("TakeWhileSink_private_predicate");
    const TakeWhileSink_private_inclusive = Symbol("TakeWhileSink_private_inclusive");
    return returns(mixin(include(delegatingDisposableMixin), function TakeWhileSink(instance, delegate, predicate, inclusive) {
        init(delegatingDisposableMixin, instance, delegate);
        instance[Sink_private_delegate] = delegate;
        instance[TakeWhileSink_private_predicate] = predicate;
        instance[TakeWhileSink_private_inclusive] = inclusive;
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [TakeWhileSink_private_predicate]: none,
        [TakeWhileSink_private_inclusive]: none,
    }), {
        [SinkLike_notify](next) {
            const satisfiesPredicate = this[TakeWhileSink_private_predicate](next);
            if (satisfiesPredicate || this[TakeWhileSink_private_inclusive]) {
                pipe(this[Sink_private_delegate], notify(next));
            }
            if (!satisfiesPredicate) {
                pipe(this, dispose());
            }
        },
    }));
})();
const throwIfEmptySinkMixin = /*@__PURE__*/ (() => {
    const ThrowIfEmptySink_private_isEmpty = Symbol("ThrowIfEmptySink_private_isEmpty");
    return returns(mixin(include(disposableMixin), function ThrowIfEmptySink(instance, delegate, factory) {
        init(disposableMixin, instance);
        instance[Sink_private_delegate] = delegate;
        pipe(instance, addTo(delegate), onComplete(() => {
            let error = none;
            if (instance[ThrowIfEmptySink_private_isEmpty]) {
                let cause = none;
                try {
                    cause = factory();
                }
                catch (e) {
                    cause = e;
                }
                error = { cause };
            }
            pipe(delegate, dispose(error));
        }));
        return instance;
    }, props({
        [Sink_private_delegate]: none,
        [ThrowIfEmptySink_private_isEmpty]: true,
    }), {
        [SinkLike_notify](next) {
            this[ThrowIfEmptySink_private_isEmpty] = false;
            pipe(this[Sink_private_delegate], notify(next));
        },
    }));
})();

export { DelegatingSink_delegate, TakeLastSink_last, bufferSinkMixin, catchErrorSinkMixin, createDelegatingSink, createEnumeratorSink, createSink, decodeWithCharsetSinkMixin, delegatingSinkMixin, distinctUntilChangedSinkMixin, everySatisfySinkMixin, forEachSinkMixin, keepSinkMixin, mapSinkMixin, pairwiseSinkMixin, reduceSinkMixin, scanSinkMixin, skipFirstSinkMixin, someSatisfySinkMixin, takeFirstSinkMixin, takeLastSinkMixin, takeWhileSinkMixin, throwIfEmptySinkMixin };

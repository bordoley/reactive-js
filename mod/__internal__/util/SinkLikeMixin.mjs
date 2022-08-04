/// <reference types="./SinkLikeMixin.d.ts" />
import { pipe, returns, none, isEmpty, getLength, newInstance } from '../../functions.mjs';
import { sinkInto } from '../../rx/ReactiveContainerLike.mjs';
import { SinkLike_notify } from '../../util.mjs';
import '../../util/DisposableLike.mjs';
import { notify } from '../../util/SinkLike.mjs';
import { disposableMixin, delegatingDisposableMixin } from './DisposableLikeMixins.mjs';
import { clazz, __extends, init, createObjectFactory, Object_properties } from './Object.mjs';
import { addTo, onComplete, dispose } from './DisposableLikeInternal.mjs';

const Sink_private_delegate = Symbol("Sink_private_delegate");
const createSink = /*@__PURE__*/ (() => pipe(clazz(__extends(disposableMixin), function CreateSink() {
    init(disposableMixin, this);
    return this;
}, {}, {
    [SinkLike_notify](_) { },
}), createObjectFactory()))();
const DelegatingSink_delegate = Symbol("DelegatingSink_delegate");
const delegatingSinkMixin = /*@__PURE__*/ (() => {
    return returns(clazz(__extends(disposableMixin), function DelegatingSink(delegate) {
        init(disposableMixin, this);
        this[DelegatingSink_delegate] = delegate;
        return this;
    }, {
        ...disposableMixin[Object_properties],
        [DelegatingSink_delegate]: none,
    }, {
        [SinkLike_notify](v) {
            this[DelegatingSink_delegate][SinkLike_notify](v);
        },
    }));
})();
const createDelegatingSink = 
/*@__PURE__*/ (() => {
    const typeDelegatingSinkMixin = delegatingSinkMixin();
    return pipe(typeDelegatingSinkMixin, createObjectFactory());
})();
const bufferSinkMixin = (fromArray) => {
    const BufferSink_private_maxBufferSize = Symbol("BufferSink_private_maxBufferSize");
    const BufferSink_private_buffer = Symbol("BufferSink_private_buffer");
    return clazz(__extends(disposableMixin), function BufferSink(delegate, maxBufferSize) {
        init(disposableMixin, this);
        this[Sink_private_delegate] = delegate;
        this[BufferSink_private_maxBufferSize] = maxBufferSize;
        this[BufferSink_private_buffer] = [];
        pipe(this, addTo(delegate), onComplete(() => {
            const { [BufferSink_private_buffer]: buffer } = this;
            this[BufferSink_private_buffer] = [];
            if (isEmpty(buffer)) {
                pipe(this[Sink_private_delegate], dispose());
            }
            else {
                pipe([buffer], fromArray, sinkInto(this[Sink_private_delegate]));
            }
        }));
        return this;
    }, {
        [Sink_private_delegate]: none,
        [BufferSink_private_maxBufferSize]: 0,
        [BufferSink_private_buffer]: none,
    }, {
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
const decodeWithCharsetSinkMixin = (fromArray) => {
    const DecodeWithCharsetSink_private_textDecoder = Symbol("DecodeWithCharsetSink_private_textDecoder");
    return clazz(__extends(disposableMixin), function DecodeWithCharsetSink(delegate, charset) {
        init(disposableMixin, this);
        this[Sink_private_delegate] = delegate;
        const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
        this[DecodeWithCharsetSink_private_textDecoder] = textDecoder;
        pipe(this, addTo(delegate), onComplete(() => {
            const data = textDecoder.decode();
            if (!isEmpty(data)) {
                pipe([data], fromArray, sinkInto(delegate));
            }
            else {
                pipe(delegate, dispose());
            }
        }));
        return this;
    }, {
        [Sink_private_delegate]: none,
        [DecodeWithCharsetSink_private_textDecoder]: none,
    }, {
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
    return returns(clazz(__extends(delegatingDisposableMixin), function DistinctUntilChangedSink(delegate, equality) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[DistinctUntilChangedSink_private_equality] = equality;
        return this;
    }, {
        [Sink_private_delegate]: none,
        [DistinctUntilChangedSink_private_equality]: none,
        [DistinctUntilChangedSink_private_prev]: none,
        [DistinctUntilChangedSink_private_hasValue]: false,
    }, {
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
const forEachSinkMixin = /*@__PURE__*/ (() => {
    const ForEachSink_private_effect = Symbol("ForEachSink_private_effect");
    return returns(clazz(__extends(delegatingDisposableMixin), function ForEachSink(delegate, effect) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[ForEachSink_private_effect] = effect;
        return this;
    }, {
        [Sink_private_delegate]: none,
        [ForEachSink_private_effect]: none,
    }, {
        [SinkLike_notify](next) {
            this[ForEachSink_private_effect](next);
            pipe(this[Sink_private_delegate], notify(next));
        },
    }));
})();
const keepSinkMixin = /*@__PURE__*/ (() => {
    const KeepSink_private_predicate = Symbol("KeepSink_private_predicate");
    return returns(clazz(__extends(delegatingDisposableMixin), function KeepSink(delegate, predicate) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[KeepSink_private_predicate] = predicate;
        return this;
    }, {
        [Sink_private_delegate]: none,
        [KeepSink_private_predicate]: none,
    }, {
        [SinkLike_notify](next) {
            if (this[KeepSink_private_predicate](next)) {
                pipe(this[Sink_private_delegate], notify(next));
            }
        },
    }));
})();
const mapSinkMixin = /*@__PURE__*/ (() => {
    const MapSink_private_mapper = Symbol("MapSink_private_mapper");
    return returns(clazz(__extends(delegatingDisposableMixin), function MapSink(delegate, mapper) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[MapSink_private_mapper] = mapper;
        return this;
    }, {
        [Sink_private_delegate]: none,
        [MapSink_private_mapper]: none,
    }, {
        [SinkLike_notify](next) {
            const mapped = this[MapSink_private_mapper](next);
            pipe(this[Sink_private_delegate], notify(mapped));
        },
    }));
})();
const pairwiseSinkMixin = /*@__PURE__*/ (() => {
    const PairwiseSink_private_prev = Symbol("PairwiseSink_private_prev");
    const PairwiseSink_private_hasPrev = Symbol("PairwiseSink_private_hasPrev");
    return returns(clazz(__extends(delegatingDisposableMixin), function PairwiseSink(delegate) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        return this;
    }, {
        [Sink_private_delegate]: none,
        [PairwiseSink_private_prev]: none,
        [PairwiseSink_private_hasPrev]: false,
    }, {
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
    return clazz(__extends(disposableMixin), function ReduceSink(delegate, reducer, initialValue) {
        init(disposableMixin, this);
        this[Sink_private_delegate] = delegate;
        this[ReduceSink_private_reducer] = reducer;
        try {
            const acc = initialValue();
            this[ReduceSink_private_acc] = acc;
        }
        catch (cause) {
            pipe(this, dispose({ cause }));
        }
        pipe(this, addTo(delegate), onComplete(() => {
            pipe([this[ReduceSink_private_acc]], fromArray, sinkInto(delegate));
        }));
        return this;
    }, {
        [Sink_private_delegate]: none,
        [ReduceSink_private_reducer]: none,
        [ReduceSink_private_acc]: none,
    }, {
        [SinkLike_notify](next) {
            const nextAcc = this[ReduceSink_private_reducer](this[ReduceSink_private_acc], next);
            this[ReduceSink_private_acc] = nextAcc;
        },
    });
};
const scanSinkMixin = /*@__PURE__*/ (() => {
    const ScanSink_private_reducer = Symbol("ScanSink_private_reducer");
    const ScanSink_private_acc = Symbol("ScanSink_private_acc");
    return returns(clazz(__extends(delegatingDisposableMixin), function ScanSink(delegate, reducer, initialValue) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[ScanSink_private_reducer] = reducer;
        try {
            const acc = initialValue();
            this[ScanSink_private_acc] = acc;
        }
        catch (cause) {
            pipe(this, dispose({ cause }));
        }
        return this;
    }, {
        [Sink_private_delegate]: none,
        [ScanSink_private_reducer]: none,
        [ScanSink_private_acc]: none,
    }, {
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
    return returns(clazz(__extends(delegatingDisposableMixin), function SkipFirstSink(delegate, skipCount) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[SkipFirstSink_private_skipCount] = skipCount;
        return this;
    }, {
        [Sink_private_delegate]: none,
        [SkipFirstSink_private_skipCount]: 0,
        [SkipFirstSink_private_count]: 0,
    }, {
        [SinkLike_notify](next) {
            this[SkipFirstSink_private_count]++;
            if (this[SkipFirstSink_private_count] >
                this[SkipFirstSink_private_skipCount]) {
                pipe(this[Sink_private_delegate], notify(next));
            }
        },
    }));
})();
const takeFirstSinkMixin = /*@__PURE__*/ (() => {
    const TakeFirstSink_private_takeCount = Symbol("TakeFirstSink_private_takeCount");
    const TakeFirstSink_private_count = Symbol("TakeFirstSink_private_count");
    return returns(clazz(__extends(delegatingDisposableMixin), function TakeFirstSink(delegate, takeCount) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[TakeFirstSink_private_takeCount] = takeCount;
        return this;
    }, {
        ...delegatingDisposableMixin[Object_properties],
        [Sink_private_delegate]: none,
        [TakeFirstSink_private_takeCount]: 0,
        [TakeFirstSink_private_count]: 0,
    }, {
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
    return clazz(__extends(disposableMixin), function TakeLastSink(delegate, takeLastCount) {
        init(disposableMixin, this);
        this[Sink_private_delegate] = delegate;
        this[TakeLastSink_private_takeLastCount] = takeLastCount;
        this[TakeLastSink_last] = [];
        pipe(this, addTo(delegate), onComplete(() => {
            pipe(this[TakeLastSink_last], fromArray, sinkInto(delegate));
        }));
        return this;
    }, {
        [Sink_private_delegate]: none,
        [TakeLastSink_private_takeLastCount]: 0,
        [TakeLastSink_last]: none,
    }, {
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
    return returns(clazz(__extends(delegatingDisposableMixin), function TakeWhileSink(delegate, predicate, inclusive) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[TakeWhileSink_private_predicate] = predicate;
        this[TakeWhileSink_private_inclusive] = inclusive;
        return this;
    }, {
        [Sink_private_delegate]: none,
        [TakeWhileSink_private_predicate]: none,
        [TakeWhileSink_private_inclusive]: none,
    }, {
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
    return returns(clazz(__extends(disposableMixin), function ThrowIfEmptySink(delegate, factory) {
        init(disposableMixin, this);
        this[Sink_private_delegate] = delegate;
        pipe(this, addTo(delegate), onComplete(() => {
            let error = none;
            if (this[ThrowIfEmptySink_private_isEmpty]) {
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
        return this;
    }, {
        [Sink_private_delegate]: none,
        [ThrowIfEmptySink_private_isEmpty]: true,
    }, {
        [SinkLike_notify](next) {
            this[ThrowIfEmptySink_private_isEmpty] = false;
            pipe(this[Sink_private_delegate], notify(next));
        },
    }));
})();

export { DelegatingSink_delegate, TakeLastSink_last, bufferSinkMixin, createDelegatingSink, createSink, decodeWithCharsetSinkMixin, delegatingSinkMixin, distinctUntilChangedSinkMixin, forEachSinkMixin, keepSinkMixin, mapSinkMixin, pairwiseSinkMixin, reduceSinkMixin, scanSinkMixin, skipFirstSinkMixin, takeFirstSinkMixin, takeLastSinkMixin, takeWhileSinkMixin, throwIfEmptySinkMixin };

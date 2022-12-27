/// <reference types="./SinkLike.mixins.d.ts" />
import { pipe, isEmpty, none, getLength, returns, isSome, newInstance, compose, negate } from '../../functions.mjs';
import { SinkLike_notify } from '../../rx.mjs';
import { sinkInto } from '../../rx/ReactiveContainerLike.mjs';
import { notify } from '../../rx/SinkLike.mjs';
import { addTo, onComplete, dispose, addToIgnoringChildErrors, onError, isDisposed } from '../../util/DisposableLike.mjs';
import delegatingMixin from '../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import disposableMixin from '../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { mixin, include, init, props } from '../mixins.mjs';

const Sink_private_delegate = Symbol("Sink_private_delegate");
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
    return returns(mixin(include(delegatingMixin), function DistinctUntilChangedSink(instance, delegate, equality) {
        init(delegatingMixin, instance, delegate);
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
    return returns(mixin(include(delegatingMixin), function ForEachSink(instance, delegate, effect) {
        init(delegatingMixin, instance, delegate);
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
    return returns(mixin(include(delegatingMixin), function KeepSink(instance, delegate, predicate) {
        init(delegatingMixin, instance, delegate);
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
    return returns(mixin(include(delegatingMixin), function MapSink(instance, delegate, mapper) {
        init(delegatingMixin, instance, delegate);
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
    return returns(mixin(include(delegatingMixin), function PairwiseSink(instance, delegate) {
        init(delegatingMixin, instance, delegate);
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
    return returns(mixin(include(delegatingMixin), function ScanSink(instance, delegate, reducer, initialValue) {
        init(delegatingMixin, instance, delegate);
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
    return returns(mixin(include(delegatingMixin), function SkipFirstSink(instance, delegate, skipCount) {
        init(delegatingMixin, instance, delegate);
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

export { bufferSinkMixin, catchErrorSinkMixin, decodeWithCharsetSinkMixin, distinctUntilChangedSinkMixin, everySatisfySinkMixin, forEachSinkMixin, keepSinkMixin, mapSinkMixin, pairwiseSinkMixin, reduceSinkMixin, scanSinkMixin, skipFirstSinkMixin, someSatisfySinkMixin };

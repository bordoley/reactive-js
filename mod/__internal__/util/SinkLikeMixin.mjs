/// <reference types="./SinkLikeMixin.d.ts" />
import { pipe, pipeLazy, none, returns, getLength } from '../../functions.mjs';
import { sinkInto } from '../../rx/ReactiveContainerLike.mjs';
import { SinkLike_notify } from '../../util.mjs';
import { notify } from '../../util/SinkLike.mjs';
import { disposableMixin, delegatingDisposableMixin } from './DisposableLikeMixins.mjs';
import { dispose, addTo, onComplete } from './DisposableLikeInternal.mjs';
import { Object_properties, Object_init, init, mixWith, createObjectFactory } from './Object.mjs';

const Sink_private_delegate = Symbol("Sink_private_delegate");
const createSink = /*@__PURE__*/ (() => pipe({
    [Object_properties]: {},
    [Object_init]() {
        init(disposableMixin, this);
    },
    [SinkLike_notify](_) { },
}, mixWith(disposableMixin), createObjectFactory()))();
const DelegatingSink_delegate = Symbol("DelegatingSink_delegate");
const delegatingSinkMixin = /*@__PURE__*/ (() => {
    return pipeLazy({
        [Object_properties]: {
            [DelegatingSink_delegate]: none,
        },
        [Object_init](delegate) {
            init(disposableMixin, this);
            this[DelegatingSink_delegate] = delegate;
        },
        [SinkLike_notify](v) {
            this[DelegatingSink_delegate][SinkLike_notify](v);
        },
    }, mixWith(disposableMixin));
})();
const createDelegatingSink = 
/*@__PURE__*/ (() => {
    const typeDelegatingSinkMixin = delegatingSinkMixin();
    return pipe(typeDelegatingSinkMixin, createObjectFactory());
})();
const distinctUntilChangedSinkMixin = /*@__PURE__*/ (() => {
    const DistinctUntilChangedSink_private_equality = Symbol("DistinctUntilChangedSink_private_equality");
    const DistinctUntilChangedSink_private_prev = Symbol("DistinctUntilChangedSink_private_prev");
    const DistinctUntilChangedSink_private_hasValue = Symbol("DistinctUntilChangedSink_private_hasValue");
    return pipe({
        [Object_properties]: {
            [Sink_private_delegate]: none,
            [DistinctUntilChangedSink_private_equality]: none,
            [DistinctUntilChangedSink_private_prev]: none,
            [DistinctUntilChangedSink_private_hasValue]: false,
        },
        [Object_init](delegate, equality) {
            init(delegatingDisposableMixin, this, delegate);
            this[Sink_private_delegate] = delegate;
            this[DistinctUntilChangedSink_private_equality] = equality;
        },
        [SinkLike_notify](next) {
            const shouldEmit = !this[DistinctUntilChangedSink_private_hasValue] ||
                !this[DistinctUntilChangedSink_private_equality](this[DistinctUntilChangedSink_private_prev], next);
            if (shouldEmit) {
                this[DistinctUntilChangedSink_private_prev] = next;
                this[DistinctUntilChangedSink_private_hasValue] = true;
                pipe(this[Sink_private_delegate], notify(next));
            }
        },
    }, mixWith(delegatingDisposableMixin), returns);
})();
const keepSinkMixin = /*@__PURE__*/ (() => {
    const KeepSink_private_predicate = Symbol("KeepSink_private_predicate");
    return pipe({
        [Object_properties]: {
            [Sink_private_delegate]: none,
            [KeepSink_private_predicate]: none,
        },
        [Object_init](delegate, predicate) {
            init(delegatingDisposableMixin, this, delegate);
            this[Sink_private_delegate] = delegate;
            this[KeepSink_private_predicate] = predicate;
        },
        [SinkLike_notify](next) {
            if (this[KeepSink_private_predicate](next)) {
                pipe(this[Sink_private_delegate], notify(next));
            }
        },
    }, mixWith(delegatingDisposableMixin), returns);
})();
const mapSinkMixin = /*@__PURE__*/ (() => {
    const MapSink_private_mapper = Symbol("MapSink_private_mapper");
    return pipe({
        [Object_properties]: {
            [Sink_private_delegate]: none,
            mapper: none,
        },
        [Object_init](delegate, mapper) {
            init(delegatingDisposableMixin, this, delegate);
            this[Sink_private_delegate] = delegate;
            this[MapSink_private_mapper] = mapper;
        },
        [SinkLike_notify](next) {
            const mapped = this[MapSink_private_mapper](next);
            pipe(this[Sink_private_delegate], notify(mapped));
        },
    }, mixWith(delegatingDisposableMixin), returns);
})();
const onNotifySinkMixin = /*@__PURE__*/ (() => {
    const OnNotifySink_private_onNotify = Symbol("OnNotifySink_private_onNotify");
    return pipe({
        [Object_properties]: {
            [Sink_private_delegate]: none,
            [OnNotifySink_private_onNotify]: none,
        },
        [Object_init](delegate, onNotify) {
            init(delegatingDisposableMixin, this, delegate);
            this[Sink_private_delegate] = delegate;
            this[OnNotifySink_private_onNotify] = onNotify;
        },
        [SinkLike_notify](next) {
            this[OnNotifySink_private_onNotify](next);
            pipe(this[Sink_private_delegate], notify(next));
        },
    }, mixWith(delegatingDisposableMixin), returns);
})();
const scanSinkMixin = /*@__PURE__*/ (() => {
    const ScanSink_private_reducer = Symbol("ScanSink_private_reducer");
    const ScanSink_private_acc = Symbol("ScanSink_private_acc");
    return pipe({
        [Object_properties]: {
            [Sink_private_delegate]: none,
            [ScanSink_private_reducer]: none,
            [ScanSink_private_acc]: none,
        },
        [Object_init](delegate, reducer, initialValue) {
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
        },
        [SinkLike_notify](next) {
            const nextAcc = this[ScanSink_private_reducer](this[ScanSink_private_acc], next);
            this[ScanSink_private_acc] = nextAcc;
            pipe(this[Sink_private_delegate], notify(nextAcc));
        },
    }, mixWith(delegatingDisposableMixin), returns);
})();
const skipFirstSinkMixin = /*@__PURE__*/ (() => {
    const SkipFirstSink_private_skipCount = Symbol("SkipFirstSink_private_skipCount");
    const SkipFirstSink_private_count = Symbol("SkipFirstSink_private_count");
    return pipe({
        [Object_properties]: {
            [Sink_private_delegate]: none,
            [SkipFirstSink_private_skipCount]: 0,
            [SkipFirstSink_private_count]: 0,
        },
        [Object_init](delegate, skipCount) {
            init(delegatingDisposableMixin, this, delegate);
            this[Sink_private_delegate] = delegate;
            this[SkipFirstSink_private_skipCount] = skipCount;
        },
        [SinkLike_notify](next) {
            this[SkipFirstSink_private_count]++;
            if (this[SkipFirstSink_private_count] >
                this[SkipFirstSink_private_skipCount]) {
                pipe(this[Sink_private_delegate], notify(next));
            }
        },
    }, mixWith(delegatingDisposableMixin), returns);
})();
const takeFirstSinkMixin = /*@__PURE__*/ (() => {
    const TakeFirstSink_private_takeCount = Symbol("TakeFirstSink_private_takeCount");
    const TakeFirstSink_private_count = Symbol("TakeFirstSink_private_count");
    return pipe({
        [Object_properties]: {
            [Sink_private_delegate]: none,
            [TakeFirstSink_private_takeCount]: 0,
            [TakeFirstSink_private_count]: 0,
        },
        [Object_init](delegate, takeCount) {
            init(delegatingDisposableMixin, this, delegate);
            this[Sink_private_delegate] = delegate;
            this[TakeFirstSink_private_takeCount] = takeCount;
        },
        [SinkLike_notify](next) {
            this[TakeFirstSink_private_count]++;
            pipe(this[Sink_private_delegate], notify(next));
            if (this[TakeFirstSink_private_count] >=
                this[TakeFirstSink_private_takeCount]) {
                pipe(this, dispose());
            }
        },
    }, mixWith(delegatingDisposableMixin), returns);
})();
const TakeLastSink_last = Symbol("TakeLastSink_last");
const takeLastSinkMixin = (fromArray) => {
    const TakeLastSink_private_takeLastCount = Symbol("TakeLastSink_private_takeLastCount");
    return pipe({
        [Object_properties]: {
            [Sink_private_delegate]: none,
            [TakeLastSink_private_takeLastCount]: 0,
            [TakeLastSink_last]: none,
        },
        [Object_init](delegate, takeLastCount) {
            init(disposableMixin, this);
            this[Sink_private_delegate] = delegate;
            this[TakeLastSink_private_takeLastCount] = takeLastCount;
            this[TakeLastSink_last] = [];
            pipe(this, addTo(delegate), onComplete(() => {
                pipe(this[TakeLastSink_last], fromArray, sinkInto(delegate));
            }));
        },
        [SinkLike_notify](next) {
            const { [TakeLastSink_last]: last } = this;
            last.push(next);
            if (getLength(last) > this[TakeLastSink_private_takeLastCount]) {
                last.shift();
            }
        },
    }, mixWith(disposableMixin));
};
const takeWhileSinkMixin = /*@__PURE__*/ (() => {
    const TakeWhileSink_private_predicate = Symbol("TakeWhileSink_private_predicate");
    const TakeWhileSink_private_inclusive = Symbol("TakeWhileSink_private_inclusive");
    return pipe({
        [Object_properties]: {
            [Sink_private_delegate]: none,
            [TakeWhileSink_private_predicate]: none,
            [TakeWhileSink_private_inclusive]: none,
        },
        [Object_init](delegate, predicate, inclusive) {
            init(delegatingDisposableMixin, this, delegate);
            this[Sink_private_delegate] = delegate;
            this[TakeWhileSink_private_predicate] = predicate;
            this[TakeWhileSink_private_inclusive] = inclusive;
        },
        [SinkLike_notify](next) {
            const satisfiesPredicate = this[TakeWhileSink_private_predicate](next);
            if (satisfiesPredicate || this[TakeWhileSink_private_inclusive]) {
                pipe(this[Sink_private_delegate], notify(next));
            }
            if (!satisfiesPredicate) {
                pipe(this, dispose());
            }
        },
    }, mixWith(delegatingDisposableMixin), returns);
})();

export { DelegatingSink_delegate, TakeLastSink_last, createDelegatingSink, createSink, delegatingSinkMixin, distinctUntilChangedSinkMixin, keepSinkMixin, mapSinkMixin, onNotifySinkMixin, scanSinkMixin, skipFirstSinkMixin, takeFirstSinkMixin, takeLastSinkMixin, takeWhileSinkMixin };

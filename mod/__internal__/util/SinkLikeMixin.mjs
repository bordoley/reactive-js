/// <reference types="./SinkLikeMixin.d.ts" />
import { pipe, none, returns } from '../../functions.mjs';
import { SinkLike_notify } from '../../util.mjs';
import { notify } from '../../util/SinkLike.mjs';
import { disposableMixin, delegatingDisposableMixin } from './DisposableLikeMixins.mjs';
import { dispose } from './DisposableLikeInternal.mjs';
import { Object_properties, Object_init, init, mixWith, createObjectFactory } from './Object.mjs';

const Sink_private_delegate = Symbol("Sink_private_delegate");
const createSink = /*@__PURE__*/ (() => pipe({
    [Object_properties]: {},
    [Object_init]() {
        init(disposableMixin, this);
    },
    [SinkLike_notify](_) { },
}, mixWith(disposableMixin), createObjectFactory()))();
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

export { createSink, keepSinkMixin, mapSinkMixin, onNotifySinkMixin, scanSinkMixin };

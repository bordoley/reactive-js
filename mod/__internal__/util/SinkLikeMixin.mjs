/// <reference types="./SinkLikeMixin.d.ts" />
import { pipe, none, returns } from '../../functions.mjs';
import { SinkLike_notify } from '../../util.mjs';
import { notify } from '../../util/SinkLike.mjs';
import { disposableMixin, delegatingDisposableMixin } from './DisposableLikeMixins.mjs';
import { Object_properties, Object_init, init, mixWith, createObjectFactory } from './Object.mjs';

const Sink_delegate = Symbol("Sink_delegate");
const createSink = /*@__PURE__*/ (() => pipe({
    [Object_properties]: {},
    [Object_init]() {
        init(disposableMixin, this);
    },
    [SinkLike_notify](_) { },
}, mixWith(disposableMixin), createObjectFactory()))();
const mapSinkMixin = /*@__PURE__*/ (() => {
    return pipe({
        [Object_properties]: {
            [Sink_delegate]: none,
            mapper: none,
        },
        [Object_init](delegate, mapper) {
            init(delegatingDisposableMixin, this, delegate);
            this[Sink_delegate] = delegate;
            this.mapper = mapper;
        },
        [SinkLike_notify](next) {
            const mapped = this.mapper(next);
            pipe(this[Sink_delegate], notify(mapped));
        },
    }, mixWith(delegatingDisposableMixin), returns);
})();
const onNotifySinkMixin = /*@__PURE__*/ (() => {
    return pipe({
        [Object_properties]: {
            [Sink_delegate]: none,
            onNotify: none,
        },
        [Object_init](delegate, onNotify) {
            init(delegatingDisposableMixin, this, delegate);
            this[Sink_delegate] = delegate;
            this.onNotify = onNotify;
        },
        [SinkLike_notify](next) {
            this.onNotify(next);
            pipe(this[Sink_delegate], notify(next));
        },
    }, mixWith(delegatingDisposableMixin), returns);
})();

export { Sink_delegate, createSink, mapSinkMixin, onNotifySinkMixin };

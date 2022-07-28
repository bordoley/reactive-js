/// <reference types="./SinkLikeMixin.d.ts" />
import { pipe, none, returns } from '../../functions.mjs';
import { SinkLike_notify } from '../../util.mjs';
import { notify } from '../../util/SinkLike.mjs';
import { delegatingDisposableMixin } from './DisposableLikeMixins.mjs';
import { Object_properties, Object_init, init, mixWith } from './Object.mjs';

const Sink_delegate = Symbol("Sink_delegate");
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

export { Sink_delegate, mapSinkMixin };

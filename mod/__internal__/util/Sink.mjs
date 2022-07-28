/// <reference types="./Sink.d.ts" />
import { pipe, none, returns } from '../../functions.mjs';
import { SinkLike_notify } from '../../util.mjs';
import { notify } from '../../util/SinkLike.mjs';
import { prototype } from './DelegatingDisposable.mjs';
import { Object_properties, Object_init, init, mixWith } from './Object.mjs';

const Sink_delegate = Symbol("Sink_delegate");
const mapPrototype = 
/*@__PURE__*/ (() => {
    return pipe({
        [Object_properties]: {
            [Sink_delegate]: none,
            mapper: none,
        },
        [Object_init](delegate, mapper) {
            init(prototype, this, delegate);
            this[Sink_delegate] = delegate;
            this.mapper = mapper;
        },
        [SinkLike_notify](next) {
            const mapped = this.mapper(next);
            pipe(this[Sink_delegate], notify(mapped));
        },
    }, mixWith(prototype), returns);
})();

export { Sink_delegate, mapPrototype };

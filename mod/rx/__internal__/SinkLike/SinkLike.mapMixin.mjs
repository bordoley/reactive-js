/// <reference types="./SinkLike.mapMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import { notify } from '../../SinkLike.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const mapMixin = /*@__PURE__*/ (() => {
    const MapSink_private_mapper = Symbol("MapSink_private_mapper");
    return returns(mix(include(delegatingMixin), function MapSink(instance, delegate, mapper) {
        init(delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[MapSink_private_mapper] = mapper;
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [MapSink_private_mapper]: none,
    }), {
        [SinkLike_notify](next) {
            const mapped = this[MapSink_private_mapper](next);
            pipe(this[DelegatingSinkLike_delegate], notify(mapped));
        },
    }));
})();

export { mapMixin as default, mapMixin };

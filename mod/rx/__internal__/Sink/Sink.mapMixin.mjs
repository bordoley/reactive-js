/// <reference types="./Sink.mapMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const Sink_mapMixin = /*@__PURE__*/ (() => {
    const MapSinkMixin_mapper = Symbol("MapSinkMixin_mapper");
    return returns(mix(include(Disposable_delegatingMixin), function MapSinkMixin(instance, delegate, mapper) {
        init(Disposable_delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[MapSinkMixin_mapper] = mapper;
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [MapSinkMixin_mapper]: none,
    }), {
        [SinkLike_notify](next) {
            const mapped = this[MapSinkMixin_mapper](next);
            this[DelegatingSinkLike_delegate][SinkLike_notify](mapped);
        },
    }));
})();

export { Sink_mapMixin, Sink_mapMixin as default };

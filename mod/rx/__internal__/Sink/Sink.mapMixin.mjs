/// <reference types="./Sink.mapMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import Sink$notify from './Sink.notify.mjs';

const Sink$mapMixin = /*@__PURE__*/ (() => {
    const MapSink_private_mapper = Symbol("MapSink_private_mapper");
    return returns(mix(include(Disposable$delegatingMixin), function MapSink(instance, delegate, mapper) {
        init(Disposable$delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[MapSink_private_mapper] = mapper;
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [MapSink_private_mapper]: none,
    }), {
        [SinkLike_notify](next) {
            const mapped = this[MapSink_private_mapper](next);
            pipe(this[DelegatingSinkLike_delegate], Sink$notify(mapped));
        },
    }));
})();

export { Sink$mapMixin, Sink$mapMixin as default };

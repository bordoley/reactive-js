/// <reference types="./Sink.forEachMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const Sink_forEachMixin = /*@__PURE__*/ (() => {
    const ForEachSink_private_effect = Symbol("ForEachSink_private_effect");
    return returns(mix(include(Disposable_delegatingMixin), function ForEachSink(instance, delegate, effect) {
        init(Disposable_delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[ForEachSink_private_effect] = effect;
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [ForEachSink_private_effect]: none,
    }), {
        [SinkLike_notify](next) {
            this[ForEachSink_private_effect](next);
            this[DelegatingSinkLike_delegate][SinkLike_notify](next);
        },
    }));
})();

export { Sink_forEachMixin, Sink_forEachMixin as default };

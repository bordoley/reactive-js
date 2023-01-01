/// <reference types="./DelegatingSinkLike.mixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const DelegateSinkLike__mixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DisposableLike__mixin), function DelegatingSink(instance, delegate) {
        init(DisposableLike__mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
    }), {
        [SinkLike_notify](v) {
            this[DelegatingSinkLike_delegate][SinkLike_notify](v);
        },
    }));
})();

export { DelegateSinkLike__mixin as default };

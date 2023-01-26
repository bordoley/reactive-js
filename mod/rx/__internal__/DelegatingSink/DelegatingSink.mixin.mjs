/// <reference types="./DelegatingSink.mixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const DelegateSink$mixin = 
/*@__PURE__*/ (() => {
    return returns(mix(include(Disposable$mixin), function DelegatingSink(instance, delegate) {
        init(Disposable$mixin, instance);
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

export { DelegateSink$mixin as default };

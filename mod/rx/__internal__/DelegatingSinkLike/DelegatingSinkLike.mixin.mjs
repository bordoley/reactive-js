/// <reference types="./DelegatingSinkLike.mixin.d.ts" />
import { mixin as mixin$1, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const mixin = 
/*@__PURE__*/ (() => {
    return returns(mixin$1(include(disposableMixin), function DelegatingSink(instance, delegate) {
        init(disposableMixin, instance);
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

export { mixin as default };

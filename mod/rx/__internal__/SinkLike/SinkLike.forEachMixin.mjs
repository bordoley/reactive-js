/// <reference types="./SinkLike.forEachMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import { notify } from '../../SinkLike.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const SinkLike__forEachMixin = /*@__PURE__*/ (() => {
    const ForEachSink_private_effect = Symbol("ForEachSink_private_effect");
    return returns(mix(include(DisposableLike__delegatingMixin), function ForEachSink(instance, delegate, effect) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[ForEachSink_private_effect] = effect;
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [ForEachSink_private_effect]: none,
    }), {
        [SinkLike_notify](next) {
            this[ForEachSink_private_effect](next);
            pipe(this[DelegatingSinkLike_delegate], notify(next));
        },
    }));
})();

export { SinkLike__forEachMixin, SinkLike__forEachMixin as default };

/// <reference types="./Sink.distinctUntilChangedMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const Sink_distinctUntilChangedMixin = /*@__PURE__*/ (() => {
    const DistinctUntilChangedSinkMixin_equality = Symbol("DistinctUntilChangedSinkMixin_equality");
    const DistinctUntilChangedSinkMixin_prev = Symbol("DistinctUntilChangedSinkMixin_prev");
    const DistinctUntilChangedSinkMixin_hasValue = Symbol("DistinctUntilChangedSinkMixin_hasValue");
    return returns(mix(include(Disposable_delegatingMixin), function DistinctUntilChangedSinkMixin(instance, delegate, equality) {
        init(Disposable_delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[DistinctUntilChangedSinkMixin_equality] = equality;
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [DistinctUntilChangedSinkMixin_equality]: none,
        [DistinctUntilChangedSinkMixin_prev]: none,
        [DistinctUntilChangedSinkMixin_hasValue]: false,
    }), {
        [SinkLike_notify](next) {
            const shouldEmit = !this[DistinctUntilChangedSinkMixin_hasValue] ||
                !this[DistinctUntilChangedSinkMixin_equality](this[DistinctUntilChangedSinkMixin_prev], next);
            if (shouldEmit) {
                this[DistinctUntilChangedSinkMixin_prev] = next;
                this[DistinctUntilChangedSinkMixin_hasValue] = true;
                this[DelegatingSinkLike_delegate][SinkLike_notify](next);
            }
        },
    }));
})();

export { Sink_distinctUntilChangedMixin as default };

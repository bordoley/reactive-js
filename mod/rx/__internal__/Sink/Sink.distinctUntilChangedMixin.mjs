/// <reference types="./Sink.distinctUntilChangedMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const Sink_distinctUntilChangedMixin = /*@__PURE__*/ (() => {
    const DistinctUntilChangedSink_private_equality = Symbol("DistinctUntilChangedSink_private_equality");
    const DistinctUntilChangedSink_private_prev = Symbol("DistinctUntilChangedSink_private_prev");
    const DistinctUntilChangedSink_private_hasValue = Symbol("DistinctUntilChangedSink_private_hasValue");
    return returns(mix(include(Disposable_delegatingMixin), function DistinctUntilChangedSink(instance, delegate, equality) {
        init(Disposable_delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[DistinctUntilChangedSink_private_equality] = equality;
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [DistinctUntilChangedSink_private_equality]: none,
        [DistinctUntilChangedSink_private_prev]: none,
        [DistinctUntilChangedSink_private_hasValue]: false,
    }), {
        [SinkLike_notify](next) {
            const shouldEmit = !this[DistinctUntilChangedSink_private_hasValue] ||
                !this[DistinctUntilChangedSink_private_equality](this[DistinctUntilChangedSink_private_prev], next);
            if (shouldEmit) {
                this[DistinctUntilChangedSink_private_prev] = next;
                this[DistinctUntilChangedSink_private_hasValue] = true;
                this[DelegatingSinkLike_delegate][SinkLike_notify](next);
            }
        },
    }));
})();

export { Sink_distinctUntilChangedMixin as default };

/// <reference types="./Sink.keepMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const Sink_keepMixin = 
/*@__PURE__*/ (() => {
    const KeepSink_private_predicate = Symbol("KeepSink_private_predicate");
    return returns(mix(include(Disposable_delegatingMixin), function KeepSink(instance, delegate, predicate) {
        init(Disposable_delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[KeepSink_private_predicate] = predicate;
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [KeepSink_private_predicate]: none,
    }), {
        [SinkLike_notify](next) {
            if (this[KeepSink_private_predicate](next)) {
                this[DelegatingSinkLike_delegate][SinkLike_notify](next);
            }
        },
    }));
})();

export { Sink_keepMixin as default };

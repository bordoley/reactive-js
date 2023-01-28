/// <reference types="./Sink.takeWhileMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const Sink_takeWhileMixin = /*@__PURE__*/ (() => {
    const TakeWhileSink_private_predicate = Symbol("TakeWhileSink_private_predicate");
    const TakeWhileSink_private_inclusive = Symbol("TakeWhileSink_private_inclusive");
    return returns(mix(include(Disposable_delegatingMixin), function TakeWhileSink(instance, delegate, predicate, inclusive) {
        init(Disposable_delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[TakeWhileSink_private_predicate] = predicate;
        instance[TakeWhileSink_private_inclusive] = inclusive;
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [TakeWhileSink_private_predicate]: none,
        [TakeWhileSink_private_inclusive]: none,
    }), {
        [SinkLike_notify](next) {
            const satisfiesPredicate = this[TakeWhileSink_private_predicate](next);
            if (satisfiesPredicate || this[TakeWhileSink_private_inclusive]) {
                this[DelegatingSinkLike_delegate][SinkLike_notify](next);
            }
            if (!satisfiesPredicate) {
                pipe(this, Disposable_dispose());
            }
        },
    }));
})();

export { Sink_takeWhileMixin as default };

/// <reference types="./SinkLike.takeWhileMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { dispose } from '../../../util/DisposableLike.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import { notify } from '../../SinkLike.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const SinkLike__takeWhileMixin = /*@__PURE__*/ (() => {
    const TakeWhileSink_private_predicate = Symbol("TakeWhileSink_private_predicate");
    const TakeWhileSink_private_inclusive = Symbol("TakeWhileSink_private_inclusive");
    return returns(mix(include(DisposableLike__delegatingMixin), function TakeWhileSink(instance, delegate, predicate, inclusive) {
        init(DisposableLike__delegatingMixin, instance, delegate);
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
                pipe(this[DelegatingSinkLike_delegate], notify(next));
            }
            if (!satisfiesPredicate) {
                pipe(this, dispose());
            }
        },
    }));
})();

export { SinkLike__takeWhileMixin as default };

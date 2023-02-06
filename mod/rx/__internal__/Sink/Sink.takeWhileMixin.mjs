/// <reference types="./Sink.takeWhileMixin.d.ts" />
import { mix, include, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { returns, none, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';

const Sink_takeWhileMixin = /*@__PURE__*/ (() => {
    const TakeWhileSinkMixin_predicate = Symbol("TakeWhileSinkMixin_predicate");
    const TakeWhileSinkMixin_inclusive = Symbol("TakeWhileSinkMixin_inclusive");
    return returns(mix(include(Disposable_delegatingMixin()), function TakeWhileSinkMixin(instance, delegate, predicate, inclusive) {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[TakeWhileSinkMixin_predicate] = predicate;
        instance[TakeWhileSinkMixin_inclusive] = inclusive;
        return instance;
    }, props({
        [TakeWhileSinkMixin_predicate]: none,
        [TakeWhileSinkMixin_inclusive]: none,
    }), {
        [SinkLike_notify](next) {
            const satisfiesPredicate = this[TakeWhileSinkMixin_predicate](next);
            if (satisfiesPredicate || this[TakeWhileSinkMixin_inclusive]) {
                this[DelegatingLike_delegate][SinkLike_notify](next);
            }
            if (!satisfiesPredicate) {
                pipe(this, Disposable_dispose());
            }
        },
    }));
})();

export { Sink_takeWhileMixin as default };

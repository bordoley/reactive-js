/// <reference types="./Sink.takeWhileMixin.d.ts" />

import { DelegatingLike_delegate, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe, returns } from "../../../functions.js";
import { ObserverLike_notify } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
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
        [ObserverLike_notify](next) {
            const satisfiesPredicate = this[TakeWhileSinkMixin_predicate](next);
            if (satisfiesPredicate || this[TakeWhileSinkMixin_inclusive]) {
                this[DelegatingLike_delegate][ObserverLike_notify](next);
            }
            if (!satisfiesPredicate) {
                pipe(this, Disposable_dispose());
            }
        },
    }));
})();
export default Sink_takeWhileMixin;

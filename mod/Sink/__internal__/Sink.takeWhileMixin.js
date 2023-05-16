/// <reference types="./Sink.takeWhileMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, PredicatedLike_predicate, TakeWhileLike_inclusive, } from "../../__internal__/types.js";
import { none, returns } from "../../functions.js";
import { DisposableLike_dispose, SinkLike_notify, } from "../../types.js";
const Sink_takeWhileMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function TakeWhileSinkMixin(instance, delegate, predicate, inclusive) {
    init(Disposable_delegatingMixin, instance, delegate);
    init(Delegating_mixin(), instance, delegate);
    instance[PredicatedLike_predicate] = predicate;
    instance[TakeWhileLike_inclusive] = inclusive;
    return instance;
}, props({
    [PredicatedLike_predicate]: none,
    [TakeWhileLike_inclusive]: none,
}), {
    [SinkLike_notify](next) {
        const satisfiesPredicate = this[PredicatedLike_predicate](next);
        if (satisfiesPredicate || this[TakeWhileLike_inclusive]) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
        }
        if (!satisfiesPredicate) {
            this[DisposableLike_dispose]();
        }
    },
})))();
export default Sink_takeWhileMixin;

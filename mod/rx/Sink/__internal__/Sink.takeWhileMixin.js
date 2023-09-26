/// <reference types="./Sink.takeWhileMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, returns } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import { DelegatingDisposableLike_delegate, DisposableLike_dispose, } from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";
const TakeWhileSinkMixin_inclusive = Symbol("TakeWhileSinkMixin_inclusive");
const TakeWhileSinkMixin_predicate = Symbol("TakeWhileSinkMixin_predicate");
const Sink_takeWhileMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin()), function TakeWhileSinkMixin(instance, delegate, predicate, inclusive) {
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
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        }
        if (!satisfiesPredicate) {
            this[DisposableLike_dispose]();
        }
    },
})))();
export default Sink_takeWhileMixin;

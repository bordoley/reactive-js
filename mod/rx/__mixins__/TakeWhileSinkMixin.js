/// <reference types="./TakeWhileSinkMixin.d.ts" />

import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { SinkLike_notify } from "../../rx.js";
import { DelegatingDisposableLike_delegate, DisposableLike_dispose, } from "../../utils.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
const TakeWhileSinkMixin_inclusive = Symbol("TakeWhileSinkMixin_inclusive");
const TakeWhileSinkMixin_predicate = Symbol("TakeWhileSinkMixin_predicate");
const TakeWhileSinkMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin()), function TakeWhileSinkMixin(instance, delegate, predicate, inclusive) {
    init(DelegatingDisposableMixin(), instance, delegate);
    instance[TakeWhileSinkMixin_predicate] = predicate;
    instance[TakeWhileSinkMixin_inclusive] = inclusive ?? false;
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
export default TakeWhileSinkMixin;

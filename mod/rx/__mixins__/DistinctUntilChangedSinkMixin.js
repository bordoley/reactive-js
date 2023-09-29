/// <reference types="./DistinctUntilChangedSinkMixin.d.ts" />

import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { SinkLike_notify } from "../../rx.js";
import { DelegatingDisposableLike_delegate, } from "../../utils.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
const DistinctUntilChangedSinkMixin_equality = Symbol("DistinctUntilChangedSinkMixin_equality");
const DistinctUntilChangedSinkMixin_prev = Symbol("DistinctUntilChangedSinkMixin_prev");
const DistinctUntilChangedSinkMixin_hasValue = Symbol("DistinctUntilChangedSinkMixin_hasValue");
const DistinctUntilChangedSinkMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin()), function DistinctUntilChangedSinkMixin(instance, delegate, equality) {
    init(DelegatingDisposableMixin(), instance, delegate);
    instance[DistinctUntilChangedSinkMixin_equality] = equality;
    return instance;
}, props({
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
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        }
    },
})))();
export default DistinctUntilChangedSinkMixin;

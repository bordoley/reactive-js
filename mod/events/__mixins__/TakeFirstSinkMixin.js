/// <reference types="./TakeFirstSinkMixin.d.ts" />

import { clampPositiveInteger, max } from "../../__internal__/math.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { SinkLike_notify } from "../../events.js";
import { returns } from "../../functions.js";
import { DisposableLike_dispose } from "../../utils.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../utils/__mixins__/DelegatingDisposableMixin.js";
const TakeFirstSinkMixin_count = Symbol("TakeFirstSinkMixin_count");
const TakeFirstSinkMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin()), function TakeFirstSinkMixin(instance, delegate, takeCount) {
    init(DelegatingDisposableMixin(), instance, delegate);
    instance[TakeFirstSinkMixin_count] = clampPositiveInteger(takeCount ?? 1);
    if (takeCount === 0) {
        instance[DisposableLike_dispose]();
    }
    return instance;
}, props({
    [TakeFirstSinkMixin_count]: 0,
}), {
    [SinkLike_notify](next) {
        this[TakeFirstSinkMixin_count] = max(this[TakeFirstSinkMixin_count] - 1, -1);
        this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        if (this[TakeFirstSinkMixin_count] <= 0) {
            this[DisposableLike_dispose]();
        }
    },
})))();
export default TakeFirstSinkMixin;

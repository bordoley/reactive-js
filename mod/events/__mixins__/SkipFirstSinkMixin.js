/// <reference types="./SkipFirstSinkMixin.d.ts" />

import { clampPositiveInteger, max } from "../../__internal__/math.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { SinkLike_notify } from "../../events.js";
import { returns } from "../../functions.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../utils/__mixins__/DelegatingDisposableMixin.js";
const SkipFirstSinkMixin_count = Symbol("SkipFirstSinkMixin_count");
const SkipFirstSinkMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin()), function SkipFirstSinkMixin(instance, delegate, skipCount) {
    init(DelegatingDisposableMixin(), instance, delegate);
    instance[SkipFirstSinkMixin_count] = clampPositiveInteger(skipCount ?? 1);
    return instance;
}, props({
    [SkipFirstSinkMixin_count]: 0,
}), {
    [SinkLike_notify](next) {
        this[SkipFirstSinkMixin_count] = max(this[SkipFirstSinkMixin_count] - 1, -1);
        if (this[SkipFirstSinkMixin_count] < 0) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        }
    },
})))();
export default SkipFirstSinkMixin;

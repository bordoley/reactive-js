/// <reference types="./Sink.skipFirstMixin.d.ts" />

import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { returns } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import { DelegatingDisposableLike_delegate, } from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";
const SkipFirstSinkMixin_count = Symbol("SkipFirstSinkMixin_count");
const Sink_skipFirstMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin()), function SkipFirstSinkMixin(instance, delegate, skipCount) {
    init(Disposable_delegatingMixin(), instance, delegate);
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
export default Sink_skipFirstMixin;

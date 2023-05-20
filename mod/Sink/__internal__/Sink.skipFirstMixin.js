/// <reference types="./Sink.skipFirstMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { max } from "../../__internal__/math.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { CountingLike_count, DelegatingLike_delegate, } from "../../__internal__/types.js";
import { returns } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
const Sink_skipFirstMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function SkipFirstSinkMixin(instance, delegate, skipCount) {
    init(Disposable_delegatingMixin, instance, delegate);
    init(Delegating_mixin(), instance, delegate);
    instance[CountingLike_count] = skipCount;
    return instance;
}, props({
    [CountingLike_count]: 0,
}), {
    [SinkLike_notify](next) {
        this[CountingLike_count] = max(this[CountingLike_count] - 1, -1);
        if (this[CountingLike_count] < 0) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
        }
    },
})))();
export default Sink_skipFirstMixin;

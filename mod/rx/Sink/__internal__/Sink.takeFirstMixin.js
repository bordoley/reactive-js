/// <reference types="./Sink.takeFirstMixin.d.ts" />

import { max } from "../../../__internal__/math.js";
import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { returns } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import { DelegatingDisposableLike_delegate, DisposableLike_dispose, } from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";
const TakeFirstSinkMixin_count = Symbol("TakeFirstSinkMixin_count");
const Sink_takeFirstMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin()), function TakeFirstSinkMixin(instance, delegate, takeCount) {
    init(Disposable_delegatingMixin(), instance, delegate);
    instance[TakeFirstSinkMixin_count] = takeCount;
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
export default Sink_takeFirstMixin;

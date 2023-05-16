/// <reference types="./Sink.distinctUntilChangedMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { __DistinctUntilChangedSinkMixin_equality, __DistinctUntilChangedSinkMixin_hasValue, __DistinctUntilChangedSinkMixin_prev, } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { none, returns } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
const Sink_distinctUntilChangedMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Delegating_mixin(), Disposable_delegatingMixin), function DistinctUntilChangedSinkMixin(instance, delegate, equality) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__DistinctUntilChangedSinkMixin_equality] = equality;
        return instance;
    }, props({
        [__DistinctUntilChangedSinkMixin_equality]: none,
        [__DistinctUntilChangedSinkMixin_prev]: none,
        [__DistinctUntilChangedSinkMixin_hasValue]: false,
    }), {
        [SinkLike_notify](next) {
            const shouldEmit = !this[__DistinctUntilChangedSinkMixin_hasValue] ||
                !this[__DistinctUntilChangedSinkMixin_equality](this[__DistinctUntilChangedSinkMixin_prev], next);
            if (shouldEmit) {
                this[__DistinctUntilChangedSinkMixin_prev] = next;
                this[__DistinctUntilChangedSinkMixin_hasValue] = true;
                this[DelegatingLike_delegate][SinkLike_notify](next);
            }
        },
    }));
})();
export default Sink_distinctUntilChangedMixin;

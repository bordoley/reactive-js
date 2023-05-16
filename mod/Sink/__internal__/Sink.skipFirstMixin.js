/// <reference types="./Sink.skipFirstMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { __SkipFirstSinkMixin_count, __SkipFirstSinkMixin_skipCount, } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { returns } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
const Sink_skipFirstMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function SkipFirstSinkMixin(instance, delegate, skipCount) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__SkipFirstSinkMixin_skipCount] = skipCount;
        return instance;
    }, props({
        [__SkipFirstSinkMixin_skipCount]: 0,
        [__SkipFirstSinkMixin_count]: 0,
    }), {
        [SinkLike_notify](next) {
            this[__SkipFirstSinkMixin_count]++;
            if (this[__SkipFirstSinkMixin_count] >
                this[__SkipFirstSinkMixin_skipCount]) {
                this[DelegatingLike_delegate][SinkLike_notify](next);
            }
        },
    }));
})();
export default Sink_skipFirstMixin;

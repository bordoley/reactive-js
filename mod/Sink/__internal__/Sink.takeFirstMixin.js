/// <reference types="./Sink.takeFirstMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { __TakeFirstSinkMixin_count, __TakeFirstSinkMixin_takeCount, } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { returns } from "../../functions.js";
import { DisposableLike_dispose, SinkLike_notify, } from "../../types.js";
const Sink_takeFirstMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function TakeFirstObserver(instance, delegate, takeCount) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__TakeFirstSinkMixin_takeCount] = takeCount;
        if (takeCount === 0) {
            instance[DisposableLike_dispose]();
        }
        return instance;
    }, props({
        [__TakeFirstSinkMixin_count]: 0,
        [__TakeFirstSinkMixin_takeCount]: 0,
    }), {
        [SinkLike_notify](next) {
            this[__TakeFirstSinkMixin_count]++;
            this[DelegatingLike_delegate][SinkLike_notify](next);
            if (this[__TakeFirstSinkMixin_count] >=
                this[__TakeFirstSinkMixin_takeCount]) {
                this[DisposableLike_dispose]();
            }
        },
    }));
})();
export default Sink_takeFirstMixin;

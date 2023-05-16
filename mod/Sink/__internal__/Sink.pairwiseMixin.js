/// <reference types="./Sink.pairwiseMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { __PairwiseObserver_hasPrev, __PairwiseObserver_prev, } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { none, returns } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
const Sink_pairwiseMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function PairwiseSinkMixin(instance, delegate) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        return instance;
    }, props({
        [__PairwiseObserver_prev]: none,
        [__PairwiseObserver_hasPrev]: false,
    }), {
        [SinkLike_notify](next) {
            const prev = this[__PairwiseObserver_prev];
            if (this[__PairwiseObserver_hasPrev]) {
                this[DelegatingLike_delegate][SinkLike_notify]([prev, next]);
            }
            this[__PairwiseObserver_hasPrev] = true;
            this[__PairwiseObserver_prev] = next;
        },
    }));
})();
export default Sink_pairwiseMixin;

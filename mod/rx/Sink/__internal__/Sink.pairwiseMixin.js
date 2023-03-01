/// <reference types="./Sink.pairwiseMixin.d.ts" />

import { DelegatingLike_delegate, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, returns } from "../../../functions.js";
import { ObserverLike_notify } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
const Sink_pairwiseMixin = /*@__PURE__*/ (() => {
    const PairwiseSinkMixin_prev = Symbol("PairwiseSinkMixin_prev");
    const PairwiseSinkMixin_hasPrev = Symbol("PairwiseSinkMixin_hasPrev");
    return returns(mix(include(Disposable_delegatingMixin()), function PairwiseSinkMixin(instance, delegate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        return instance;
    }, props({
        [PairwiseSinkMixin_prev]: none,
        [PairwiseSinkMixin_hasPrev]: false,
    }), {
        [ObserverLike_notify](next) {
            const prev = this[PairwiseSinkMixin_prev];
            if (this[PairwiseSinkMixin_hasPrev]) {
                this[DelegatingLike_delegate][ObserverLike_notify]([prev, next]);
            }
            this[PairwiseSinkMixin_hasPrev] = true;
            this[PairwiseSinkMixin_prev] = next;
        },
    }));
})();
export default Sink_pairwiseMixin;

/// <reference types="./Sink.pairwiseMixin.d.ts" />
import { mix, include, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { returns, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';

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
        [SinkLike_notify](next) {
            const prev = this[PairwiseSinkMixin_prev];
            if (this[PairwiseSinkMixin_hasPrev]) {
                this[DelegatingLike_delegate][SinkLike_notify]([prev, next]);
            }
            this[PairwiseSinkMixin_hasPrev] = true;
            this[PairwiseSinkMixin_prev] = next;
        },
    }));
})();

export { Sink_pairwiseMixin as default };

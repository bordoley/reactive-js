/// <reference types="./Sink.pairwiseMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import Sink$notify from './Sink.notify.mjs';

const Sink$pairwiseMixin = /*@__PURE__*/ (() => {
    const PairwiseSink_private_prev = Symbol("PairwiseSink_private_prev");
    const PairwiseSink_private_hasPrev = Symbol("PairwiseSink_private_hasPrev");
    return returns(mix(include(Disposable$delegatingMixin), function PairwiseSink(instance, delegate) {
        init(Disposable$delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [PairwiseSink_private_prev]: none,
        [PairwiseSink_private_hasPrev]: false,
    }), {
        [SinkLike_notify](next) {
            const prev = this[PairwiseSink_private_prev];
            if (this[PairwiseSink_private_hasPrev]) {
                pipe(this[DelegatingSinkLike_delegate], Sink$notify([
                    prev,
                    next,
                ]));
            }
            this[PairwiseSink_private_hasPrev] = true;
            this[PairwiseSink_private_prev] = next;
        },
    }));
})();

export { Sink$pairwiseMixin as default };

/// <reference types="./Sink.takeFirstMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const Sink_takeFirstMixin = 
/*@__PURE__*/ (() => {
    const TakeFirstSinkMixin_takeCount = Symbol("TakeFirstSinkMixin_takeCount");
    const TakeFirstSinkMixin_count = Symbol("TakeFirstSinkMixin_count");
    return returns(mix(include(Disposable_delegatingMixin), function TakeFirstSinkMixin(instance, delegate, takeCount) {
        init(Disposable_delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[TakeFirstSinkMixin_takeCount] = takeCount;
        if (takeCount === 0) {
            pipe(instance, Disposable_dispose());
        }
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [TakeFirstSinkMixin_count]: 0,
        [TakeFirstSinkMixin_takeCount]: 0,
    }), {
        [SinkLike_notify](next) {
            this[TakeFirstSinkMixin_count]++;
            this[DelegatingSinkLike_delegate][SinkLike_notify](next);
            if (this[TakeFirstSinkMixin_count] >=
                this[TakeFirstSinkMixin_takeCount]) {
                pipe(this, Disposable_dispose());
            }
        },
    }));
})();

export { Sink_takeFirstMixin as default };

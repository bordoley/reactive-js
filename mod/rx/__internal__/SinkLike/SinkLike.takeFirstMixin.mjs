/// <reference types="./SinkLike.takeFirstMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { dispose } from '../../../util/DisposableLike.mjs';
import delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import { notify } from '../../SinkLike.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const takeFirstMixin = 
/*@__PURE__*/ (() => {
    const TakeFirstSink_private_takeCount = Symbol("TakeFirstSink_private_takeCount");
    const TakeFirstSink_private_count = Symbol("TakeFirstSink_private_count");
    return returns(mix(include(delegatingMixin), function TakeFirstSink(instance, delegate, takeCount) {
        init(delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[TakeFirstSink_private_takeCount] = takeCount;
        if (takeCount === 0) {
            pipe(instance, dispose());
        }
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [TakeFirstSink_private_takeCount]: 0,
        [TakeFirstSink_private_count]: 0,
    }), {
        [SinkLike_notify](next) {
            this[TakeFirstSink_private_count]++;
            pipe(this[DelegatingSinkLike_delegate], notify(next));
            if (this[TakeFirstSink_private_count] >=
                this[TakeFirstSink_private_takeCount]) {
                pipe(this, dispose());
            }
        },
    }));
})();

export { takeFirstMixin as default };

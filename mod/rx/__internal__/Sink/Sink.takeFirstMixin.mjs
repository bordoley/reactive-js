/// <reference types="./Sink.takeFirstMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import Sink_notify from './Sink.notify.mjs';

const Sink_takeFirstMixin = 
/*@__PURE__*/ (() => {
    const TakeFirstSink_private_takeCount = Symbol("TakeFirstSink_private_takeCount");
    const TakeFirstSink_private_count = Symbol("TakeFirstSink_private_count");
    return returns(mix(include(Disposable_delegatingMixin), function TakeFirstSink(instance, delegate, takeCount) {
        init(Disposable_delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[TakeFirstSink_private_takeCount] = takeCount;
        if (takeCount === 0) {
            pipe(instance, Disposable_dispose());
        }
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [TakeFirstSink_private_takeCount]: 0,
        [TakeFirstSink_private_count]: 0,
    }), {
        [SinkLike_notify](next) {
            this[TakeFirstSink_private_count]++;
            pipe(this[DelegatingSinkLike_delegate], Sink_notify(next));
            if (this[TakeFirstSink_private_count] >=
                this[TakeFirstSink_private_takeCount]) {
                pipe(this, Disposable_dispose());
            }
        },
    }));
})();

export { Sink_takeFirstMixin as default };

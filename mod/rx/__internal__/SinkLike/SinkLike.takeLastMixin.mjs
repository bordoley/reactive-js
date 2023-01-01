/// <reference types="./SinkLike.takeLastMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, getLength } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { addTo, onComplete } from '../../../util/DisposableLike.mjs';
import DisposableLike__disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { sinkInto } from '../../ReactiveContainerLike.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const TakeLastSink_last = Symbol("TakeLastSink_last");
const SinkLike__takeLastMixin = (fromArray) => {
    const TakeLastSink_private_takeLastCount = Symbol("TakeLastSink_private_takeLastCount");
    return mix(include(DisposableLike__disposableMixin), function TakeLastSink(instance, delegate, takeLastCount) {
        init(DisposableLike__disposableMixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[TakeLastSink_private_takeLastCount] = takeLastCount;
        instance[TakeLastSink_last] = [];
        pipe(instance, addTo(delegate), onComplete(() => {
            pipe(instance[TakeLastSink_last], fromArray, sinkInto(delegate));
        }));
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [TakeLastSink_private_takeLastCount]: 0,
        [TakeLastSink_last]: none,
    }), {
        [SinkLike_notify](next) {
            const { [TakeLastSink_last]: last } = this;
            last.push(next);
            if (getLength(last) > this[TakeLastSink_private_takeLastCount]) {
                last.shift();
            }
        },
    });
};

export { SinkLike__takeLastMixin as default };

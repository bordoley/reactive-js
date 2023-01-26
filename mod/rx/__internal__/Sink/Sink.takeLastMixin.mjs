/// <reference types="./Sink.takeLastMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, getLength } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import ReactiveContainer$sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const TakeLastSink_last = Symbol("TakeLastSink_last");
const Sink$takeLastMixin = (fromArray) => {
    const TakeLastSink_private_takeLastCount = Symbol("TakeLastSink_private_takeLastCount");
    return mix(include(Disposable$mixin), function TakeLastSink(instance, delegate, takeLastCount) {
        init(Disposable$mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[TakeLastSink_private_takeLastCount] = takeLastCount;
        instance[TakeLastSink_last] = [];
        pipe(instance, Disposable$addTo(delegate), Disposable$onComplete(() => {
            pipe(instance[TakeLastSink_last], fromArray, ReactiveContainer$sinkInto(delegate));
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

export { Sink$takeLastMixin as default };

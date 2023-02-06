/// <reference types="./Sink.takeLastMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, getLength } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import ReactiveContainer_sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';

const Sink_takeLastMixin = (fromArray) => {
    const TakeLastSinkMixin_last = Symbol("TakeLastSinkMixin_last");
    const TakeLastSinkMixin_takeLastCount = Symbol("TakeLastSinkMixin_takeLastCount");
    return mix(include(Disposable_mixin), function TakeLastSinkMixin(instance, delegate, takeLastCount) {
        init(Disposable_mixin, instance);
        instance[TakeLastSinkMixin_takeLastCount] = takeLastCount;
        instance[TakeLastSinkMixin_last] = [];
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            pipe(instance[TakeLastSinkMixin_last], fromArray, ReactiveContainer_sinkInto(delegate));
        }));
        return instance;
    }, props({
        [TakeLastSinkMixin_takeLastCount]: 0,
        [TakeLastSinkMixin_last]: none,
    }), {
        [SinkLike_notify](next) {
            const { [TakeLastSinkMixin_last]: last } = this;
            last.push(next);
            if (getLength(last) > this[TakeLastSinkMixin_takeLastCount]) {
                last.shift();
            }
        },
    });
};

export { Sink_takeLastMixin as default };

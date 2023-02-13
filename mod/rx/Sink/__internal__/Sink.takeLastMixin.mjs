/// <reference types="./Sink.takeLastMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, getLength } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/Disposable/__internal__/Disposable.onComplete.mjs';
import ReactiveContainer_sinkInto from '../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.mjs';

const Sink_takeLastMixin = (fromReadonlyArray) => {
    const TakeLastSinkMixin_last = Symbol("TakeLastSinkMixin_last");
    const TakeLastSinkMixin_takeLastCount = Symbol("TakeLastSinkMixin_takeLastCount");
    return mix(include(Disposable_mixin), function TakeLastSinkMixin(instance, delegate, takeLastCount) {
        init(Disposable_mixin, instance);
        instance[TakeLastSinkMixin_takeLastCount] = takeLastCount;
        instance[TakeLastSinkMixin_last] = [];
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            pipe(instance[TakeLastSinkMixin_last], fromReadonlyArray, ReactiveContainer_sinkInto(delegate));
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

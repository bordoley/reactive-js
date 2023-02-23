/// <reference types="./Sink.takeLastMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { none, pipe } from "../../../functions.js";
import { SinkLike_notify, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
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
            if (ReadonlyArray_getLength(last) > this[TakeLastSinkMixin_takeLastCount]) {
                last.shift();
            }
        },
    });
};
export default Sink_takeLastMixin;

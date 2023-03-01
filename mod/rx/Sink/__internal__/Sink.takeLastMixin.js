/// <reference types="./Sink.takeLastMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { pipe } from "../../../functions.js";
import { ObserverLike_scheduler, SinkLike_notify, } from "../../../rx.js";
import { QueueLike_count, QueueLike_push, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import IndexedQueue_toReadonlyArray from "../../../util/PullableQueue/__internal__/IndexedQueue.toReadonlyArray.js";
import { PullableQueueLike_pull, } from "../../../util/__internal__/util.internal.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const Sink_takeLastMixin = (fromReadonlyArray) => {
    const TakeLastSinkMixin_takeLastCount = Symbol("TakeLastSinkMixin_takeLastCount");
    return mix(include(Disposable_mixin, IndexedQueue_fifoQueueMixin(), Observer_mixin()), function TakeLastSinkMixin(instance, delegate, takeLastCount) {
        init(Disposable_mixin, instance);
        init(IndexedQueue_fifoQueueMixin(), instance);
        init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
        instance[TakeLastSinkMixin_takeLastCount] = takeLastCount;
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            pipe(instance, IndexedQueue_toReadonlyArray(), fromReadonlyArray, Observable_observeWith(delegate));
        }));
        return instance;
    }, props({
        [TakeLastSinkMixin_takeLastCount]: 0,
    }), {
        [SinkLike_notify](next) {
            this[QueueLike_push](next);
            if (this[QueueLike_count] > this[TakeLastSinkMixin_takeLastCount]) {
                this[PullableQueueLike_pull]();
            }
        },
    });
};
export default Sink_takeLastMixin;

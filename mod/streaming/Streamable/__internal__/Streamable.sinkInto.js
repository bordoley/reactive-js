/// <reference types="./Streamable.sinkInto.d.ts" />

import { bindMethod, pipe, returns } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, } from "../../../rx.js";
import Observable_enqueue from "../../../rx/Observable/__internal__/Observable.enqueue.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_merge from "../../../rx/Observable/__internal__/Observable.merge.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observable_subscribeWithDispatcherConfig from "../../../rx/Observable/__internal__/Observable.subscribeWithDispatcherConfig.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
const Streamable_sinkInto = (dest) => (src) => {
    const scheduler = dest[DispatcherLike_scheduler];
    const capacity = dest[QueueableLike_capacity];
    const backpressureStrategy = dest[QueueableLike_backpressureStrategy];
    const srcStream = src[StreamableLike_stream](scheduler, {
        backpressureStrategy,
        capacity,
    });
    pipe(Observable_merge(pipe(srcStream, Observable_enqueue(dest), Observable_ignoreElements(), Observable_onSubscribe(returns(bindMethod(dest, DispatcherLike_complete)))), pipe(dest, Observable_enqueue(srcStream), Observable_ignoreElements())), Observable_ignoreElements(), Observable_subscribeWithDispatcherConfig(dest), Disposable_addTo(dest), Disposable_add(srcStream));
    return src;
};
export default Streamable_sinkInto;

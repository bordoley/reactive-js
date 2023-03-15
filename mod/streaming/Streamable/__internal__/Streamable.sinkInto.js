/// <reference types="./Streamable.sinkInto.d.ts" />

import { pipe } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, } from "../../../rx.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_merge from "../../../rx/Observable/__internal__/Observable.merge.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observable_subscribeWithMaxBufferSize from "../../../rx/Observable/__internal__/Observable.subscribeWithMaxBufferSize.js";
import { SchedulerLike_requestYield } from "../../../scheduling.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import { QueueableLike_maxBufferSize, QueueableLike_push, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
const Streamable_sinkInto = (dest) => (src) => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = src[StreamableLike_stream](scheduler);
    pipe(Observable_merge(pipe(srcStream, Observable_forEach(v => {
        if (!dest[QueueableLike_push](v)) {
            scheduler[SchedulerLike_requestYield]();
        }
    }), Observable_ignoreElements(), Observable_onSubscribe(() => () => dest[DispatcherLike_complete]())), pipe(dest, Observable_forEach(v => {
        if (!srcStream[QueueableLike_push](v)) {
            scheduler[SchedulerLike_requestYield]();
        }
    }), Observable_ignoreElements())), Observable_ignoreElements(), Observable_subscribeWithMaxBufferSize(scheduler, dest[QueueableLike_maxBufferSize]), Disposable_addTo(dest), Disposable_add(srcStream));
    return src;
};
export default Streamable_sinkInto;

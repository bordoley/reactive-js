/// <reference types="./Streamable.sinkInto.d.ts" />

import { bindMethod, pipe, returns } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, } from "../../../rx.js";
import Observable_dispatchTo from "../../../rx/Observable/__internal__/Observable.dispatchTo.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_merge from "../../../rx/Observable/__internal__/Observable.merge.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observable_subscribeWithMaxBufferSize from "../../../rx/Observable/__internal__/Observable.subscribeWithMaxBufferSize.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import { QueueableLike_maxBufferSize } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
const Streamable_sinkInto = (dest) => (src) => {
    const scheduler = dest[DispatcherLike_scheduler];
    const maxBufferSize = dest[QueueableLike_maxBufferSize];
    const srcStream = src[StreamableLike_stream](scheduler, { maxBufferSize });
    pipe(Observable_merge(pipe(srcStream, Observable_dispatchTo(dest), Observable_ignoreElements(), Observable_onSubscribe(returns(bindMethod(dest, DispatcherLike_complete)))), pipe(dest, Observable_dispatchTo(srcStream), Observable_ignoreElements())), Observable_ignoreElements(), Observable_subscribeWithMaxBufferSize(scheduler, dest[QueueableLike_maxBufferSize]), Disposable_addTo(dest), Disposable_add(srcStream));
    return src;
};
export default Streamable_sinkInto;

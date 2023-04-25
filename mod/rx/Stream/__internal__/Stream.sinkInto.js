/// <reference types="./Stream.sinkInto.d.ts" />

import { bindMethod, pipe, returns } from "../../../functions.js";
import { StreamLike_scheduler, } from "../../../rx.js";
import Observable_enqueue from "../../../rx/Observable/__internal__/Observable.enqueue.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_merge from "../../../rx/Observable/__internal__/Observable.merge.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observable_subscribeWithConfig from "../../../rx/Observable/__internal__/Observable.subscribeWithConfig.js";
import { DispatcherLike_complete } from "../../../util.js";
const Stream_sinkInto = (dest) => (src) => {
    return pipe(Observable_merge(pipe(src, Observable_enqueue(dest), Observable_ignoreElements(), Observable_onSubscribe(returns(bindMethod(dest, DispatcherLike_complete)))), pipe(dest, Observable_enqueue(src), Observable_ignoreElements())), Observable_ignoreElements(), Observable_subscribeWithConfig(dest[StreamLike_scheduler], dest));
};
export default Stream_sinkInto;

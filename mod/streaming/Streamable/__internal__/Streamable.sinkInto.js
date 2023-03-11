/// <reference types="./Streamable.sinkInto.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_merge from "../../../rx/Observable/__internal__/Observable.merge.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Queueable_pushTo from "../../../util/Queue/__internal__/Queueable.pushTo.js";
const Streamable_sinkInto = (dest) => (src) => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = src[StreamableLike_stream](scheduler);
    pipe(Observable_merge(pipe(srcStream, Observable_forEach(Queueable_pushTo(dest)), Observable_ignoreElements(), Observable_onSubscribe(() => dest)), pipe(dest, Observable_forEach(Queueable_pushTo(srcStream)), Observable_ignoreElements())), Observable_ignoreElements(), Observable_subscribe(scheduler), Disposable_addTo(dest), Disposable_add(srcStream));
    return src;
};
export default Streamable_sinkInto;

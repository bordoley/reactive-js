/// <reference types="./ReadonlyArray.toAsyncEnumerable.d.ts" />

import { abs } from "../../../__internal__/math.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { compose, decrement, increment, pipe, returns, } from "../../../functions.js";
import ReadonlyArray_toContainer from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toContainer.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, } from "../../../streaming.js";
import Streamable_createWithConfig from "../../../streaming/Streamable/__internal__/Streamable.createWithConfig.js";
const ReadonlyArray_toAsyncEnumerable = 
/*@__PURE__*/
ReadonlyArray_toContainer((array, start, count, options) => {
    const delay = options?.delay ?? 0;
    return Streamable_createWithConfig(compose(count >= 0
        ? Observable_scan(increment, returns(start - 1))
        : Observable_scan(decrement, returns(start + 1)), delay > 0
        ? Observable_concatMap((i) => pipe(array[i], Optional_toObservable(options)))
        : Observable_map((i) => array[i]), Observable_takeFirst({ count: abs(count) })), {
        [StreamableLike_isEnumerable]: delay <= 0,
        [StreamableLike_isInteractive]: true,
        [StreamableLike_isRunnable]: true,
    });
});
export default ReadonlyArray_toAsyncEnumerable;

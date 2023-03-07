/// <reference types="./ReadonlyArray.toAsyncEnumerable.d.ts" />

import { abs } from "../../../__internal__/math.js";
import { compose, decrement, increment, pipe, returns, } from "../../../functions.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import Streamable_createLifted from "../../../streaming/Streamable/__internal__/Streamable.createLifted.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";
const ReadonlyArray_toAsyncEnumerable = 
/*@__PURE__*/
ReadonlyArray_toContainer((array, start, count, options) => {
    var _a;
    const delay = (_a = options === null || options === void 0 ? void 0 : options.delay) !== null && _a !== void 0 ? _a : 0 > 0;
    return Streamable_createLifted(compose(count >= 0
        ? Observable_scan(increment, returns(start - 1))
        : Observable_scan(decrement, returns(start + 1)), (delay !== null && delay !== void 0 ? delay : 0 > 0)
        ? Observable_concatMap((i) => pipe(array[i], Optional_toObservable(options)))
        : Observable_map((i) => array[i]), Observable_takeFirst({ count: abs(count) })), true, delay === 0, true);
});
export default ReadonlyArray_toAsyncEnumerable;

/// <reference types="./ReadonlyArray.toAsyncEnumerable.d.ts" />

import { abs, decrement, increment, pipe, returns, } from "../../../functions.js";
import AsyncEnumerable_create from "../../../ix/AsyncEnumerable/__internal__/AsyncEnumerable.create.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";
import ReadonlyArray_toRunnableObservable from "./ReadonlyArray.toRunnableObservable.js";
const ReadonlyArray_toAsyncEnumerable = 
/*@__PURE__*/
ReadonlyArray_toContainer((array, start, count, options) => {
    var _a;
    return AsyncEnumerable_create(count >= 0
        ? Observable_scan(increment, returns(start - 1))
        : Observable_scan(decrement, returns(start + 1)), ((_a = options === null || options === void 0 ? void 0 : options.delay) !== null && _a !== void 0 ? _a : 0 > 0)
        ? Observable_concatMap((i) => pipe([array[i]], ReadonlyArray_toRunnableObservable(options)))
        : Observable_map((i) => array[i]), Observable_takeFirst({ count: abs(count) }));
});
export default ReadonlyArray_toAsyncEnumerable;

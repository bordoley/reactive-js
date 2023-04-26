/// <reference types="./ReadonlyArray.toAsyncEnumerable.d.ts" />

import { abs } from "../../../__internal__/math.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { compose, decrement, increment, pipe, returns, } from "../../../functions.js";
import ReadonlyArray_toContainer from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toContainer.js";
import Enumerable_toAsyncEnumerable from "../../../rx/Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import AsyncEnumerable_create from "../../../streaming/AsyncEnumerable/__internal__/AsyncEnumerable.create.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";
const ReadonlyArray_toAsyncEnumerable = /*@__PURE__*/ (() => {
    const ReadonlyArray_toAsyncEnumerableWithDelay = ReadonlyArray_toContainer((array, start, count, options) => AsyncEnumerable_create(compose(count >= 0
        ? Observable_scan(increment, returns(start - 1))
        : Observable_scan(decrement, returns(start + 1)), Observable_concatMap((i) => pipe(array[i], Optional_toObservable(options))), Observable_takeFirst({ count: abs(count) }))));
    return (options) => (array) => {
        const delay = options?.delay ?? 0;
        return pipe(array, delay === 0
            ? compose(ReadonlyArray_toObservable(options), Enumerable_toAsyncEnumerable())
            : ReadonlyArray_toAsyncEnumerableWithDelay(options));
    };
})();
export default ReadonlyArray_toAsyncEnumerable;

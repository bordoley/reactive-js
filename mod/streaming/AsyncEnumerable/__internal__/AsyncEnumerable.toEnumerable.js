/// <reference types="./AsyncEnumerable.toEnumerable.d.ts" />

import { errorWithDebugMessage, pipe } from "../../../functions.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
import { StreamableLike_isEnumerable, } from "../../../streaming.js";
import AsyncEnumerable_toObservable from "./AsyncEnumerable.toObservable.js";
const throwOptions = {
    raise: () => errorWithDebugMessage("AsyncEnumerable is not Enumerable"),
};
const AsyncEnumerable_toEnumerable = () => (enumerable) => enumerable[StreamableLike_isEnumerable]
    ? pipe(enumerable, AsyncEnumerable_toObservable())
    : Observable_throws(throwOptions);
export default AsyncEnumerable_toEnumerable;

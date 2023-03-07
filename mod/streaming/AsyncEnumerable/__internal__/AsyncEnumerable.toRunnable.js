/// <reference types="./AsyncEnumerable.toRunnable.d.ts" />

import { errorWithWithDebugMessage, pipe } from "../../../functions.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
import { StreamableLike_isRunnable, } from "../../../streaming.js";
import AsyncEnumerable_toObservable from "./AsyncEnumerable.toObservable.js";
const throwOptions = {
    raise: () => errorWithWithDebugMessage("AsyncEnumerable is not Runnable"),
};
const AsyncEnumerable_toRunnable = () => (enumerable) => enumerable[StreamableLike_isRunnable]
    ? pipe(enumerable, AsyncEnumerable_toObservable())
    : Observable_throws(throwOptions);
export default AsyncEnumerable_toRunnable;

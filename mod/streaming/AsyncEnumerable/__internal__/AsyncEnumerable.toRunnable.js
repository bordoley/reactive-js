/// <reference types="./AsyncEnumerable.toRunnable.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
import { StreamableLike_isRunnable, } from "../../../streaming.js";
import AsyncEnumerable_toObservable from "./AsyncEnumerable.toObservable.js";
const AsyncEnumerable_toRunnable = () => (enumerable) => enumerable[StreamableLike_isRunnable]
    ? pipe(enumerable, AsyncEnumerable_toObservable())
    : Observable_throws();
export default AsyncEnumerable_toRunnable;

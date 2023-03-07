/// <reference types="./AsyncEnumerable.toEnumerable.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
import { StreamableLike_isEnumerable, } from "../../../streaming.js";
import AsyncEnumerable_toObservable from "./AsyncEnumerable.toObservable.js";
const AsyncEnumerable_toEnumerable = () => (enumerable) => enumerable[StreamableLike_isEnumerable]
    ? pipe(enumerable, AsyncEnumerable_toObservable())
    : Observable_throws();
export default AsyncEnumerable_toEnumerable;

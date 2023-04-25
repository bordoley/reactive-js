/// <reference types="./AsyncEnumerable.toEnumerable.d.ts" />

import { errorWithDebugMessage } from "../../../functions.js";
import { ObservableLike_isEnumerable, } from "../../../rx.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
const throwOptions = {
    raise: () => errorWithDebugMessage("AsyncEnumerable is not Enumerable"),
};
const AsyncEnumerable_toEnumerable = () => (enumerable) => enumerable[ObservableLike_isEnumerable]
    ? enumerable
    : Observable_throws(throwOptions);
export default AsyncEnumerable_toEnumerable;

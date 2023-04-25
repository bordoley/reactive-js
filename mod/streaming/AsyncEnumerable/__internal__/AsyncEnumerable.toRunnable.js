/// <reference types="./AsyncEnumerable.toRunnable.d.ts" />

import { errorWithDebugMessage } from "../../../functions.js";
import { ObservableLike_isRunnable, } from "../../../rx.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
const throwOptions = {
    raise: () => errorWithDebugMessage("AsyncEnumerable is not Runnable"),
};
const AsyncEnumerable_toRunnable = () => (enumerable) => enumerable[ObservableLike_isRunnable]
    ? enumerable
    : Observable_throws(throwOptions);
export default AsyncEnumerable_toRunnable;

/// <reference types="./Flowable.toRunnable.d.ts" />

import { errorWithWithDebugMessage, pipe } from "../../../functions.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
import { StreamableLike_isRunnable } from "../../../streaming.js";
import Flowable_toObservable from "./Flowable.toObservable.js";
const throwOptions = {
    raise: () => errorWithWithDebugMessage("Flowable is not Runnable"),
};
const Flowable_toRunnable = () => (enumerable) => enumerable[StreamableLike_isRunnable]
    ? pipe(enumerable, Flowable_toObservable())
    : Observable_throws(throwOptions);
export default Flowable_toRunnable;

/// <reference types="./Flowable.toRunnable.d.ts" />

import { errorWithDebugMessage } from "../../../functions.js";
import { ObservableLike_isRunnable, } from "../../../rx.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
const throwOptions = {
    raise: () => errorWithDebugMessage("Flowable is not Runnable"),
};
const Flowable_toRunnable = () => (flowable) => flowable[ObservableLike_isRunnable]
    ? flowable
    : Observable_throws(throwOptions);
export default Flowable_toRunnable;

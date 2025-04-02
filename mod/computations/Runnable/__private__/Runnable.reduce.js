/// <reference types="./Runnable.reduce.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { DisposableLike_dispose } from "../../../utils.js";
const Runnable_reduce = (reducer, initialValue) => (runnable) => {
    const acc = [initialValue()];
    const sink = Sink.reducer(reducer, acc);
    runnable[RunnableLike_eval](sink);
    sink[DisposableLike_dispose]();
    return acc[0];
};
export default Runnable_reduce;

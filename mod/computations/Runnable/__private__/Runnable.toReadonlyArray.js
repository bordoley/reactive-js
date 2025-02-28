/// <reference types="./Runnable.toReadonlyArray.d.ts" />

import { RunnableLike_eval, SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
class ToReadonlyArraySink {
    [SinkLike_isComplete] = false;
    acc = [];
    [SinkLike_next](next) {
        this.acc.push(next);
    }
    [SinkLike_complete]() {
        this[SinkLike_isComplete] = true;
    }
}
const Runnable_toReadonlyArray = () => (deferable) => {
    const sink = newInstance((ToReadonlyArraySink));
    deferable[RunnableLike_eval](sink);
    return sink.acc;
};
export default Runnable_toReadonlyArray;

/// <reference types="./Runnable.last.d.ts" />

import { RunnableLike_eval, SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
import { newInstance, none } from "../../../functions.js";
class LastSink {
    [SinkLike_isComplete] = false;
    v = none;
    [SinkLike_next](next) {
        this.v = next;
    }
    [SinkLike_complete]() {
        this[SinkLike_isComplete] = true;
    }
}
const Runnable_last = () => (deferable) => {
    const sink = newInstance((LastSink));
    deferable[RunnableLike_eval](sink);
    return sink.v;
};
export default Runnable_last;

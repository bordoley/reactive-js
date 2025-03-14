/// <reference types="./Runnable.last.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { newInstance, none } from "../../../functions.js";
import { SinkLike_complete, SinkLike_isCompleted, SinkLike_push, } from "../../../utils.js";
class LastSink {
    [SinkLike_isCompleted] = false;
    v = none;
    [SinkLike_push](next) {
        this.v = next;
    }
    [SinkLike_complete]() {
        this[SinkLike_isCompleted] = true;
    }
}
const Runnable_last = () => (deferable) => {
    const sink = newInstance((LastSink));
    deferable[RunnableLike_eval](sink);
    return sink.v;
};
export default Runnable_last;

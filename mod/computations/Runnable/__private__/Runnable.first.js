/// <reference types="./Runnable.first.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { newInstance, none } from "../../../functions.js";
import { SinkLike_complete, SinkLike_isCompleted, SinkLike_push, } from "../../../utils.js";
class FirstSink {
    [SinkLike_isCompleted] = false;
    v = none;
    [SinkLike_push](next) {
        this.v = next;
        this[SinkLike_complete]();
    }
    [SinkLike_complete]() {
        this[SinkLike_isCompleted] = true;
    }
}
const Runnable_first = () => (deferable) => {
    const sink = newInstance((FirstSink));
    deferable[RunnableLike_eval](sink);
    return sink.v;
};
export default Runnable_first;

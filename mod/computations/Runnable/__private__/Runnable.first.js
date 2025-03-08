/// <reference types="./Runnable.first.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { newInstance, none } from "../../../functions.js";
import { SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../utils.js";
class FirstSink {
    [SinkLike_isComplete] = false;
    v = none;
    [SinkLike_next](next) {
        this.v = next;
        this[SinkLike_complete]();
    }
    [SinkLike_complete]() {
        this[SinkLike_isComplete] = true;
    }
}
const Runnable_first = () => (deferable) => {
    const sink = newInstance((FirstSink));
    deferable[RunnableLike_eval](sink);
    return sink.v;
};
export default Runnable_first;

/// <reference types="./Deferable.last.d.ts" />

import { DeferableLike_eval, SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
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
const Deferable_last = () => (deferable) => {
    const sink = newInstance((LastSink));
    deferable[DeferableLike_eval](sink);
    return sink.v;
};
export default Deferable_last;

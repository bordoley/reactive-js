/// <reference types="./Runnable.toReadonlyArray.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { RunnableLike_eval } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import { SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../utils.js";
class ToReadonlyArraySink {
    [SinkLike_isComplete] = false;
    acc = [];
    [SinkLike_next](next) {
        this.acc[Array_push](next);
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

/// <reference types="./Runnable.toReadonlyArray.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { RunnableLike_eval } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import { SinkLike_complete, SinkLike_isCompleted, SinkLike_push, } from "../../../utils.js";
class ToReadonlyArraySink {
    [SinkLike_isCompleted] = false;
    acc = [];
    [SinkLike_push](next) {
        this.acc[Array_push](next);
    }
    [SinkLike_complete]() {
        this[SinkLike_isCompleted] = true;
    }
}
const Runnable_toReadonlyArray = () => (deferable) => {
    const sink = newInstance((ToReadonlyArraySink));
    deferable[RunnableLike_eval](sink);
    return sink.acc;
};
export default Runnable_toReadonlyArray;

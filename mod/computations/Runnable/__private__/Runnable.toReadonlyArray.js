/// <reference types="./Runnable.toReadonlyArray.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { RunnableLike_eval } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import { DisposableLike_dispose, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
class ToReadonlyArraySink extends AbstractDelegatingDisposableSink {
    constructor() {
        super(Disposable.create());
    }
    [SinkLike_isCompleted] = false;
    acc = [];
    [EventListenerLike_notify](next) {
        this.acc[Array_push](next);
    }
    [SinkLike_complete]() {
        this[SinkLike_isCompleted] = true;
    }
}
const Runnable_toReadonlyArray = () => (deferable) => {
    const sink = newInstance((ToReadonlyArraySink));
    deferable[RunnableLike_eval](sink);
    sink[DisposableLike_dispose]();
    return sink.acc;
};
export default Runnable_toReadonlyArray;

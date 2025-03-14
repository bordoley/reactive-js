/// <reference types="./Runnable.reduce.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import { DisposableLike_dispose, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
class ReducerSink extends AbstractDelegatingDisposableSink {
    r;
    acc;
    [SinkLike_isCompleted] = false;
    constructor(r, acc) {
        super(Disposable.create());
        this.r = r;
        this.acc = acc;
    }
    [EventListenerLike_notify](next) {
        this.acc = this.r(this.acc, next);
    }
    [SinkLike_complete]() {
        this[SinkLike_isCompleted] = true;
    }
}
const Runnable_reduce = (reducer, initialValue) => (deferable) => {
    const sink = newInstance(ReducerSink, reducer, initialValue());
    deferable[RunnableLike_eval](sink);
    sink[DisposableLike_dispose]();
    return sink.acc;
};
export default Runnable_reduce;

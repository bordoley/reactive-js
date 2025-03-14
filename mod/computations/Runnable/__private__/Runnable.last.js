/// <reference types="./Runnable.last.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { newInstance, none } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import { DisposableLike_dispose, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
class LastSink extends AbstractDelegatingDisposableSink {
    [SinkLike_isCompleted] = false;
    v = none;
    constructor() {
        super(Disposable.create());
    }
    [EventListenerLike_notify](next) {
        this.v = next;
    }
    [SinkLike_complete]() {
        this[SinkLike_isCompleted] = true;
    }
}
const Runnable_last = () => (deferable) => {
    const sink = newInstance((LastSink));
    deferable[RunnableLike_eval](sink);
    sink[DisposableLike_dispose]();
    return sink.v;
};
export default Runnable_last;

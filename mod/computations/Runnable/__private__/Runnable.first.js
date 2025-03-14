/// <reference types="./Runnable.first.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { newInstance, none } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import { DisposableLike_dispose, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
class FirstSink extends AbstractDelegatingDisposableSink {
    [SinkLike_isCompleted] = false;
    v = none;
    constructor() {
        super(Disposable.create());
    }
    [EventListenerLike_notify](next) {
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
    sink[DisposableLike_dispose]();
    return sink.v;
};
export default Runnable_first;

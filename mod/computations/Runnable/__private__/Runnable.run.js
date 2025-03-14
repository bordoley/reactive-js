/// <reference types="./Runnable.run.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import { DisposableLike_dispose, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
class RunSink extends AbstractDelegatingDisposableSink {
    [SinkLike_isCompleted] = false;
    constructor() {
        super(Disposable.create());
    }
    [EventListenerLike_notify](_) { }
    [SinkLike_complete]() {
        this[SinkLike_isCompleted] = true;
    }
}
const Runnable_run = () => (deferable) => {
    const sink = newInstance((RunSink));
    deferable[RunnableLike_eval](sink);
    sink[DisposableLike_dispose]();
};
export default Runnable_run;

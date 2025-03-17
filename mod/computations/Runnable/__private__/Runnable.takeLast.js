/// <reference types="./Runnable.takeLast.d.ts" />

import { newInstance } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as Queue from "../../../utils/Queue.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import { EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, QueueLike_enqueue, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class TakeLastSink extends AbstractDelegatingDisposableSink {
    sink;
    [SinkLike_isCompleted] = false;
    q;
    constructor(sink, cnt) {
        super(sink);
        this.sink = sink;
        this.q = Queue.createDropOldest(cnt);
    }
    [EventListenerLike_notify](next) {
        this.q[QueueLike_enqueue](next);
    }
    [SinkLike_complete]() {
        this[SinkLike_isCompleted] = true;
        const queue = this.q;
        const sink = this.sink;
        while (!sink[SinkLike_isCompleted] && queue[EnumeratorLike_moveNext]()) {
            let v = queue[EnumeratorLike_current];
            sink[EventListenerLike_notify](v);
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_takeLast = (options) => Runnable_lift((sink) => newInstance((TakeLastSink), sink, clampPositiveInteger(options?.count ?? 1)), true);
export default Runnable_takeLast;

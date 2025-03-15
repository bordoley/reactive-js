/// <reference types="./Runnable.takeLast.d.ts" />

import { isSome, newInstance, none, pipe, } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Queue from "../../../utils/Queue.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import { EventListenerLike_notify, QueueLike_dequeue, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class TakeLastSink extends AbstractDelegatingDisposableSink {
    sink;
    [SinkLike_isCompleted] = false;
    q;
    constructor(sink, cnt) {
        super(sink);
        this.sink = sink;
        this.q = pipe(Queue.createDropOldestWithoutBackpressure(cnt), Disposable.addTo(this));
    }
    [EventListenerLike_notify](next) {
        this.q[EventListenerLike_notify](next);
    }
    [SinkLike_complete]() {
        this[SinkLike_isCompleted] = true;
        const queue = this.q;
        const sink = this.sink;
        let v = none;
        while (((v = queue[QueueLike_dequeue]()),
            !sink[SinkLike_isCompleted] && isSome(v))) {
            sink[EventListenerLike_notify](v);
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_takeLast = (options) => Runnable_lift((sink) => newInstance((TakeLastSink), sink, clampPositiveInteger(options?.count ?? 1)), true);
export default Runnable_takeLast;

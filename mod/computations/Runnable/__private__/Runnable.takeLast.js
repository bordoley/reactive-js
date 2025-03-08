/// <reference types="./Runnable.takeLast.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { isSome, newInstance, none } from "../../../functions.js";
import * as Queue from "../../../utils/Queue.js";
import { DropOldestBackpressureStrategy, QueueLike_dequeue, QueueableLike_enqueue, SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class TakeLastSink {
    sink;
    [SinkLike_isComplete] = false;
    q;
    constructor(sink, cnt) {
        this.sink = sink;
        this.q = Queue.create({
            capacity: cnt,
            backpressureStrategy: DropOldestBackpressureStrategy,
        });
    }
    [SinkLike_next](next) {
        this.q[QueueableLike_enqueue](next);
    }
    [SinkLike_complete]() {
        this[SinkLike_isComplete] = true;
        const queue = this.q;
        const sink = this.sink;
        let v = none;
        while (((v = queue[QueueLike_dequeue]()),
            !sink[SinkLike_isComplete] && isSome(v))) {
            sink[SinkLike_next](v);
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_takeLast = (options) => Runnable_lift((sink) => newInstance((TakeLastSink), sink, clampPositiveInteger(options?.count ?? 1)), true);
export default Runnable_takeLast;

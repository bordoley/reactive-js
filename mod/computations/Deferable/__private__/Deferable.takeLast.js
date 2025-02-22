/// <reference types="./Deferable.takeLast.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
import { isSome, newInstance, none } from "../../../functions.js";
import * as Queue from "../../../utils/Queue.js";
import { DropOldestBackpressureStrategy, QueueLike_dequeue, QueueableLike_enqueue, } from "../../../utils.js";
import Deferable_lift from "./Deferable.lift.js";
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
const Deferable_takeLast = (options) => Deferable_lift((sink) => newInstance((TakeLastSink), sink, clampPositiveInteger(options?.count ?? 1)));
export default Deferable_takeLast;

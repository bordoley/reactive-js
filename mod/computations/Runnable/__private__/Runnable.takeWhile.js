/// <reference types="./Runnable.takeWhile.d.ts" />

import { SinkLike_complete, SinkLike_next, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../Sink/__internal__/AbstractSink.js";
import Runnable_lift from "./Runnable.lift.js";
class TakeWhileSink extends AbstractSink {
    p;
    inclusive;
    constructor(sink, p, inclusive) {
        super(sink);
        this.p = p;
        this.inclusive = inclusive;
    }
    [SinkLike_next](next) {
        const satisfiesPredicate = this.p(next);
        if (satisfiesPredicate || this.inclusive) {
            this[AbstractSink_delegate][SinkLike_next](next);
        }
        if (!satisfiesPredicate) {
            this[SinkLike_complete]();
        }
    }
}
const Runnable_takeWhile = (predicate, options = {}) => Runnable_lift((sink) => newInstance((TakeWhileSink), sink, predicate, options?.inclusive ?? false), true);
export default Runnable_takeWhile;

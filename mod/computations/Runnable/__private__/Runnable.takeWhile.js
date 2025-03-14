/// <reference types="./Runnable.takeWhile.d.ts" />

import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../../utils/Sink/__internal__/AbstractSink.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class TakeWhileSink extends AbstractSink {
    p;
    inclusive;
    constructor(sink, p, inclusive) {
        super(sink);
        this.p = p;
        this.inclusive = inclusive;
    }
    [EventListenerLike_notify](next) {
        const satisfiesPredicate = this.p(next);
        if (satisfiesPredicate || this.inclusive) {
            this[AbstractSink_delegate][EventListenerLike_notify](next);
        }
        if (!satisfiesPredicate) {
            this[SinkLike_complete]();
        }
    }
}
const Runnable_takeWhile = (predicate, options = {}) => Runnable_lift((sink) => newInstance((TakeWhileSink), sink, predicate, options?.inclusive ?? false), true);
export default Runnable_takeWhile;

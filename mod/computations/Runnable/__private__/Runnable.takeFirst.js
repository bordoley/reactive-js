/// <reference types="./Runnable.takeFirst.d.ts" />

import { newInstance } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
import AbstractSink, { AbstractSink_delegate, } from "../../../utils/Sink/__internal__/AbstractSink.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class TakeFirstSink extends AbstractSink {
    cnt;
    constructor(sink, cnt) {
        super(sink);
        this.cnt = cnt;
        if (cnt === 0) {
            this[SinkLike_complete]();
        }
    }
    [EventListenerLike_notify](next) {
        this.cnt = max(this.cnt - 1, -1);
        this[AbstractSink_delegate][EventListenerLike_notify](next);
        if (this.cnt <= 0) {
            this[SinkLike_complete]();
        }
    }
}
const Runnable_takeFirst = (options) => Runnable_lift((sink) => newInstance((TakeFirstSink), sink, clampPositiveInteger(options?.count ?? 1)), true);
export default Runnable_takeFirst;

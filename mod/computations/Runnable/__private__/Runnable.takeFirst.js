/// <reference types="./Runnable.takeFirst.d.ts" />

import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../../utils/Sink/__internal__/AbstractSink.js";
import { SinkLike_complete, SinkLike_next } from "../../../utils.js";
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
    [SinkLike_next](next) {
        this.cnt = max(this.cnt - 1, -1);
        this[AbstractSink_delegate][SinkLike_next](next);
        if (this.cnt <= 0) {
            this[SinkLike_complete]();
        }
    }
}
const Runnable_takeFirst = (options) => Runnable_lift((sink) => newInstance((TakeFirstSink), sink, clampPositiveInteger(options?.count ?? 1)), true);
export default Runnable_takeFirst;

/// <reference types="./Runnable.skipFirst.d.ts" />

import { newInstance } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
import AbstractSink, { AbstractSink_delegate, } from "../../../utils/Sink/__internal__/AbstractSink.js";
import { EventListenerLike_notify } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class SkipFirstSink extends AbstractSink {
    cnt;
    constructor(sink, cnt) {
        super(sink);
        this.cnt = cnt;
    }
    [EventListenerLike_notify](next) {
        this.cnt = max(this.cnt - 1, -1);
        if (this.cnt < 0) {
            this[AbstractSink_delegate][EventListenerLike_notify](next);
        }
    }
}
const Runnable_skipFirst = (options) => Runnable_lift((sink) => newInstance((SkipFirstSink), sink, clampPositiveInteger(options?.count ?? 1)), true);
export default Runnable_skipFirst;

/// <reference types="./Runnable.keep.d.ts" />

import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../../utils/Sink/__internal__/AbstractSink.js";
import { EventListenerLike_notify } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class KeepSink extends AbstractSink {
    p;
    constructor(sink, p) {
        super(sink);
        this.p = p;
    }
    [EventListenerLike_notify](next) {
        if (this.p(next)) {
            this[AbstractSink_delegate][EventListenerLike_notify](next);
        }
    }
}
const Runnable_keep = (predicate) => Runnable_lift((sink) => newInstance((KeepSink), sink, predicate));
export default Runnable_keep;

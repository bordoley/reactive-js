/// <reference types="./Runnable.pairwise.d.ts" />

import { newInstance, none, tuple, } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../../utils/Sink/__internal__/AbstractSink.js";
import { EventListenerLike_notify } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class PairwiseSink extends AbstractSink {
    prev = none;
    hasPrev = false;
    [EventListenerLike_notify](next) {
        const prev = this.prev;
        if (this.hasPrev) {
            this[AbstractSink_delegate][EventListenerLike_notify](tuple(prev, next));
        }
        this.hasPrev = true;
        this.prev = next;
    }
}
const Runnable_pairwise = () => Runnable_lift((sink) => newInstance((PairwiseSink), sink), true);
export default Runnable_pairwise;

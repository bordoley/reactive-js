/// <reference types="./Runnable.pairwise.d.ts" />

import { newInstance, none, tuple, } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../../utils/Sink/__internal__/AbstractSink.js";
import { SinkLike_push } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class PairwiseSink extends AbstractSink {
    prev = none;
    hasPrev = false;
    [SinkLike_push](next) {
        const prev = this.prev;
        if (this.hasPrev) {
            this[AbstractSink_delegate][SinkLike_push](tuple(prev, next));
        }
        this.hasPrev = true;
        this.prev = next;
    }
}
const Runnable_pairwise = () => Runnable_lift((sink) => newInstance((PairwiseSink), sink), true);
export default Runnable_pairwise;

/// <reference types="./Deferable.pairwise.d.ts" />

import { SinkLike_next } from "../../../computations.js";
import { newInstance, none, tuple, } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";
class PairwiseSink extends AbstractSink {
    prev = none;
    hasPrev = false;
    [SinkLike_next](next) {
        const prev = this.prev;
        if (this.hasPrev) {
            this[AbstractSink_delegate][SinkLike_next](tuple(prev, next));
        }
        this.hasPrev = true;
        this.prev = next;
    }
}
const Deferable_pairwise = () => Deferable_lift((sink) => newInstance((PairwiseSink), sink), true);
export default Deferable_pairwise;

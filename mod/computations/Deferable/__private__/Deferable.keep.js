/// <reference types="./Deferable.keep.d.ts" />

import { SinkLike_next } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";
class KeepSink extends AbstractSink {
    p;
    constructor(sink, p) {
        super(sink);
        this.p = p;
    }
    [SinkLike_next](next) {
        if (this.p(next)) {
            this[AbstractSink_delegate][SinkLike_next](next);
        }
    }
}
const Deferable_keep = (predicate) => Deferable_lift((sink) => newInstance((KeepSink), sink, predicate));
export default Deferable_keep;

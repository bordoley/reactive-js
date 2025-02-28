/// <reference types="./Runnable.keep.d.ts" />

import { SinkLike_next } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../Sink/__internal__/AbstractSink.js";
import Runnable_lift from "./Runnable.lift.js";
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
const Runnable_keep = (predicate) => Runnable_lift((sink) => newInstance((KeepSink), sink, predicate), true);
export default Runnable_keep;

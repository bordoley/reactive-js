/// <reference types="./Runnable.scan.d.ts" />

import { SinkLike_next } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../Sink/__internal__/AbstractSink.js";
import Runnable_lift from "./Runnable.lift.js";
class ScanSink extends AbstractSink {
    r;
    acc;
    constructor(sink, r, acc) {
        super(sink);
        this.r = r;
        this.acc = acc;
    }
    [SinkLike_next](next) {
        const nextAcc = this.r(this.acc, next);
        this.acc = nextAcc;
        this[AbstractSink_delegate][SinkLike_next](nextAcc);
    }
}
const Runnable_scan = (reducer, initialValue) => Runnable_lift((sink) => newInstance((ScanSink), sink, reducer, initialValue()), true);
export default Runnable_scan;

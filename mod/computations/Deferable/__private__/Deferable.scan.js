/// <reference types="./Deferable.scan.d.ts" />

import { SinkLike_next } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";
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
const Deferable_scan = (reducer, initialValue) => Deferable_lift((sink) => newInstance((ScanSink), sink, reducer, initialValue()), true);
export default Deferable_scan;

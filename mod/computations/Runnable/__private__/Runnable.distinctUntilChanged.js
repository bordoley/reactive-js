/// <reference types="./Runnable.distinctUntilChanged.d.ts" />

import { SinkLike_next } from "../../../computations.js";
import { newInstance, none, strictEquality, } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../Sink/__internal__/AbstractSink.js";
import Runnable_lift from "./Runnable.lift.js";
class DistinctUntilChangedSink extends AbstractSink {
    eq;
    prev = none;
    hasPrev = false;
    constructor(sink, eq) {
        super(sink);
        this.eq = eq;
    }
    [SinkLike_next](next) {
        const shouldEmit = !this.hasPrev || !this.eq(this.prev, next);
        if (shouldEmit) {
            this.prev = next;
            this.hasPrev = true;
            this[AbstractSink_delegate][SinkLike_next](next);
        }
    }
}
const Runnable_distinctUntilChanged = (options) => Runnable_lift((sink) => newInstance((DistinctUntilChangedSink), sink, options?.equality ?? strictEquality), true);
export default Runnable_distinctUntilChanged;

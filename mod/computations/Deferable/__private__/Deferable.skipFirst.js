/// <reference types="./Deferable.skipFirst.d.ts" />

import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { SinkLike_next } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";
class SkipFirstSink extends AbstractSink {
    cnt;
    constructor(sink, cnt) {
        super(sink);
        this.cnt = cnt;
    }
    [SinkLike_next](next) {
        this.cnt = max(this.cnt - 1, -1);
        if (this.cnt < 0) {
            this[AbstractSink_delegate][SinkLike_next](next);
        }
    }
}
const Deferable_skipFirst = (options) => Deferable_lift((sink) => newInstance((SkipFirstSink), sink, clampPositiveInteger(options?.count ?? 1)));
export default Deferable_skipFirst;

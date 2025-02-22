/// <reference types="./Deferable.takeFirst.d.ts" />

import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { SinkLike_complete, SinkLike_next, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";
class TakeFirstSink extends AbstractSink {
    cnt;
    constructor(sink, cnt) {
        super(sink);
        this.cnt = cnt;
        if (cnt === 0) {
            this[SinkLike_complete]();
        }
    }
    [SinkLike_next](next) {
        this.cnt = max(this.cnt - 1, -1);
        this[AbstractSink_delegate][SinkLike_next](next);
        if (this.cnt <= 0) {
            this[SinkLike_complete]();
        }
    }
}
const Deferable_takeFirst = (options) => Deferable_lift((sink) => newInstance((TakeFirstSink), sink, clampPositiveInteger(options?.count ?? 1)));
export default Deferable_takeFirst;

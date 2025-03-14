/// <reference types="./Runnable.forEach.d.ts" />

import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../../utils/Sink/__internal__/AbstractSink.js";
import { SinkLike_push } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class ForEachSink extends AbstractSink {
    ef;
    constructor(sink, ef) {
        super(sink);
        this.ef = ef;
    }
    [SinkLike_push](next) {
        this.ef(next);
        this[AbstractSink_delegate][SinkLike_push](next);
    }
}
const Runnable_forEach = (ef) => Runnable_lift((sink) => newInstance((ForEachSink), sink, ef), false);
export default Runnable_forEach;

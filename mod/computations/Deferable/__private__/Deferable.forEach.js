/// <reference types="./Deferable.forEach.d.ts" />

import { SinkLike_next } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";
class ForEachSink extends AbstractSink {
    ef;
    constructor(sink, ef) {
        super(sink);
        this.ef = ef;
    }
    [SinkLike_next](next) {
        this.ef(next);
        this[AbstractSink_delegate][SinkLike_next](next);
    }
}
const Deferable_forEach = (ef) => Deferable_lift((sink) => newInstance((ForEachSink), sink, ef), false);
export default Deferable_forEach;

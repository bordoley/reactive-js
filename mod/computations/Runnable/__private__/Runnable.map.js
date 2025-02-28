/// <reference types="./Runnable.map.d.ts" />

import { SinkLike_next } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../Sink/__internal__/AbstractSink.js";
import Runnable_lift from "./Runnable.lift.js";
class MapSink extends AbstractSink {
    s;
    constructor(sink, s) {
        super(sink);
        this.s = s;
    }
    [SinkLike_next](next) {
        const mapped = this.s(next);
        this[AbstractSink_delegate][SinkLike_next](mapped);
    }
}
const Runnable_map = (selector) => Runnable_lift((sink) => newInstance((MapSink), sink, selector), true);
export default Runnable_map;

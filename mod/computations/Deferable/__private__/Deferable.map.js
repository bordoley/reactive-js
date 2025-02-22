/// <reference types="./Deferable.map.d.ts" />

import { SinkLike_next } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";
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
const Deferable_map = (selector) => Deferable_lift((sink) => newInstance((MapSink), sink, selector));
export default Deferable_map;

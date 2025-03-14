/// <reference types="./Runnable.map.d.ts" />

import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../../utils/Sink/__internal__/AbstractSink.js";
import { EventListenerLike_notify } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class MapSink extends AbstractSink {
    s;
    constructor(sink, s) {
        super(sink);
        this.s = s;
    }
    [EventListenerLike_notify](next) {
        const mapped = this.s(next);
        this[AbstractSink_delegate][EventListenerLike_notify](mapped);
    }
}
const Runnable_map = (selector) => Runnable_lift((sink) => newInstance((MapSink), sink, selector));
export default Runnable_map;

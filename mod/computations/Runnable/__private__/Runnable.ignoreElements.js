/// <reference types="./Runnable.ignoreElements.d.ts" />

import { SinkLike_next } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink from "../../Sink/__internal__/AbstractSink.js";
import Runnable_lift from "./Runnable.lift.js";
class IgnoreElementsSink extends AbstractSink {
    [SinkLike_next](_) { }
}
const Runnable_ignoreElements = () => Runnable_lift((sink) => newInstance((IgnoreElementsSink), sink), true);
export default Runnable_ignoreElements;

/// <reference types="./Deferable.ignoreElements.d.ts" />

import { SinkLike_next } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";
class IgnoreElementsSink extends AbstractSink {
    [SinkLike_next](_) { }
}
const Deferable_ignoreElements = () => Deferable_lift((sink) => newInstance((IgnoreElementsSink), sink), true);
export default Deferable_ignoreElements;

/// <reference types="./Producer.withLatestFrom.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import { partial, pipe, tuple, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
import * as WithLatestFromSink from "../../__internal__/sinks/WithLatestFromSink.js";
import Producer_lift from "./Producer.lift.js";
const addEventListener = (effect) => EventSource.subscribe(effect);
const Producer_withLatestFrom = ((other, selector = tuple) => pipe((WithLatestFromSink.create), partial(other, selector, addEventListener), Producer_lift({
    [ComputationLike_isPure]: Computation.isPure(other),
})));
export default Producer_withLatestFrom;

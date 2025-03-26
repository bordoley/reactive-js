/// <reference types="./Producer.withLatestFrom.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import { compose, partial, pipe, tuple, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as WithLatestFromSink from "../../__internal__/sinks/WithLatestFromSink.js";
import Producer_forEach from "./Producer.forEach.js";
import Producer_lift from "./Producer.lift.js";
import Producer_subscribe from "./Producer.subscribe.js";
const addEventListener = (_, effect) => compose(Producer_forEach(effect), Producer_subscribe());
const Producer_withLatestFrom = ((other, selector = tuple) => pipe((WithLatestFromSink.create), partial(other, selector, addEventListener), Producer_lift({
    [ComputationLike_isPure]: Computation.isPure(other),
})));
export default Producer_withLatestFrom;

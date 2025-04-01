/// <reference types="./Observable.withLatestFrom.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { compose, partial, pipe, tuple, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
import * as WithLatestFromSink from "../../__internal__/sinks/WithLatestFromSink.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
const addEventListener = (scheduler, effect) => compose(Observable_forEach(effect), EventSource.subscribe({ scheduler }));
const Observable_withLatestFrom = ((other, selector = tuple) => pipe((WithLatestFromSink.create), partial(other, selector, addEventListener), Observable_lift({
    [ComputationLike_isPure]: Computation.isPure(other),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(other),
})));
export default Observable_withLatestFrom;

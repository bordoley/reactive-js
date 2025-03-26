/// <reference types="./Observable.withLatestFrom.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { compose, partial, pipe, tuple, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as WithLatestFrom from "../../__internal__/operators/WithLatestFromOperator.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";
const addEventListener = (scheduler, effect) => compose(Observable_forEach(effect), Observable_subscribe({ scheduler }));
const Observable_withLatestFrom = ((other, selector = tuple) => pipe((WithLatestFrom.create), partial(other, selector, addEventListener), Observable_lift({
    [ComputationLike_isPure]: Computation.isPure(other),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(other),
})));
export default Observable_withLatestFrom;

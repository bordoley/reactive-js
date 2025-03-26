/// <reference types="./Observable.pairwise.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as PairwiseSink from "../../__internal__/sinks/PairwiseSink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_pairwise = /*@__PURE__*/ (() => returns(pipe(PairwiseSink.create, Observable_lift())))();
export default Observable_pairwise;

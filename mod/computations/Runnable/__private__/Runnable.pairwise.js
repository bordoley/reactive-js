/// <reference types="./Runnable.pairwise.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as PairwiseSink from "../../__internal__/sinks/PairwiseSink.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_pairwise = /*@__PURE__*/ (() => returns(pipe(PairwiseSink.create, Runnable_lift())))();
export default Runnable_pairwise;

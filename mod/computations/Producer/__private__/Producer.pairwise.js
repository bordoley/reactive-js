/// <reference types="./Producer.pairwise.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as PairwiseSink from "../../__internal__/sinks/PairwiseSink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_pairwise = /*@__PURE__*/ (() => returns(pipe(PairwiseSink.create, Producer_lift())))();
export default Producer_pairwise;

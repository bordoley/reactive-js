/// <reference types="./Producer.pairwise.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as PairwiseOperator from "../../__internal__/operators/PairwiseOperator.js";
import Producer_lift from "./Producer.lift.js";
const Producer_pairwise = /*@__PURE__*/ (() => returns(pipe(PairwiseOperator.create, Producer_lift())))();
export default Producer_pairwise;

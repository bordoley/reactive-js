/// <reference types="./Observable.pairwise.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as PairwiseOperator from "../../__internal__/operators/PairwiseOperator.js";
import Observable_lift from "./Observable.lift.js";
const Observable_pairwise = /*@__PURE__*/ (() => returns(pipe(PairwiseOperator.create, Observable_lift())))();
export default Observable_pairwise;

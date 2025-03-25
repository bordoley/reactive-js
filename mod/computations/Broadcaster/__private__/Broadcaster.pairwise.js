/// <reference types="./Broadcaster.pairwise.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as PairwiseOperator from "../../__internal__/operators/PairwiseOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_pairwise = /*@__PURE__*/ (() => returns(pipe(PairwiseOperator.create, (Broadcaster_lift))))();
export default Broadcaster_pairwise;

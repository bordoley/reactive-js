/// <reference types="./Broadcaster.pairwise.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as PairwiseSink from "../../__internal__/sinks/PairwiseSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_pairwise = /*@__PURE__*/ (() => returns(pipe(PairwiseSink.create, (Broadcaster_lift))))();
export default Broadcaster_pairwise;

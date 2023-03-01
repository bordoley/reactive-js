/// <reference types="./Runnable.exhaust.d.ts" />

import { returns } from "../../../functions.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";
const Runnable_exhaust = /*@__PURE__*/ (() => returns(Runnable_mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
})))();
export default Runnable_exhaust;

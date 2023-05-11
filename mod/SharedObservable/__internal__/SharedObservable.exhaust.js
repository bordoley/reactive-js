/// <reference types="./SharedObservable.exhaust.d.ts" />

import { returns } from "../../functions.js";
import SharedObservable_mergeAll from "./SharedObservable.mergeAll.js";
const SharedObservable_exhaust = 
/*@__PURE__*/ (() => returns(SharedObservable_mergeAll({
    capacity: 0,
    backpressureStrategy: "drop-latest",
    concurrency: 1,
})))();
export default SharedObservable_exhaust;

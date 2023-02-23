/// <reference types="./RunnableObservable.exhaust.d.ts" />

import { returns } from "../../../functions.js";
import RunnableObservable_mergeAll from "./RunnableObservable.mergeAll.js";
const RunnableObservable_exhaust = 
/*@__PURE__*/ (() => returns(RunnableObservable_mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
})))();
export default RunnableObservable_exhaust;

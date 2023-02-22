/// <reference types="./Continuation.d.ts" />

import Continuation_run from "../scheduling/Continuation/__internal__/Continuation.run.js";
import { Continuation__now, Continuation__yield, } from "./Continuation/__internal__/Continuation.create.js";
/**
 * @category ContinuationEffect
 */
export const __now = Continuation__now;
/**
 * @category ContinuationEffect
 */
export const __yield = Continuation__yield;
export const run = Continuation_run;

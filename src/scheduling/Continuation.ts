import Continuation_run from "../scheduling/Continuation/__internal__/Continuation.run";
import {
  Continuation__now,
  Continuation__yield,
} from "./Continuation/__internal__/Continuation.create";

/**
 * @category ContinuationEffect
 */
export const __now = Continuation__now;

/**
 * @category ContinuationEffect
 */
export const __yield = Continuation__yield;

export const run = Continuation_run;

/** @ignore */
const Continuation = {
  run,
};

export default Continuation;

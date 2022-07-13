import { DisposableLike } from "../util/DisposableLike";
import { Identity } from "../util/functions";

export const ContinuationLike_run = Symbol("ContinuationLike_run");

/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
export interface ContinuationLike extends DisposableLike {
  [ContinuationLike_run](): void;
}

export const run: Identity<ContinuationLike> = continuation => {
  continuation[ContinuationLike_run]();
  return continuation;
};

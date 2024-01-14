import { DisposableLike } from "../../utils.js";

export const ContinuationLike_run = Symbol("ContinuationLike_run");
export const ContinuationLike_dueTime = Symbol("ContinuationLike_dueTime");
export const ContinuationLike_id = Symbol("ContinuationLike_id");

export interface ContinuationLike extends DisposableLike {
  readonly [ContinuationLike_dueTime]: number;
  readonly [ContinuationLike_id]: number;

  [ContinuationLike_run](): void;
}

export const compare = (a: ContinuationLike, b: ContinuationLike) => {
  const diff = a[ContinuationLike_dueTime] - b[ContinuationLike_dueTime];
  return diff !== 0 ? diff : a[ContinuationLike_id] - b[ContinuationLike_id];
};

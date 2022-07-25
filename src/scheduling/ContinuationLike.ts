import { Identity } from "../functions";
import { ContinuationLike, ContinuationLike_run } from "../scheduling";

export const run: Identity<ContinuationLike> = continuation => {
  continuation[ContinuationLike_run]();
  return continuation;
};

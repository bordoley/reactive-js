import {
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
} from "../../concurrent.js";
import { ContinuationLike } from "./Continuation.js";

export const ContinuationSchedulerLike_shouldYield = Symbol(
  "ContinuationSchedulerLike_shouldYield",
);
export const ContinuationSchedulerLike_schedule = Symbol(
  "ContinuationSchedulerLike_schedule",
);

export interface ContinuationSchedulerLike
  extends Pick<
    SchedulerLike,
    typeof SchedulerLike_now | typeof SchedulerLike_maxYieldInterval
  > {
  readonly [ContinuationSchedulerLike_shouldYield]: boolean;

  [ContinuationSchedulerLike_schedule](continuation: ContinuationLike): void;
}

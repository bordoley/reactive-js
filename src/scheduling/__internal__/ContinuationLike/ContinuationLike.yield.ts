import { getDelay } from "../../../__internal__/scheduling/SchedulerLike.options";
import { newInstance, pipe, raise } from "../../../functions";
import * as CurrentScheduler from "../CurrentScheduler";
import shouldYield from "../SchedulerLike/SchedulerLike.shouldYield";
import YieldError from "../YieldError";

const ContinuationLike__yield_ = (options?: { delay?: number }) => {
  const delay = getDelay(options);
  const scheduler = CurrentScheduler.get();

  if (delay > 0 || shouldYield(scheduler)) {
    pipe(newInstance(YieldError, delay), raise);
  }
};

export default ContinuationLike__yield_;

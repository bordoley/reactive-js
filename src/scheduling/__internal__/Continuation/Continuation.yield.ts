import { newInstance } from "../../../functions";
import * as CurrentScheduler from "../CurrentScheduler";
import { getDelay } from "../Scheduler.options";
import shouldYield from "../Scheduler/Scheduler.shouldYield";
import YieldError from "../YieldError";

const Continuation_yield_ = (options?: { delay?: number }) => {
  const delay = getDelay(options);
  const scheduler = CurrentScheduler.get();

  if (delay > 0 || shouldYield(scheduler)) {
    throw newInstance(YieldError, delay);
  }
};

export default Continuation_yield_;

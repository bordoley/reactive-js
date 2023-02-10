import { newInstance } from "../../../functions";
import shouldYield from "../../Scheduler/__internal__/Scheduler.shouldYield";
import * as CurrentScheduler from "../../__internal__/CurrentScheduler";
import { getDelay } from "../../__internal__/Scheduler.options";
import YieldError from "../../__internal__/YieldError";

const Continuation_yield_ = (options?: { delay?: number }) => {
  const delay = getDelay(options);
  const scheduler = CurrentScheduler.get();

  if (delay > 0 || shouldYield(scheduler)) {
    throw newInstance(YieldError, delay);
  }
};

export default Continuation_yield_;

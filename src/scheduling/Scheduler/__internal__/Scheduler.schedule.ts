import { Function1, SideEffect, isFunction } from "../../../functions";
import {
  ContinuationLike,
  SchedulerLike,
  SchedulerLike_schedule,
} from "../../../scheduling";
import { DisposableLike } from "../../../util";
import Continuation_create from "../../Continuation/__internal__/Continuation.create";

const Scheduler_schedule =
  (
    f: SideEffect | ContinuationLike,
    options?: { readonly delay?: number },
  ): Function1<SchedulerLike, DisposableLike> =>
  scheduler => {
    const continuation = isFunction(f) ? Continuation_create(scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
  };

export default Scheduler_schedule;

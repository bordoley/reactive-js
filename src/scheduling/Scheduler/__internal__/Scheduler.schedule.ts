import { Function1, SideEffect } from "../../../functions.js";
import { SchedulerLike, SchedulerLike_schedule } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
import Continuation_create from "../../Continuation/__internal__/Continuation.create.js";

const Scheduler_schedule =
  (
    f: SideEffect,
    options?: { readonly delay?: number },
  ): Function1<SchedulerLike, DisposableLike> =>
  scheduler => {
    const continuation = Continuation_create(scheduler, f);
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
  };

export default Scheduler_schedule;

import { Function1, SideEffect } from "../../../functions";
import { SchedulerLike, SchedulerLike_schedule } from "../../../scheduling";
import { DisposableLike } from "../../../util";
import Continuation_create from "../../Continuation/__internal__/Continuation.create";

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

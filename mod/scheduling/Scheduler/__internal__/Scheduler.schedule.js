/// <reference types="./Scheduler.schedule.d.ts" />

import { SchedulerLike_schedule } from "../../../scheduling.js";
import Continuation_create from "../../Continuation/__internal__/Continuation.create.js";
const Scheduler_schedule = (f, options) => scheduler => {
    const continuation = Continuation_create(scheduler, f);
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
};
export default Scheduler_schedule;

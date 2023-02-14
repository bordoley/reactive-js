/// <reference types="./Scheduler.schedule.d.ts" />
import { isFunction } from '../../../functions.mjs';
import { SchedulerLike_schedule } from '../../../scheduling.mjs';
import Continuation_create from '../../Continuation/__internal__/Continuation.create.mjs';

const Scheduler_schedule = (f, options) => scheduler => {
    const continuation = isFunction(f) ? Continuation_create(scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
};

export { Scheduler_schedule as default };

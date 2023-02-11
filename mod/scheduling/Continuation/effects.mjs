/// <reference types="./effects.d.ts" />
import { newInstance } from '../../functions.mjs';
import { SchedulerLike_inContinuation } from '../../scheduling.mjs';
import Scheduler_shouldYield from '../Scheduler/__internal__/Scheduler.shouldYield.mjs';
import { get } from '../__internal__/CurrentScheduler.mjs';
import YieldError from '../__internal__/YieldError.mjs';

const __yield = (delay = 0) => {
    const scheduler = get();
    scheduler[SchedulerLike_inContinuation];
    if (scheduler[SchedulerLike_inContinuation] &&
        (delay > 0 || Scheduler_shouldYield(scheduler))) {
        throw newInstance(YieldError, delay);
    }
};

export { __yield };

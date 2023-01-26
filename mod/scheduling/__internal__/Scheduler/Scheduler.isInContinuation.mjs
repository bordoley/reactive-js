/// <reference types="./Scheduler.isInContinuation.d.ts" />
import { SchedulerLike_inContinuation } from '../../../scheduling.mjs';

const Scheduler_isInContinuation = (scheduler) => scheduler[SchedulerLike_inContinuation];

export { Scheduler_isInContinuation as default };

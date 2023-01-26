/// <reference types="./Scheduler.getCurrentTime.d.ts" />
import { SchedulerLike_now } from '../../../scheduling.mjs';

const Scheduler$getCurrentTime = (scheduler) => scheduler[SchedulerLike_now];

export { Scheduler$getCurrentTime as default };

/// <reference types="./Scheduler.requestYield.d.ts" />
import { SchedulerLike_requestYield } from '../../../scheduling.mjs';

const Scheduler_requestYield = (scheduler) => scheduler[SchedulerLike_requestYield]();

export { Scheduler_requestYield as default };

/// <reference types="./Scheduler.requestYield.d.ts" />
import { SchedulerLike_requestYield } from '../../../scheduling.mjs';

const Scheduler$requestYield = (scheduler) => scheduler[SchedulerLike_requestYield]();

export { Scheduler$requestYield as default };

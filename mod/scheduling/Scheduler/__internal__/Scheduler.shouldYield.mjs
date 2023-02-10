/// <reference types="./Scheduler.shouldYield.d.ts" />
import { SchedulerLike_shouldYield } from '../../../scheduling.mjs';

const Scheduler_shouldYield = (scheduler) => scheduler[SchedulerLike_shouldYield];

export { Scheduler_shouldYield as default };

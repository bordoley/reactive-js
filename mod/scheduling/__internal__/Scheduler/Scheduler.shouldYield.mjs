/// <reference types="./Scheduler.shouldYield.d.ts" />
import { SchedulerLike_shouldYield } from '../../../scheduling.mjs';

const Scheduler$shouldYield = (scheduler) => scheduler[SchedulerLike_shouldYield];

export { Scheduler$shouldYield as default };

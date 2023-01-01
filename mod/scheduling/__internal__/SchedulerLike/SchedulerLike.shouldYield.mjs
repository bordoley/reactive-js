/// <reference types="./SchedulerLike.shouldYield.d.ts" />
import { SchedulerLike_shouldYield } from '../../../scheduling.mjs';

const SchedulerLike__shouldYield = (scheduler) => scheduler[SchedulerLike_shouldYield];

export { SchedulerLike__shouldYield as default };

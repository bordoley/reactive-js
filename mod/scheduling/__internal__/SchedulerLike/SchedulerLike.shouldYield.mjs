/// <reference types="./SchedulerLike.shouldYield.d.ts" />
import { SchedulerLike_shouldYield } from '../../../scheduling.mjs';

const shouldYield = (scheduler) => scheduler[SchedulerLike_shouldYield];

export { shouldYield as default };

/// <reference types="./SchedulerLike.isInContinuation.d.ts" />
import { SchedulerLike_inContinuation } from '../../../scheduling.mjs';

const isInContinuation = (scheduler) => scheduler[SchedulerLike_inContinuation];

export { isInContinuation };

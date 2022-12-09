/// <reference types="./SchedulerLike.getCurrentTime.d.ts" />
import { SchedulerLike_now } from '../../../scheduling.mjs';

const getCurrentTime = (scheduler) => scheduler[SchedulerLike_now];

export { getCurrentTime };

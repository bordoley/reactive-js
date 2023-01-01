/// <reference types="./SchedulerLike.getCurrentTime.d.ts" />
import { SchedulerLike_now } from '../../../scheduling.mjs';

const SchedulerLike__getCurrentTime = (scheduler) => scheduler[SchedulerLike_now];

export { SchedulerLike__getCurrentTime as default };

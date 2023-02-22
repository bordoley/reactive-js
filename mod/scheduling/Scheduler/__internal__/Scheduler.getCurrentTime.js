/// <reference types="./Scheduler.getCurrentTime.d.ts" />

import { SchedulerLike_now } from "../../../scheduling.js";
const Scheduler_getCurrentTime = (scheduler) => scheduler[SchedulerLike_now];
export default Scheduler_getCurrentTime;

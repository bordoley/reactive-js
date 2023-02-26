/// <reference types="./Scheduler.shouldYield.d.ts" />

import { SchedulerLike_shouldYield, } from "../../../scheduling.js";
const Scheduler_shouldYield = (scheduler) => scheduler[SchedulerLike_shouldYield];
export default Scheduler_shouldYield;

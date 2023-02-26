/// <reference types="./Scheduler.requestYield.d.ts" />

import { SchedulerLike_requestYield, } from "../../../scheduling.js";
const Scheduler_requestYield = (scheduler) => scheduler[SchedulerLike_requestYield]();
export default Scheduler_requestYield;

/// <reference types="./Scheduler.toPausableScheduler.d.ts" />

import { PauseableSchedulerLike_pause, } from "../../../scheduling.js";
import Scheduler_toPriorityScheduler from "./Scheduler.toPriorityScheduler.js";
const Scheduler_toPausableScheduler = scheduler => {
    const pauseableScheduler = Scheduler_toPriorityScheduler(scheduler);
    pauseableScheduler[PauseableSchedulerLike_pause]();
    return pauseableScheduler;
};
export default Scheduler_toPausableScheduler;

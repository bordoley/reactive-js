/// <reference types="./Scheduler.toPausableScheduler.d.ts" />

import { PauseableState_paused, } from "../../../scheduling.js";
import { QueueLike_push } from "../../../util.js";
import Scheduler_toPriorityScheduler from "./Scheduler.toPriorityScheduler.js";
const Scheduler_toPausableScheduler = scheduler => {
    const pauseableScheduler = Scheduler_toPriorityScheduler(scheduler);
    pauseableScheduler[QueueLike_push](PauseableState_paused);
    return pauseableScheduler;
};
export default Scheduler_toPausableScheduler;

/// <reference types="./Scheduler.toPausableScheduler.d.ts" />

import { PauseableState_paused, } from "../../../scheduling.js";
import { QueueLike_push } from "../../../util.js";
import { create as createQueueScheduler } from "../../__internal__/QueueScheduler.js";
const Scheduler_toPausableScheduler = scheduler => {
    const pauseableScheduler = createQueueScheduler(scheduler);
    pauseableScheduler[QueueLike_push](PauseableState_paused);
    return pauseableScheduler;
};
export default Scheduler_toPausableScheduler;

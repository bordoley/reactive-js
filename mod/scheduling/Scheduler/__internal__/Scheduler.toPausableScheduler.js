/// <reference types="./Scheduler.toPausableScheduler.d.ts" />

import { PauseableSchedulerLike_pause, } from "../../../scheduling.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Scheduler_createQueueScheduler from "./Scheduler.createQueueScheduler.js";
const Scheduler_toPauseableScheduler = (hostScheduler) => {
    const scheduler = Scheduler_createQueueScheduler(hostScheduler, IndexedQueue_createFifoQueue);
    scheduler[PauseableSchedulerLike_pause]();
    return scheduler;
};
export default Scheduler_toPauseableScheduler;

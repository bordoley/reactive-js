/// <reference types="./Scheduler.toPausableScheduler.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { PauseableSchedulerLike_pause, } from "../../../scheduling.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Scheduler_createQueueScheduler from "./Scheduler.createQueueScheduler.js";
const Scheduler_toPauseableScheduler = (hostScheduler) => {
    const scheduler = Scheduler_createQueueScheduler(hostScheduler, () => IndexedQueue_createFifoQueue(MAX_SAFE_INTEGER, "overflow"));
    scheduler[PauseableSchedulerLike_pause]();
    return scheduler;
};
export default Scheduler_toPauseableScheduler;

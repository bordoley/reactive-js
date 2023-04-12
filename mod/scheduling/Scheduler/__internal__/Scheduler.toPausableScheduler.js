/// <reference types="./Scheduler.toPausableScheduler.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { PauseableSchedulerLike_pause, } from "../../../scheduling.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";
import Scheduler_createQueueScheduler from "./Scheduler.createQueueScheduler.js";
const Scheduler_toPauseableScheduler = (hostScheduler) => {
    const scheduler = Scheduler_createQueueScheduler(hostScheduler, () => Queue_createIndexedQueue(MAX_SAFE_INTEGER, "overflow"));
    scheduler[PauseableSchedulerLike_pause]();
    return scheduler;
};
export default Scheduler_toPauseableScheduler;

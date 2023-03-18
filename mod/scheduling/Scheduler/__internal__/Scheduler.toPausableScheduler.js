/// <reference types="./Scheduler.toPausableScheduler.d.ts" />

import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Scheduler_createQueueScheduler from "./Scheduler.createQueueScheduler.js";
const Scheduler_toPriorityScheduler = (hostScheduler) => Scheduler_createQueueScheduler(hostScheduler, IndexedQueue_createFifoQueue);
export default Scheduler_toPriorityScheduler;

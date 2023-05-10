/// <reference types="./Scheduler.d.ts" />

import Scheduler_createHostScheduler from "./Scheduler/__internal__/Scheduler.createHostScheduler.js";
import Scheduler_createPausableScheduler from "./Scheduler/__internal__/Scheduler.createPausableScheduler.js";
import Scheduler_createVirtualTimeScheduler from "./Scheduler/__internal__/Scheduler.createVirtualTimeScheduler.js";
export const createHostScheduler = Scheduler_createHostScheduler;
export const createVirtualTimeScheduler = Scheduler_createVirtualTimeScheduler;
export const createPausableScheduler = Scheduler_createPausableScheduler;

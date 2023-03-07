/// <reference types="./Scheduler.d.ts" />

import Scheduler_createHostScheduler from "./Scheduler/__internal__/Scheduler.createHostScheduler.js";
import Scheduler_createVirtualTimeScheduler from "./Scheduler/__internal__/Scheduler.createVirtualTimeScheduler.js";
import Scheduler_schedule from "./Scheduler/__internal__/Scheduler.schedule.js";
import Scheduler_toPausableScheduler from "./Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import { create as Scheduler_toPriorityScheduler } from "./__internal__/QueueScheduler.js";
export const createHostScheduler = Scheduler_createHostScheduler;
export const createVirtualTimeScheduler = Scheduler_createVirtualTimeScheduler;
export const schedule = Scheduler_schedule;
export const toPausableScheduler = Scheduler_toPausableScheduler;
export const toPriorityScheduler = Scheduler_toPriorityScheduler;

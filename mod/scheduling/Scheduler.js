/// <reference types="./Scheduler.d.ts" />

import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_shouldYield, } from "../scheduling.js";
import Scheduler_createHostScheduler from "./Scheduler/__internal__/Scheduler.createHostScheduler.js";
import Scheduler_getCurrentTime from "./Scheduler/__internal__/Scheduler.getCurrentTime.js";
import Scheduler_isInContinuation from "./Scheduler/__internal__/Scheduler.isInContinuation.js";
import Scheduler_requestYield from "./Scheduler/__internal__/Scheduler.requestYield.js";
import Scheduler_schedule from "./Scheduler/__internal__/Scheduler.schedule.js";
import Scheduler_shouldYield from "./Scheduler/__internal__/Scheduler.shouldYield.js";
import Scheduler_toPausableScheduler from "./Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import { create as Scheduler_toPriorityScheduler } from "./__internal__/QueueScheduler.js";
export const createHostScheduler = Scheduler_createHostScheduler;
export const getCurrentTime = Scheduler_getCurrentTime;
export const isInContinuation = Scheduler_isInContinuation;
export const requestYield = Scheduler_requestYield;
export const shouldYield = Scheduler_shouldYield;
export const schedule = Scheduler_schedule;
export const toPausableScheduler = Scheduler_toPausableScheduler;
export const toPriorityScheduler = Scheduler_toPriorityScheduler;

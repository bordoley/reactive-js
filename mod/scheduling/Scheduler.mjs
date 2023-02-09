/// <reference types="./Scheduler.d.ts" />
import '../scheduling.mjs';
import { create } from './__internal__/QueueScheduler.mjs';
import Scheduler_createHostScheduler from './__internal__/Scheduler/Scheduler.createHostScheduler.mjs';
import Scheduler_getCurrentTime from './__internal__/Scheduler/Scheduler.getCurrentTime.mjs';
import Scheduler_isInContinuation from './__internal__/Scheduler/Scheduler.isInContinuation.mjs';
import Scheduler_requestYield from './__internal__/Scheduler/Scheduler.requestYield.mjs';
import Scheduler_schedule from './__internal__/Scheduler/Scheduler.schedule.mjs';
import Scheduler_shouldYield from './__internal__/Scheduler/Scheduler.shouldYield.mjs';
import Scheduler_toPausableScheduler from './__internal__/Scheduler/Scheduler.toPausableScheduler.mjs';

const createHostScheduler = Scheduler_createHostScheduler;
const getCurrentTime = Scheduler_getCurrentTime;
const isInContinuation = Scheduler_isInContinuation;
const requestYield = Scheduler_requestYield;
const shouldYield = Scheduler_shouldYield;
const schedule = Scheduler_schedule;
const toPausableScheduler = Scheduler_toPausableScheduler;
const toPriorityScheduler = create;
/** @ignore */
const Scheduler = {
    createHostScheduler,
    getCurrentTime,
    isInContinuation,
    requestYield,
    shouldYield,
    schedule,
    toPausableScheduler,
    toPriorityScheduler,
};

export { createHostScheduler, Scheduler as default, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield, toPausableScheduler, toPriorityScheduler };

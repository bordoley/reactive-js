/// <reference types="./Scheduler.d.ts" />
import '../scheduling.mjs';
import Scheduler_createHostScheduler from './Scheduler/__internal__/Scheduler.createHostScheduler.mjs';
import Scheduler_getCurrentTime from './Scheduler/__internal__/Scheduler.getCurrentTime.mjs';
import Scheduler_isInContinuation from './Scheduler/__internal__/Scheduler.isInContinuation.mjs';
import Scheduler_requestYield from './Scheduler/__internal__/Scheduler.requestYield.mjs';
import Scheduler_schedule from './Scheduler/__internal__/Scheduler.schedule.mjs';
import Scheduler_shouldYield from './Scheduler/__internal__/Scheduler.shouldYield.mjs';
import Scheduler_toPausableScheduler from './Scheduler/__internal__/Scheduler.toPausableScheduler.mjs';
import { create } from './__internal__/QueueScheduler.mjs';

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

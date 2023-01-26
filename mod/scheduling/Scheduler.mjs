/// <reference types="./Scheduler.d.ts" />
import '../scheduling.mjs';
import { create } from './__internal__/QueueScheduler.mjs';
import Scheduler$createHostScheduler from './__internal__/Scheduler/Scheduler.createHostScheduler.mjs';
import Scheduler$getCurrentTime from './__internal__/Scheduler/Scheduler.getCurrentTime.mjs';
import Scheduler$isInContinuation from './__internal__/Scheduler/Scheduler.isInContinuation.mjs';
import Scheduler$requestYield from './__internal__/Scheduler/Scheduler.requestYield.mjs';
import Scheduler$schedule from './__internal__/Scheduler/Scheduler.schedule.mjs';
import Scheduler$shouldYield from './__internal__/Scheduler/Scheduler.shouldYield.mjs';
import Scheduler$toPausableScheduler from './__internal__/Scheduler/Scheduler.toPausableScheduler.mjs';

const createHostScheduler = Scheduler$createHostScheduler;
const getCurrentTime = Scheduler$getCurrentTime;
const isInContinuation = Scheduler$isInContinuation;
const requestYield = Scheduler$requestYield;
const shouldYield = Scheduler$shouldYield;
const schedule = Scheduler$schedule;
const toPausableScheduler = Scheduler$toPausableScheduler;
const toPriorityScheduler = create;

export { createHostScheduler, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield, toPausableScheduler, toPriorityScheduler };

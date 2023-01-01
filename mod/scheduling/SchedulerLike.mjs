/// <reference types="./SchedulerLike.d.ts" />
import '../scheduling.mjs';
import { create } from './__internal__/QueueSchedulerLike.mjs';
import SchedulerLike__createHostScheduler from './__internal__/SchedulerLike/SchedulerLike.createHostScheduler.mjs';
import SchedulerLike__getCurrentTime from './__internal__/SchedulerLike/SchedulerLike.getCurrentTime.mjs';
import SchedulerLike__isInContinuation from './__internal__/SchedulerLike/SchedulerLike.isInContinuation.mjs';
import SchedulerLike__requestYield from './__internal__/SchedulerLike/SchedulerLike.requestYield.mjs';
import SchedulerLike__schedule from './__internal__/SchedulerLike/SchedulerLike.schedule.mjs';
import SchedulerLike__shouldYield from './__internal__/SchedulerLike/SchedulerLike.shouldYield.mjs';
import SchedulerLike__toPausableScheduler from './__internal__/SchedulerLike/SchedulerLike.toPausableScheduler.mjs';

const createHostScheduler = SchedulerLike__createHostScheduler;
const getCurrentTime = SchedulerLike__getCurrentTime;
const isInContinuation = SchedulerLike__isInContinuation;
const requestYield = SchedulerLike__requestYield;
const shouldYield = SchedulerLike__shouldYield;
const schedule = SchedulerLike__schedule;
const toPausableScheduler = SchedulerLike__toPausableScheduler;
const toPriorityScheduler = create;

export { createHostScheduler, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield, toPausableScheduler, toPriorityScheduler };

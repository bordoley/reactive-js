/// <reference types="./SchedulerLike.d.ts" />
import '../scheduling.mjs';
import { create } from './__internal__/QueueSchedulerLike.mjs';
import createHostScheduler$1 from './__internal__/SchedulerLike/SchedulerLike.createHostScheduler.mjs';
import getCurrentTime$1 from './__internal__/SchedulerLike/SchedulerLike.getCurrentTime.mjs';
import isInContinuation$1 from './__internal__/SchedulerLike/SchedulerLike.isInContinuation.mjs';
import requestYield$1 from './__internal__/SchedulerLike/SchedulerLike.requestYield.mjs';
import schedule$1 from './__internal__/SchedulerLike/SchedulerLike.schedule.mjs';
import shouldYield$1 from './__internal__/SchedulerLike/SchedulerLike.shouldYield.mjs';
import toPausableScheduler$1 from './__internal__/SchedulerLike/SchedulerLike.toPausableScheduler.mjs';

const createHostScheduler = createHostScheduler$1;
const getCurrentTime = getCurrentTime$1;
const isInContinuation = isInContinuation$1;
const requestYield = requestYield$1;
const shouldYield = shouldYield$1;
const schedule = schedule$1;
const toPausableScheduler = toPausableScheduler$1;
const toPriorityScheduler = create;

export { createHostScheduler, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield, toPausableScheduler, toPriorityScheduler };

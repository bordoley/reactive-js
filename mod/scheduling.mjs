/// <reference types="./scheduling.d.ts" />
import { SchedulerLike_inContinuation as SchedulerLike_inContinuation$1, SchedulerLike_now as SchedulerLike_now$1 } from './__internal__/__internal__scheduling.mjs';

/** @ignore */
const SchedulerLike_inContinuation = SchedulerLike_inContinuation$1;
/** @ignore */
const SchedulerLike_now = SchedulerLike_now$1;
/** @ignore */
const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
/** @ignore */
const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
/** @ignore */
const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");
/** @ignore */
const DispatcherLike_dispatch = Symbol("DispatcherLike_dispatch");
/** @ignore */
const DispatcherLike_scheduler = Symbol("DispatcherLike_scheduler");
/** @ignore */
const ObserverLike_dispatcher = Symbol("ObserverLike_dispatcher");
/** @ignore */
const ObserverLike_scheduler = Symbol("ObserverLike_scheduler");

export { DispatcherLike_dispatch, DispatcherLike_scheduler, ObserverLike_dispatcher, ObserverLike_scheduler, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield };

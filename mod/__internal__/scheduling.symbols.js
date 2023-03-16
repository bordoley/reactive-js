/// <reference types="./scheduling.symbols.d.ts" />

import symbol from "./symbol.js";
/** @type {unique symbol} */
export const SchedulerLike_inContinuation = symbol("SchedulerLike_inContinuation");
/** @type {unique symbol} */
export const SchedulerLike_now = symbol("SchedulerLike_now");
/** @type {unique symbol} */
export const SchedulerLike_requestYield = symbol("SchedulerLike_requestYield");
/** @type {unique symbol} */
export const SchedulerLike_shouldYield = symbol("SchedulerLike_shouldYield");
/** @type {unique symbol} */
export const SchedulerLike_schedule = symbol("SchedulerLike_schedule");
/** @type {unique symbol} */
export const ContinuationContextLike_yield = symbol("ContinuationContextLike_yield");
/** @type {unique symbol} */
export const PauseableSchedulerLike_isPaused = symbol("PauseableSchedulerLike_isPaused");
/** @type {unique symbol} */
export const PauseableSchedulerLike_pause = symbol("PauseableSchedulerLike_pause");
/** @type {unique symbol} */
export const PauseableSchedulerLike_resume = symbol("PauseableSchedulerLike_resume");
/** @type {unique symbol} */
export const VirtualTimeSchedulerLike_run = symbol("VirtualTimeSchedulerLike_run");

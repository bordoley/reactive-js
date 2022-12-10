import { Function1 } from "../../../functions.mjs";
import { SchedulerLike, PauseableSchedulerLike } from "../../../scheduling.mjs";
declare const toPausableScheduler: Function1<SchedulerLike, PauseableSchedulerLike>;
export { toPausableScheduler as default };

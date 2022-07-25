import { Function1 } from "../functions.mjs";
import { SchedulerLike, PauseableSchedulerLike } from "../scheduling.mjs";
declare const create: Function1<SchedulerLike, PauseableSchedulerLike>;
export { create };

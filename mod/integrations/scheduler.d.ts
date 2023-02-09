import { Factory } from "../functions.js";
import { SchedulerLike } from "../scheduling.js";
declare const createSchedulerWithIdlePriority: Factory<SchedulerLike>;
declare const createSchedulerWithImmediatePriority: Factory<SchedulerLike>;
declare const createSchedulerWithNormalPriority: Factory<SchedulerLike>;
declare const createSchedulerWithLowPriority: Factory<SchedulerLike>;
declare const createSchedulerWithUserBlockingPriority: Factory<SchedulerLike>;
export { createSchedulerWithIdlePriority, createSchedulerWithImmediatePriority, createSchedulerWithLowPriority, createSchedulerWithNormalPriority, createSchedulerWithUserBlockingPriority };

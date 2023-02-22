import { Factory } from "../functions.js";
import { SchedulerLike } from "../scheduling.js";
export declare const createSchedulerWithIdlePriority: Factory<SchedulerLike>;
export declare const createSchedulerWithImmediatePriority: Factory<SchedulerLike>;
export declare const createSchedulerWithNormalPriority: Factory<SchedulerLike>;
export declare const createSchedulerWithLowPriority: Factory<SchedulerLike>;
export declare const createSchedulerWithUserBlockingPriority: Factory<SchedulerLike>;

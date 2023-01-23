import { Optional } from "../../functions.js";
import { SchedulerLike } from "../../scheduling.js";
declare const get: () => SchedulerLike;
declare const getOrNone: () => Optional<SchedulerLike>;
declare const set: (scheduler: Optional<SchedulerLike>) => void;
export { get, getOrNone, set };

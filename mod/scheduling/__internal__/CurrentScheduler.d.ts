import { Optional } from "../../functions.mjs";
import { SchedulerLike } from "../../scheduling.mjs";
declare const get: () => SchedulerLike;
declare const getOrNone: () => Optional<SchedulerLike>;
declare const set: (scheduler: Optional<SchedulerLike>) => void;
export { get, getOrNone, set };

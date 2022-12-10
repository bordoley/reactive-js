import { Option } from "../../functions.mjs";
import { SchedulerLike } from "../../scheduling.mjs";
declare const get: () => SchedulerLike;
declare const getOrNone: () => Option<SchedulerLike>;
declare const set: (scheduler: Option<SchedulerLike>) => void;
export { get, getOrNone, set };

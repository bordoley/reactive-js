import { Optional } from "../../functions.js";
import { SchedulerLike } from "../../utils.js";
interface Signature {
    get(): SchedulerLike;
    set(scheduler: Optional<SchedulerLike>): Optional<SchedulerLike>;
}
export declare const set: Signature["set"];
export declare const get: Signature["get"];
export {};

import { SchedulerLike } from "../../concurrent.js";
interface Signature {
    get(delayScheduler: SchedulerLike): SchedulerLike;
}
export declare const get: Signature["get"];
export {};

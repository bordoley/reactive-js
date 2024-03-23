import { SchedulerLike } from "../../concurrent.js";
interface Signature {
    get(): SchedulerLike;
}
export declare const get: Signature["get"];
export {};

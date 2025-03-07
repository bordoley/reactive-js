import { SchedulerLike } from "../../utils.js";
interface PostTaskSchedulerModule {
    get(priority?: "user-blocking" | "user-visible" | "background"): SchedulerLike;
}
type Signature = PostTaskSchedulerModule;
export declare const get: Signature["get"];
export {};

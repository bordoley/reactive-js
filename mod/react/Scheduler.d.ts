import { DisposableLike, SchedulerLike } from "../utils.js";
interface ReactSchedulerModule {
    get(priority?: 1 | 2 | 3 | 4 | 5): SchedulerLike;
}
type Signature = ReactSchedulerModule;
export declare const getImpl: (priority?: 1 | 2 | 3 | 4 | 5) => SchedulerLike & DisposableLike;
export declare const get: Signature["get"];
export {};

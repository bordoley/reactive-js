import { DisposableLike, PauseableSchedulerLike, SchedulerLike } from "../utils.js";
interface Signature {
    create(hostScheduler: SchedulerLike): PauseableSchedulerLike & DisposableLike;
}
export declare const create: Signature["create"];
export {};

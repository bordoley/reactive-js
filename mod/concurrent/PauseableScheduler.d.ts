import { PauseableSchedulerLike, SchedulerLike } from "../concurrent.js";
import { DisposableLike } from "../utils.js";
interface Signature {
    create(hostScheduler: SchedulerLike): PauseableSchedulerLike & DisposableLike;
}
export declare const create: Signature["create"];
export {};

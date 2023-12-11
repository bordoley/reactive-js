import { SchedulerLike } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
interface Signature {
    create(hostScheduler: SchedulerLike): SchedulerLike & DisposableLike;
}
export declare const create: Signature["create"];
export {};

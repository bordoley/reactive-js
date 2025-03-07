import { PauseableSchedulerLike, SchedulerLike } from "../utils.js";
interface Signature {
    create(hostScheduler: SchedulerLike): PauseableSchedulerLike;
}
export declare const create: Signature["create"];
export {};
